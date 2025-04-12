import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BoostGarage — Твой надёжный автосервис',
  description:
    'BOOSTGARAGE — Профессиональные услуги по чип-тюнингу, настройке и оптимизации электронных блоков управления для повышения производительности и экономичности автомобилей. Работаем в Нижнем Новгороде.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'BoostGarage — Твой надёжный автосервис',
    description:
      'BOOSTGARAGE — Профессиональные услуги по чип-тюнингу, настройке и оптимизации электронных блоков управления для повышения производительности и экономичности автомобилей. Работаем в Нижнем Новгороде.',
    url: 'https://boostgarage.ru',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoostGarage — Твой надёжный автосервис',
    description:
      'BOOSTGARAGE — Профессиональные услуги по чип-тюнингу, настройке и оптимизации электронных блоков управления для повышения производительности и экономичности автомобилей. Работаем в Нижнем Новгороде.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  )
}
