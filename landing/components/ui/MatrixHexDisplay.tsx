'use client'

import { useState, useEffect, useRef } from 'react'

export default function MatrixHexDisplay({ lines = 8 }: { lines?: number }) {
  const [hexData, setHexData] = useState<
    Array<{ value: string; isUpdating: boolean }[]>
  >([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Generate a single line of hex data
  const generateHexLine = (offset: number) => {
    const hexBytes: Array<{ value: string; isUpdating: boolean }> = []

    // Format offset as 8-digit hex
    const offsetHex = offset.toString(16).padStart(8, '0').toUpperCase()
    hexBytes.push({ value: offsetHex, isUpdating: false })

    for (let i = 0; i < 16; i++) {
      const randomByte = Math.floor(Math.random() * 256)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
      hexBytes.push({ value: randomByte, isUpdating: false })
    }

    return hexBytes
  }

  // Initialize hex data
  useEffect(() => {
    const initialData: Array<{ value: string; isUpdating: boolean }[]> = []
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
        const newData = JSON.parse(JSON.stringify(prevData)) // Deep clone

        // Reset all updating flags
        newData.forEach((line: any[]) => {
          line.forEach((byte) => {
            byte.isUpdating = false
          })
        })

        // Pick 1-3 random lines to update
        const numLinesToUpdate = Math.floor(Math.random() * 3) + 1

        for (let l = 0; l < numLinesToUpdate; l++) {
          // Pick a random line
          const lineIndex = Math.floor(Math.random() * lines)

          // Pick 1-4 random byte positions to update (excluding the offset)
          const numBytesToUpdate = Math.floor(Math.random() * 4) + 1
          const byteIndices = new Set<number>()

          while (byteIndices.size < numBytesToUpdate) {
            // +1 to skip the offset
            byteIndices.add(Math.floor(Math.random() * 16) + 1)
          }

          // Update the selected bytes
          byteIndices.forEach((index) => {
            newData[lineIndex][index].value = Math.floor(Math.random() * 256)
              .toString(16)
              .padStart(2, '0')
              .toUpperCase()
            newData[lineIndex][index].isUpdating = true
          })
        }

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
    <div className='w-full h-full flex items-center justify-center overflow-hidden bg-gray-950 rounded-xl'>
      <pre className='font-mono text-xs sm:text-sm md:text-base leading-relaxed p-4 w-full'>
        {hexData.map((line, lineIndex) => (
          <div key={lineIndex} className='flex flex-wrap mb-1'>
            <span className='text-cyan-500 mr-4'>{line[0].value}</span>
            {line.slice(1, 9).map((byte, byteIndex) => (
              <span
                key={`${lineIndex}-${byteIndex}`}
                className={`transition-all duration-300 mx-1 ${
                  byte.isUpdating
                    ? 'text-cyan-300 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.7)]'
                    : 'text-green-400'
                }`}
              >
                {byte.value}
              </span>
            ))}
            <span className='mx-2'></span>
            {line.slice(9).map((byte, byteIndex) => (
              <span
                key={`${lineIndex}-${byteIndex + 8}`}
                className={`transition-all duration-300 mx-1 ${
                  byte.isUpdating
                    ? 'text-cyan-300 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.7)]'
                    : 'text-green-400'
                }`}
              >
                {byte.value}
              </span>
            ))}
          </div>
        ))}
      </pre>
    </div>
  )
}
