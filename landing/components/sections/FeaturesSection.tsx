import {
  Battery,
  PinIcon as Chip,
  Cog,
  Cpu,
  FileCode,
  Gauge,
  Key,
  Laptop,
  LineChart,
} from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Чип-тюнинг',
    description:
      'Профессиональная модификация программного кода ЭБУ  для улучшения производительности.',
  },
  {
    icon: FileCode,
    title: 'Индивидуальные прошивки',
    description:
      'Разработка уникальных прошивок под конкретные требования и модификации.',
  },
  {
    icon: LineChart,
    title: 'Обкатка топливных карт',
    description:
      'Точная настройка и оптимизация топливных карт в режиме реального времени.',
  },
  {
    icon: Laptop,
    title: 'Компьютерная диагностика',
    description:
      'Автомобили, мотоциклы, снегоходы, квадроциклы, пассажирский и грузовой транспорт (кроме МРТ человека).',
  },
  {
    icon: Battery,
    title: 'Li-Ion элементы питания',
    description:
      'Профессиональное обслуживание и восстановление аккумуляторных батарей электромобилей.',
  },
  {
    icon: Gauge,
    title: 'Корректировка ОДОМЕТРОВ',
    description:
      'Профессиональная настройка и корректировка показаний одометров.',
  },
  {
    icon: Key,
    title: 'Прописка новых ключей в иммобилайзер',
    description:
      'Программирование и интеграция новых ключей в систему иммобилайзера.',
  },
  {
    icon: Chip,
    title: 'Программирование чипов ключей',
    description:
      'Настройка и программирование электронных чипов для автомобильных ключей.',
  },
  {
    icon: Cog,
    title: 'Прошивка коробок передач',
    description:
      'Оптимизация и настройка программного обеспечения для автоматических коробок передач.',
  },
]

export function FeaturesSection() {
  return (
    <section
      id='features'
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-900'
    >
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white'>
              Услуги
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl text-white'>
              Комплексные решения для вашего авто{' '}
            </h2>
            <p className='max-w-[900px] text-gray-400 md:text-xl'>
              Мы предлагаем полный спектр услуг по чип-тюнингу и обслуживанию
              автомобилей, чтобы ваш транспорт работал на максимуме
              возможностей
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className='flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]'
            >
              <div className='rounded-full bg-[#ff6e00]/10 p-3 mb-4'>
                <Icon className='h-6 w-6 text-[#ff6e00]' />
              </div>
              <h3 className='text-xl font-bold text-center h-[60px] flex items-center text-white'>
                {title}
              </h3>
              <p className='text-center text-sm text-gray-400 flex-grow overflow-auto mt-2'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
