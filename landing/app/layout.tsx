import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BOOSTGARAGE',
  description:
    'BOOSTGARAGE — Профессиональные услуги по чип-тюнингу, настройке и оптимизации электронных блоков управления для повышения производительности и экономичности автомобилей.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        <link rel='shortcut icon' href='/favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  )
}
