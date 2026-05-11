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
  {
    slug: 'transformatietraject',
    title: 'Transformatietraject',
    tagline: '6 maanden',
    description:
      'Het meest uitgebreide traject voor wie zijn gezondheid naar een hoger niveau wil tillen en langdurige resultaten wil bereiken.',
    accent: 'border-brown-gold',
  },
]

const leerpunten = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto" fill="none">
        <ellipse cx="20" cy="22" rx="11" ry="14" stroke="#8B1A1A" strokeWidth="2" />
        <path d="M20 8 C20 8 16 12 20 16" stroke="#8B1A1A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Ideale basis gericht op jouw klachten',
    description: 'Hoe creëer je een gezonde basis voor je voeding, slaap, beweging en leefstijl?',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto" fill="none">
        <polygon points="20,6 24,16 35,16 26,23 29,34 20,27 11,34 14,23 5,16 16,16" fill="#B8860B" />
      </svg>
    ),
    title: 'Kick-start je dag met een ochtendroutine',
    description:
      'Hoe zorg je voor een energieke start van je dag? Een goede ochtendroutine kan helpen om klachten gedurende de dag te voorkomen.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto" fill="none">
        <ellipse cx="15" cy="20" rx="7" ry="11" fill="#4B4B8F" opacity="0.85" />
        <ellipse cx="25" cy="20" rx="7" ry="11" fill="#7B7BAF" opacity="0.7" />
      </svg>
    ),
    title: 'Kracht van suppletie',
    description:
      'Suppletie kan een belangrijke rol spelen in het herstellen van je balans. Ik geef je graag advies over welke supplementen voor jou van belang zijn!',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10 mx-auto" fill="none">
        <rect x="12" y="10" width="16" height="20" rx="3" fill="#7A6040" />
        <rect x="16" y="6" width="8" height="6" rx="1" fill="#9B7D55" />
      </svg>
    ),
    title: 'Niet meer doen!',
    description:
      'Welke voedingsmiddelen kunnen je klachten verergeren en kun je het beste (tijdelijk) vermijden?',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-brown-gold leading-tight mb-6">
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

            <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden">
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
      <section className="bg-beige py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/kracht-voeding.jpg"
                alt="Boodschappentas met verse groenten op de markt"
                fill
                className="object-cover"
              />
            </div>

            <div className="border-l-4 border-blue-accent pl-8 order-1 lg:order-2">
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-6">
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

      {/* ── Trajecten preview ── */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[80px] sm:text-[100px] lg:text-[120px] leading-none text-terracotta font-bold mb-10">
            Trajecten
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left: intro + button */}
            <div className="lg:col-span-1">
              <p className="font-body text-text-medium text-sm leading-relaxed mb-8">
                Ik bied drie soorten trajecten aan waarmee we samen jouw gezondheidsdoelen gaan
                proberen te bereiken. Bij alle trajecten sta ik 24/7 voor je klaar om je te
                helpen bij al jouw vragen. Want net als ik weet ik dat je de hele dag met
                voeding bezig bent en juist die kleine keuzes kunnen het verschil maken.
              </p>
              <Link href="/trajecten" className="btn-terracotta">
                Ontdek alle trajecten
              </Link>
            </div>

            {/* Right: 3 cards with illustration */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {trajecten.map((t) => (
                <div key={t.slug} className="flex flex-col">
                  {/* Illustration placeholder */}
                  <div className="h-52 rounded-xl mb-5 bg-[#f5edda] flex items-center justify-center">
                    {/* Replace with: <Image src={`/images/${t.slug}.jpg`} alt={t.title} fill className="object-cover rounded-xl" /> */}
                    <span className="text-4xl opacity-40">🥑</span>
                  </div>
                  <h3 className="font-heading text-2xl text-blue-accent font-semibold mb-3">
                    {t.title}
                  </h3>
                  <p className="font-body text-text-medium text-sm leading-relaxed flex-grow mb-4">
                    {t.description}
                  </p>
                  <Link href="/trajecten" className="font-body text-blue-accent text-sm hover:underline underline underline-offset-4">
                    Meer weten
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wat jij gaat leren ── */}
      <section className="bg-beige-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-blue-accent font-semibold text-center mb-14">
            Wat jij gaat leren:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {leerpunten.map((punt) => (
              <div key={punt.title} className="text-center">
                <div className="mb-4">{punt.icon}</div>
                <h3 className="font-heading text-xl text-blue-accent font-semibold mb-3">
                  {punt.title}
                </h3>
                <p className="font-body text-text-medium text-sm leading-relaxed">
                  {punt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ervaringen ── */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[80px] sm:text-[100px] lg:text-[120px] leading-none text-blue-accent font-bold mb-12">
            Ervaringen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ervaringen.map((e, i) => (
              <div
                key={i}
                className="bg-white/40 rounded-2xl p-8 border border-beige-dark flex flex-col"
              >
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
