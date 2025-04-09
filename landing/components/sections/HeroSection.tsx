import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import MatrixHexDisplay from '../ui/MatrixHexDisplay'

export function HeroSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-950'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>
                Мы не перепродаем прошивки, мы их делаем!
              </h1>
              <p className='max-w-[600px] text-gray-400 md:text-xl'>
                Boost productivity, reduce overhead, and focus on what matters
                most with our all-in-one platform.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Button
                size='lg'
                className='gap-1 bg-[#ff6e00] hover:bg-[#e05f00] text-white'
                asChild
              >
                <Link
                  href='https://t.me/AAAaaa123'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Записаться <ChevronRight className='h-4 w-4' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-gray-700 text-gray-200 hover:bg-gray-800'
                asChild
              >
                <Link
                  href='https://yandex.ru/maps/?ll=43.887606,56.256736&z=17&mode=whatshere&whatshere[point]=43.887606,56.256736'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Доехать
                </Link>
              </Button>
            </div>
          </div>
          <div className='mx-auto h-[350px] w-full max-w-[550px] overflow-hidden rounded-xl sm:w-full lg:order-last'>
            <MatrixHexDisplay lines={8} />
          </div>
        </div>
      </div>
    </section>
  )
}
