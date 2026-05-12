import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Home – Orthomoleculair Diëtist',
  description:
    'Als orthomoleculair diëtist help ik jou je gezondheid te verbeteren en je klachten te verminderen. Persoonlijk voedingsadvies, wetenschappelijk én holistisch.',
}

const trajecten = [
  {
    slug: 'starttraject',
    title: 'Starttraject',
    tagline: 'Eenmalig',
    description:
      'Eenmalige consultatie voor een helder plan. Perfect voor wie snel inzicht wil in de nodige veranderingen voor een gezonder voedingspatroon.',
    accent: 'border-blue-accent',
    featured: false,
  },
  {
    slug: 'versterktraject',
    title: 'Versterktraject',
    tagline: '3 maanden',
    description:
      'Diepgaande begeleiding om je voeding te optimaliseren en je gezondheid te versterken met concrete resultaten.',
    accent: 'border-terracotta',
    featured: true,
  },
]

const leerpunten = [
  {
    icon: '🫙',
    title: 'Ideale basis voor jouw klachten',
    description: 'Hoe creëer je een gezonde basis voor je voeding, slaap, beweging en leefstijl?',
  },
  {
    icon: '⭐',
    title: 'Kick-start je ochtendroutine',
    description: 'Een goede ochtendroutine legt de basis voor een energieke dag zonder klachten.',
  },
  {
    icon: '💊',
    title: 'Kracht van suppletie',
    description: 'Welke supplementen zijn voor jóu van belang bij het herstellen van je balans?',
  },
  {
    icon: '🚫',
    title: 'Niet meer doen!',
    description: 'Welke voedingsmiddelen verergeren je klachten en kun je het beste (tijdelijk) vermijden?',
  },
  {
    icon: '🛒',
    title: 'Slimmer shoppen in de supermarkt',
    description:
      'We worden overspoeld met bewerkte producten (ultra-processed foods). Ik leer je etiketten te lezen zodat je bewuste en gezonde keuzes kunt maken.',
  },
]

const ervaringen = [
  {
    quote:
      'Anna luistert aandachtig, biedt persoonlijk advies en zorgt ervoor dat je je doelen op een haalbare manier bereikt. Haar kennis en betrokkenheid maken een groot verschil in je gezondheidstraject. Mijn PCOS-klachten zijn na vier jaar nu compleet verdwenen, geweldig!',
    naam: 'Jantje Hagel',
  },
  {
    quote:
      'Dankzij het traject weet ik nu precies wat mijn lichaam nodig heeft. Mijn energieniveau is enorm verbeterd en de darmklachten zijn bijna verdwenen. Ik had dit jaren eerder moeten doen!',
    naam: 'Sophie van den Berg',
  },
  {
    quote:
      'Eindelijk een aanpak die écht bij mij past. Anna neemt de tijd om jou echt te begrijpen en dat merk je in elk advies. Na acht weken voel ik me als herboren.',
    naam: 'Lisa Vermeer',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brown-gold leading-tight mb-6">
                Jouw herstel begint hier, met voeding die bij jou past
              </h1>
              <p className="font-body text-text-medium text-base leading-relaxed mb-8 max-w-lg">
                Leuk dat je er bent! Als orthomoleculair diëtist vind ik het belangrijk om jou
                te helpen in je gezondheid en je klachten te verminderen. Onder mijn begeleiding
                geef ik persoonlijk advies dat goed bij jou en je leefstijl past, waarbij ik
                zowel vanuit een wetenschappelijk oogpunt als een holistische benadering naar je
                kijk. Ik geloof dat ieder mens uniek is, en daarom stel ik samen met jou doelen
                die aansluiten bij jouw persoonlijke behoeften en leefstijl.
              </p>
              <Link href="/contact" className="btn-terracotta">
                Boek jouw consult!
              </Link>
            </div>
            <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="Annick Rozendaal op de markt"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── De kracht van voeding ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/kracht-voeding.jpg"
                alt="Boodschappentas met verse groenten op de markt"
                fill
                className="object-cover"
              />
            </div>
            <div className="border-l-4 border-blue-accent pl-8 order-1 lg:order-2">
              <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-6">
                De kracht van voeding
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                Jarenlang had ik zelf last van darmklachten, heftige acne en een opgeblazen
                gevoel. Mijn hormonen waren volledig uit balans en pas toen ik overstapte op een
                plantaardig dieet, verdwenen mijn klachten bijna volledig. Ik voelde mij weer in
                balans. Dat gun ik jou ook!
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-8">
                Ik geloof in de kracht van voeding en het zelf herstellend vermogen van ons
                lichaam. Uit balans zijn komt vaak voor, maar met de juiste voedingsstoffen kan
                je lichaam langzaam zich herstellen en weer in evenwicht komen. Met kleine
                stapjes kun je het verschil al voelen.
              </p>
              <Link href="/over-mij" className="btn-terracotta">
                Meer over mij
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajecten + Wat jij altijd leert ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trajecten */}
          <h2 className="font-heading text-[72px] sm:text-[96px] lg:text-[112px] leading-none text-terracotta font-bold mb-10">
            Trajecten
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start mb-16">
            <div className="lg:col-span-1">
              <p className="font-body text-text-medium text-sm leading-relaxed mb-8">
                Ik bied twee trajecten aan waarmee we samen jouw gezondheidsdoelen gaan proberen
                te bereiken. Bij beide trajecten sta ik 24/7 voor je klaar om je te helpen bij
                al jouw vragen.
              </p>
              <Link href="/trajecten" className="btn-terracotta">
                Ontdek de trajecten
              </Link>
            </div>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {trajecten.map((t) => (
                <div
                  key={t.slug}
                  className={`flex flex-col bg-white/40 rounded-2xl border border-beige-dark border-t-4 ${t.accent} p-6 hover:shadow-md transition-shadow`}
                >
                  <span className="font-body text-xs uppercase tracking-widest text-text-medium/60 mb-2">
                    {t.tagline}
                  </span>
                  <h3 className="font-heading text-2xl text-blue-accent font-semibold mb-3">
                    {t.title}
                  </h3>
                  <p className="font-body text-text-medium text-sm leading-relaxed flex-grow mb-4">
                    {t.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Link href="/trajecten" className="font-body text-blue-accent text-sm hover:underline">
                      Meer weten →
                    </Link>
                    {t.featured && (
                      <span className="inline-block bg-terracotta/10 text-terracotta text-xs font-body font-semibold px-3 py-1 rounded-full">
                        Meest gekozen
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wat jij altijd leert — compacte strip */}
          <div className="border-t border-beige-dark pt-12">
            <p className="font-body text-xs uppercase tracking-widest text-brown-light mb-8">
              Wat jij sowieso gaat leren
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {leerpunten.map((punt) => (
                <div key={punt.title}>
                  <span className="text-2xl block mb-2">{punt.icon}</span>
                  <h4 className="font-body font-semibold text-text-dark text-sm mb-1">
                    {punt.title}
                  </h4>
                  <p className="font-body text-text-medium text-xs leading-relaxed">
                    {punt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Ervaringen ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[72px] sm:text-[96px] lg:text-[112px] leading-none text-blue-accent font-bold mb-12">
            Ervaringen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ervaringen.map((e, i) => (
              <div key={i} className="bg-white/40 rounded-2xl p-8 border border-beige-dark flex flex-col">
                <p className="font-body text-text-medium leading-relaxed mb-6 flex-grow">
                  &ldquo;{e.quote}&rdquo;
                </p>
                <p className="font-body font-semibold text-text-dark text-sm">– {e.naam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
