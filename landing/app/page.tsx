import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { ChipTuningSection } from '@/components/sections/ChipTuningSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function LandingPage() {
  return (
    <div className='flex min-h-screen flex-col dark bg-gray-950 text-gray-100'>
      <Header />

      <main className='flex-1'>
        <HeroSection />
        <FeaturesSection />
        <ChipTuningSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
