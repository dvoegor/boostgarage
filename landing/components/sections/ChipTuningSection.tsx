import {
  Zap,
  Droplet,
  Wind,
  Plus,
  Ban,
  Activity,
  Sliders,
  PenToolIcon as Tool,
} from 'lucide-react'

const cards = [
  {
    icon: Zap,
    title: 'Правка топливных карт для увеличения мощности ДВС',
    description: 'Обгони соседа по ряду',
  },
  {
    icon: Droplet,
    title: 'Правка топливных карт для экономии топлива',
    description: 'Заправки вас перестанут любить как раньше',
  },
  {
    icon: Wind,
    title: 'Повышение давления надува в турбине',
    description: 'Увеличение мощности турбированных двигателей',
  },
  {
    icon: Plus,
    title: 'Активация расширенных/скрытых функций',
    description: 'При установке ништяков (дополнительного оборудования)',
  },
  {
    icon: Ban,
    title: 'Отключение EGR',
    description: 'Улучшение работы двигателя и снижение расхода топлива',
  },
  {
    icon: Ban,
    title: 'Отключение ДК (лямбда-зонда)',
    description: 'Оптимизация работы двигателя',
  },
  {
    icon: Activity,
    title: 'Подгонка топливных карт под Евро-2',
    description: 'Адаптация под различные стандарты',
  },
  {
    icon: Sliders,
    title: 'Создание более острой «педали Газа»',
    description: 'Улучшение отклика и управляемости автомобиля',
  },
  {
    icon: Tool,
    title: 'Восстановление ЭБУ после неудачного программирования',
    description: 'Исправление ошибок после работы дилетантов',
  },
]

export function ChipTuningSection() {
  return (
    <section
      id='chip-tuning'
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-950'
    >
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white'>
              Chip-Tuning
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl text-white'>
              Чип-тюнинг для вашего автомобиля
            </h2>
            <p className='max-w-[900px] text-gray-400 md:text-xl'>
              Профессиональная настройка и оптимизация электронных блоков
              управления
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card) => (
            <div
              key={card.title}
              className='flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm'
            >
              <div className='rounded-full bg-[#ff6e00]/10 p-3 mb-4'>
                <card.icon className='h-6 w-6 text-[#ff6e00]' />
              </div>
              <h3 className='text-xl font-bold mb-2 text-white'>
                {card.title}
              </h3>
              <p className='text-sm text-gray-400'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
