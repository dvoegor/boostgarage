import Image from 'next/image'
import { ContactIcons } from '../ui/ContactIcons'

export function Footer() {
  return (
    <footer className='w-full border-t border-gray-800 bg-gray-950 py-6 md:py-12'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Image
              src='/boostgarage.svg'
              alt='BoostGarage Logo'
              width={24}
              height={24}
              className='h-6 w-auto ml-2'
            />
          </div>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} BoostGarage. Все права защищены.
          </p>
          <ContactIcons />
        </div>
      </div>
    </footer>
  )
}
