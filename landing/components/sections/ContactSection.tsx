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

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8'>
            <div className='flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200'>
                <Phone className='h-8 w-8 text-[#ff6e00]' />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Телефон</h3>
              <Link
                href='tel:+79200016094'
                className='text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg'
              >
                +7 920 001 6094
              </Link>
            </div>

            <div className='flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200'>
                <svg
                  className='h-8 w-8 text-[#ff6e00]'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121L8.48 13.037l-2.95-.924c-.642-.204-.657-.642.136-.953l11.526-4.438c.586-.174 1.1.146.916.644l.004-.118z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Telegram</h3>
              <Link
                href='https://t.me/AAAaaa123'
                className='text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg'
                target='_blank'
                rel='noopener noreferrer'
              >
                @AAAaaa123
              </Link>
            </div>

            <div className='flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group'>
              <div className='rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200'>
                <svg
                  className='h-8 w-8 text-[#ff6e00]'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>WhatsApp</h3>
              <Link
                href='whatsapp://send?phone=+79200016094'
                className='text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg'
              >
                +7 920 001 6094
              </Link>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 mt-10'>
            <Button
              size='lg'
              className='bg-[#ff6e00] hover:bg-[#e05f00] text-white px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-[#ff6e00]/10 transition-all duration-200 hover:shadow-[#ff6e00]/20'
              asChild
            >
              <Link
                href='https://t.me/AAAaaa123'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121L8.48 13.037l-2.95-.924c-.642-.204-.657-.642.136-.953l11.526-4.438c.586-.174 1.1.146.916.644l.004-.118z' />
                </svg>
                Записаться на сервис
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='border-gray-700 text-gray-200 hover:bg-gray-800 px-8 py-6 text-lg h-auto rounded-xl transition-all duration-200'
              asChild
            >
              <Link
                href='https://yandex.ru/maps/?ll=43.887606,56.256736&z=17&mode=whatshere&whatshere[point]=43.887606,56.256736'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
                </svg>
                Как доехать
              </Link>
            </Button>
          </div>

          <div className='mt-12 p-6 rounded-xl border border-gray-800 bg-gray-950 max-w-3xl'>
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
                <Button
                  className='bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20'
                  asChild
                >
                  <Link href='tel:+79200016094'>Позвонить сейчас</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
