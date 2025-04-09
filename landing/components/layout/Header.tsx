import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ContactIcons } from '../ui/ContactIcons'

const links = [
  { label: 'Услуги', href: '#features' },
  { label: 'Чип-тюнинг', href: '#chip-tuning' },
  { label: 'Контакты', href: '#contact' },
]

export function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image
            src='/boostgarage.svg'
            alt='BoostGarage Logo'
            width={32}
            height={32}
            className='h-8 w-auto ml-2'
          />
        </div>

        <nav className='hidden md:flex items-center gap-6'>
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='text-sm font-medium text-gray-300 hover:text-[#ff6e00]'
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-4'>
          <ContactIcons className='hidden md:flex' />
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden text-gray-300 hover:text-white'
          >
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Меню</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
