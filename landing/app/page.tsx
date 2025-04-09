import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Battery,
  ChevronRight,
  PinIcon as Chip,
  Cog,
  Cpu,
  FileCode,
  Gauge,
  Key,
  Laptop,
  LineChart,
  Menu,
  Zap,
  Droplet,
  Wind,
  Plus,
  Ban,
  Activity,
  Sliders,
  PenToolIcon as Tool,
} from "lucide-react"
import MatrixHexDisplay from "../components/matrix-hex-display"
import { ContactIcons } from "../components/contact-icons"
import { Phone } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col dark bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/boostgarage.svg" alt="BoostGarage Logo" width={32} height={32} className="h-8 w-auto ml-2" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-[#ff6e00]">
              Features
            </Link>
            <Link href="#chip-tuning" className="text-sm font-medium text-gray-300 hover:text-[#ff6e00]">
              Chip-Tuning
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-[#ff6e00]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ContactIcons className="hidden md:flex" />
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Мы не перепродаем прошивки, мы их делаем!
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Boost productivity, reduce overhead, and focus on what matters most with our all-in-one platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-[#ff6e00] hover:bg-[#e05f00] text-white" asChild>
                    <Link href="https://t.me/AAAaaa123" target="_blank" rel="noopener noreferrer">
                      Записаться <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-gray-200 hover:bg-gray-800"
                    asChild
                  >
                    <Link
                      href="https://yandex.ru/maps/?ll=43.887606,56.256736&z=17&mode=whatshere&whatshere[point]=43.887606,56.256736"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Доехать
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto h-[350px] w-full max-w-[550px] overflow-hidden rounded-xl sm:w-full lg:order-last">
                <MatrixHexDisplay lines={8} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Everything You Need in One Place
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl">
                  Our platform offers a comprehensive suite of tools designed to help your business thrive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature items with consistent heights */}
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Cpu className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Модификация программного кода ЭБУ (чип-тюнинг)
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Профессиональная модификация программного обеспечения для улучшения производительности.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <FileCode className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Создание индивидуальной прошивки
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Разработка уникальных прошивок под конкретные требования и модификации.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <LineChart className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Обкатка/редактирование On-Line топливных карт
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Точная настройка и оптимизация топливных карт в режиме реального времени.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Laptop className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Компьютерная диагностика всего, что движется
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Автомобили, мотоциклы, снегоходы, квадроциклы, пассажирский и грузовой транспорт *кроме МРТ человека)
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Battery className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Замена и ремонт Li-Ion элементов питания в электрокарах
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Профессиональное обслуживание и восстановление аккумуляторных батарей электромобилей.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Gauge className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Корректировка ОДОМЕТРОВ
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Профессиональная настройка и корректировка показаний одометров.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Key className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Прописка новых ключей в иммобилайзер
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Программирование и интеграция новых ключей в систему иммобилайзера.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Chip className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Программирование чипов ключей
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Настройка и программирование электронных чипов для автомобильных ключей.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm h-[300px]">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Cog className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold text-center h-[60px] flex items-center text-white">
                  Прошивка коробок передач
                </h3>
                <p className="text-center text-sm text-gray-400 flex-grow overflow-auto">
                  Оптимизация и настройка программного обеспечения для автоматических коробок передач.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chip Tuning Section */}
        <section id="chip-tuning" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white">Chip-Tuning</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Чип-тюнинг для вашего автомобиля
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl">
                  Профессиональная настройка и оптимизация электронных блоков управления
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Zap className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Правка топливных карт для увеличения мощности ДВС</h3>
                <p className="text-sm text-gray-400">Обгони соседа по ряду</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Droplet className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Правка топливных карт для экономии топлива</h3>
                <p className="text-sm text-gray-400">Заправки вас перестанут любить как раньше</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Wind className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Повышение давление надува в турбине</h3>
                <p className="text-sm text-gray-400">Увеличение мощности турбированных двигателей</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Plus className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Активация расширенных/скрытых функций</h3>
                <p className="text-sm text-gray-400">При установке ништяков (дополнительного оборудования)</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Ban className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Отключение EGR</h3>
                <p className="text-sm text-gray-400">Улучшение работы двигателя и снижение расхода топлива</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Ban className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Отключение ДК (лямбда-зонда)</h3>
                <p className="text-sm text-gray-400">Оптимизация работы двигателя</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Activity className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Подгонка топливных карт под Евро-2</h3>
                <p className="text-sm text-gray-400">Адаптация под различные стандарты</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Sliders className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Создание более острой «педали Газа»</h3>
                <p className="text-sm text-gray-400">Улучшение отклика и управляемости автомобиля</p>
              </div>

              <div className="flex flex-col items-start rounded-lg border border-gray-800 bg-gray-950 p-6 shadow-sm">
                <div className="rounded-full bg-[#ff6e00]/10 p-3 mb-4">
                  <Tool className="h-6 w-6 text-[#ff6e00]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Восстановление ЭБУ после неудачного программирования
                </h3>
                <p className="text-sm text-gray-400">Исправление ошибок после работы дилетантов</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-block rounded-lg bg-[#ff6e00] px-3 py-1 text-sm text-white mb-2">Контакты</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Готовы улучшить свой автомобиль?
                </h2>
                <p className="text-gray-400 md:text-xl mx-auto max-w-[800px]">
                  Свяжитесь с нами для консультации и записи на сервис. Наши специалисты готовы ответить на все ваши
                  вопросы.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
                <div className="flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group">
                  <div className="rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200">
                    <Phone className="h-8 w-8 text-[#ff6e00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Телефон</h3>
                  <Link
                    href="tel:+79200016094"
                    className="text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg"
                  >
                    +7 920 001 6094
                  </Link>
                </div>

                <div className="flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group">
                  <div className="rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200">
                    <svg className="h-8 w-8 text-[#ff6e00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121L8.48 13.037l-2.95-.924c-.642-.204-.657-.642.136-.953l11.526-4.438c.586-.174 1.1.146.916.644l.004-.118z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Telegram</h3>
                  <Link
                    href="https://t.me/AAAaaa123"
                    className="text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @AAAaaa123
                  </Link>
                </div>

                <div className="flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gray-950 shadow-lg transition-all duration-200 hover:border-[#ff6e00]/50 hover:shadow-[#ff6e00]/5 group">
                  <div className="rounded-full bg-[#ff6e00]/10 p-4 mb-4 group-hover:bg-[#ff6e00]/20 transition-colors duration-200">
                    <svg className="h-8 w-8 text-[#ff6e00]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                  <Link
                    href="whatsapp://send?phone=+79200016094"
                    className="text-gray-400 hover:text-[#ff6e00] transition-colors duration-200 text-lg"
                  >
                    +7 920 001 6094
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  size="lg"
                  className="bg-[#ff6e00] hover:bg-[#e05f00] text-white px-8 py-6 text-lg h-auto rounded-xl shadow-lg shadow-[#ff6e00]/10 transition-all duration-200 hover:shadow-[#ff6e00]/20"
                  asChild
                >
                  <Link
                    href="https://t.me/AAAaaa123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.296c-.146.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.054 5.56-5.022c.242-.213-.054-.334-.373-.121L8.48 13.037l-2.95-.924c-.642-.204-.657-.642.136-.953l11.526-4.438c.586-.174 1.1.146.916.644l.004-.118z" />
                    </svg>
                    Записаться на сервис
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-200 hover:bg-gray-800 px-8 py-6 text-lg h-auto rounded-xl transition-all duration-200"
                  asChild
                >
                  <Link
                    href="https://yandex.ru/maps/?ll=43.887606,56.256736&z=17&mode=whatshere&whatshere[point]=43.887606,56.256736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    Как доехать
                  </Link>
                </Button>
              </div>

              <div className="mt-12 p-6 rounded-xl border border-gray-800 bg-gray-950 max-w-3xl">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="rounded-full bg-[#ff6e00]/10 p-4 flex-shrink-0">
                    <svg
                      className="h-10 w-10 text-[#ff6e00]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">Нужна консультация?</h3>
                    <p className="text-gray-400 mb-4">
                      Мы всегда готовы ответить на ваши вопросы и помочь с выбором услуг
                    </p>
                    <Button
                      className="bg-[#ff6e00]/10 hover:bg-[#ff6e00]/20 text-[#ff6e00] border border-[#ff6e00]/20"
                      asChild
                    >
                      <Link href="tel:+79200016094">Позвонить сейчас</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 bg-gray-950 py-6 md:py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/boostgarage.svg" alt="BoostGarage Logo" width={24} height={24} className="h-6 w-auto ml-2" />
              <span className="text-xl font-bold text-white">BoostGarage</span>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} BoostGarage. Все права защищены.</p>
            <ContactIcons />
          </div>
        </div>
      </footer>
    </div>
  )
}
