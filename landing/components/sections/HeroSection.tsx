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
            <div className='space-y-6'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white text-center sm:text-left'>
                Мы не перепродаем прошивки, мы их делаем!
              </h1>
              <p className='max-w-[600px] text-gray-400 text-sm sm:text-base md:text-xl'>
                Более 15 лет опыта работы в сфере тюнинга. Реализовано сотни
                «Турбо» проектов, тысячи довольных клиентов и выпито
                бесчисленное количество чашек кофе. Наше преимущество — это
                тёплый и чистый автосервис в{' '}
                <span className='text-cyan-300'>Нижнем Новгороде</span>,
                оснащённый современным оборудованием и командой профессионалов,
                готовых найти индивидуальный подход к каждому клиенту.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Button
                size='lg'
                className='gap-1 bg-[#ff6e00] hover:bg-[#e05f00] text-white mt-2'
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
            </div>
          </div>
          <div className='mx-auto h-[350px] w-full max-w-[550px] overflow-hidden rounded-xl sm:w-full lg:order-last hidden sm:flex'>
            <MatrixHexDisplay lines={8} />
          </div>
        </div>
      </div>
    </section>
  )
}
