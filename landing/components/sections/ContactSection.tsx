import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function ContactSection() {
  return (
    <section
      id='contact'
      className='w-full py-12 md:py-24 lg:py-32 bg-gray-900'
    >
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col items-center justify-center space-y-8 text-center'>
          <div className='space-y-3 max-w-3xl'>
            <div className='inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white mb-2'>
              Контакты
            </div>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl text-white'>
              Готовы улучшить свой автомобиль?
            </h2>
            <p className='text-gray-400 md:text-xl mx-auto max-w-[800px]'>
              Свяжитесь с нами для консультации и записи на сервис. Наши
              специалисты готовы ответить на все ваши вопросы.
            </p>
          </div>

          <div className='mt-12 p-6 rounded-xl border border-gray-800 bg-gray-950 max-w-4xl w-full'>
            <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 flex-shrink-0'>
                <svg
                  className='h-10 w-10 text-[#ff6e00]'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  Нужна консультация?
                </h3>
                <p className='text-gray-400 mb-4'>
                  Мы всегда готовы ответить на ваши вопросы и помочь с выбором
                  услуг
                </p>
                <div className='flex gap-2'>
                  <Button
                    className='bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20'
                    asChild
                  >
                    <Link href='tel:+79200016094'>Позвонить сейчас</Link>
                  </Button>
                  <Button
                    className='bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20'
                    asChild
                  >
                    <Link href='whatsapp://send?phone=+79200016094'>
                      Спросить в WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-gray-800 bg-gray-950 max-w-4xl w-full'>
            <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 flex-shrink-0'>
                <svg
                  className='h-10 w-10 text-[#ff6e00]'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                </svg>
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  Как доехать?
                </h3>
                <p className='text-gray-400 mb-4'>
                  ул. Дружаева, 2Г, Нижний Новгород (Пн-Пт 10:00–20:00)
                </p>
                <Button
                  className='bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20'
                  asChild
                >
                  <Link
                    href='https://yandex.ru/maps/?ll=43.887606,56.256736&z=17&mode=whatshere&whatshere[point]=43.887606,56.256736'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Открыть карту
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className='p-6 rounded-xl border border-gray-800 bg-gray-950 max-w-4xl w-full'>
            <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 flex-shrink-0'>
                <svg
                  className='h-8 w-8 text-[#ff6e00]'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121L8.48 13.037l-2.95-.924c-.642-.204-.657-.642.136-.953l11.526-4.438c.586-.174 1.1.146.916.644l.004-.118z' />
                </svg>
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-xl font-bold text-white mb-2'>
                  Как записаться?
                </h3>
                <p className='text-gray-400 mb-4'>
                  Через нашего оператора в Telegram
                </p>
                <Button
                  className='bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20'
                  asChild
                >
                  <Link
                    href='https://t.me/AAAaaa123'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Открыть чат
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
