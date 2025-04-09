"use client"

import { useState, useEffect, useRef } from "react"

export default function HexDataDisplay({ lines = 8 }: { lines?: number }) {
  const [hexData, setHexData] = useState<string[][]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Generate a single line of hex data
  const generateHexLine = (offset: number) => {
    const hexBytes: string[] = []
    for (let i = 0; i < 16; i++) {
      const randomByte = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase()
      hexBytes.push(randomByte)
    }

    // Format offset as 8-digit hex
    const offsetHex = offset.toString(16).padStart(8, "0").toUpperCase()

    return [offsetHex, ...hexBytes]
  }

  // Initialize hex data
  useEffect(() => {
    const initialData: string[][] = []
    for (let i = 0; i < lines; i++) {
      initialData.push(generateHexLine(i * 16))
    }
    setHexData(initialData)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [lines])

  // Update random bytes at random intervals
  useEffect(() => {
    if (hexData.length === 0) return

    const updateRandomBytes = () => {
      setHexData((prevData) => {
        const newData = [...prevData]

        // Pick a random line
        const lineIndex = Math.floor(Math.random() * lines)

        // Pick 1-3 random byte positions to update (excluding the offset)
        const numBytesToUpdate = Math.floor(Math.random() * 3) + 1
        const byteIndices = new Set<number>()

        while (byteIndices.size < numBytesToUpdate) {
          // +1 to skip the offset
          byteIndices.add(Math.floor(Math.random() * 16) + 1)
        }

        // Update the selected bytes
        const updatedLine = [...newData[lineIndex]]
        byteIndices.forEach((index) => {
          updatedLine[index] = Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0")
            .toUpperCase()
        })

        newData[lineIndex] = updatedLine
        return newData
      })

      // Set next update interval (300-700ms)
      const nextInterval = Math.random() * 400 + 300
      intervalRef.current = setTimeout(updateRandomBytes, nextInterval)
    }

    // Start the update cycle
    intervalRef.current = setTimeout(updateRandomBytes, 500)

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [hexData, lines])

  if (hexData.length === 0) return null

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gray-950 rounded-xl">
      <pre className="font-mono text-sm md:text-base leading-relaxed p-4 w-full">
        {hexData.map((line, lineIndex) => (
          <div key={lineIndex} className="flex flex-wrap">
            <span className="text-cyan-500 mr-4">{line[0]}</span>
            {line.slice(1, 9).map((byte, byteIndex) => (
              <span
                key={`${lineIndex}-${byteIndex}`}
                className="text-green-400 transition-all duration-300 hover:text-green-300 mx-1 relative group"
              >
                {byte}
                <span className="absolute inset-0 bg-green-400/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </span>
            ))}
            <span className="mx-2"></span>
            {line.slice(9).map((byte, byteIndex) => (
              <span
                key={`${lineIndex}-${byteIndex + 8}`}
                className="text-green-400 transition-all duration-300 hover:text-green-300 mx-1 relative group"
              >
                {byte}
                <span className="absolute inset-0 bg-green-400/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  )
}
