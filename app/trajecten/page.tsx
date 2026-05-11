import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from './FAQ'

export const metadata: Metadata = {
  title: 'Trajecten',
  description:
    'Persoonlijke begeleiding op jouw pad naar gezondheid. Kies uit het Starttraject (€150), Versterktraject (€300) of Transformatietraject (€620).',
}

const trajecten = [
  {
    id: 'starttraject',
    title: 'Starttraject',
    price: '150 euro (excl. BTW)',
    consults: '1 consult',
    image: '/images/traject-start.jpg',
    specs: [
      { label: 'Intakegesprek', value: '60-90 minuten' },
      { label: 'Bespreken behandelplan', value: '30 minuten' },
    ],
    inclusief: [
      'Persoonlijk voedings- en leefstijladvies',
      'Suppletieadvies',
      'Analyse van je huidig eetpatroon',
      'Persoonlijk eetdagboek voor één dag',
      'Hormoon proof receptenboek voor ontbijt, tussendoortjes, lunch en avondeten',
      'Ondersteuning via WhatsApp',
    ],
  },
  {
    id: 'versterktraject',
    title: 'Versterktraject',
    price: '€300,- excl. BTW',
    consults: '3 consults',
    image: '/images/traject-versterk.jpg',
    specs: [
      { label: 'Intakegesprek', value: '60-90 minuten' },
      { label: 'Bespreken behandelplan', value: '30 minuten' },
      { label: 'Vervolgconsult', value: '30 minuten' },
      { label: 'Afsluitend consult', value: '30 minuten' },
    ],
    inclusief: [
      'Persoonlijk voedings- en leefstijlplan',
      'Analyse van je huidig eetpatroon',
      'Suppletieadvies',
      'Aanpassingen in het voedings- en leefstijlplan na evaluatie',
      'Persoonlijk eetdagboek voor drie dagen',
      'Hormoon proof receptenboek voor ontbijt, tussendoortjes, lunch en avondeten',
      'Ondersteuning via WhatsApp',
    ],
  },
  {
    id: 'transformatietraject',
    title: 'Transformatietraject',
    price: '620 euro (excl. BTW)',
    consults: '4 consults',
    image: '/images/traject-transformatie.jpg',
    specs: [
      { label: 'Intakegesprek', value: '60-90 minuten' },
      { label: 'Bespreken behandelplan', value: '30 minuten' },
      { label: 'Vervolgconsulten', value: '3×30 minuten (incl. aanpassingen van behandelplan)' },
      { label: 'Afsluitend consult', value: '30 minuten (incl. vervolgadvies)' },
    ],
    inclusief: [
      'Persoonlijk voedings- en leefstijlplan',
      'Suppletieadvies',
      'Analyse van je huidig eetpatroon',
      'Aanpassingen in het voedings- en leefstijlplan na evaluatie',
      'Persoonlijk eetdagboek voor één week',
      'Hormoon proof receptenboek voor ontbijt, tussendoortjes, lunch en avondeten',
      'Ondersteuning via WhatsApp',
    ],
    optioneel: ['Labonderzoek (vetzuur & omega-3 balans)'],
  },
]

const ontdekt = [
  'Welke voeding past bij jouw leefstijl',
  'Wat zijn de eerste stappen die je nu kunt toepassen om meer in balans te komen',
  'Hoe is alles in jouw lichaam met elkaar verbonden',
  'De oplossing die kan helpen om minder klachten te ervaren',
]

const ervaart = [
  'Een volwaardig eetpatroon passend bij jouw leefstijl',
  'Met kleine stapjes meer in balans voelen',
  'Meer energie gedurende dag',
  'Vermindering van je klachten',
  'Meer in balans',
]

export default function TrajectenPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-brown-gold leading-tight mb-8">
                Persoonlijke begeleiding op jouw pad naar gezondheid
              </h1>
              <div className="space-y-4 font-body text-text-medium leading-relaxed">
                <p>
                  Persoonlijke betrokkenheid is voor mij erg belangrijk. Daarom ben ik 24/7
                  (via WhatsApp) bereikbaar voor jouw vragen! Twijfel je tussen de verschillende
                  trajecten? Neem dan gerust contact op, en ik adviseer je graag.
                </p>
                <p>
                  Mocht je liever geen traject willen, kun je ook een los consult van 60 minuten
                  inplannen voor €80. We bespreken je huidige situatie, jouw voortgang, vragen
                  beantwoorden en nieuwe doelen afstemmen.
                </p>
                <p>
                  Daarnaast is het mogelijk om over te stappen naar een langer traject, zoals
                  een 3- of 6-maanden traject. Hierin werken we samen aan jouw doelen met een
                  gestructureerd plan en meerdere consultmomenten.
                </p>
              </div>
            </div>

            <div className="relative h-[480px] sm:h-[580px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/trajecten-hero.jpg" alt="Annick Rozendaal" fill className="object-cover object-top" priority /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">
                  📸 Foto Annick (witte pet)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mijn visie + Je ontdekt + Je ervaart ── */}
      <section className="bg-beige py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Mijn visie */}
            <div className="border-l-4 border-blue-accent pl-6">
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-5">
                Mijn visie
              </h2>
              <p className="font-body text-text-medium leading-relaxed text-sm">
                Ik kijk graag naar het grotere plaatje. Voeding is een belangrijke pijler, maar
                ook mondgezondheid, stress, slaap, ontspanning en beweging neem ik hierin mee.
                Ik combineer mijn wetenschappelijke kennis met een holistische visie. Tijdens mijn
                consulten hecht ik waarde aan verbinding en luister ik graag naar wat jij nodig
                hebt. Ik stel een plan op dat bij jou past, rekening houdend met jouw waarden en
                leefstijl.
              </p>
            </div>

            {/* Je ontdekt */}
            <div>
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-5">
                Je ontdekt…
              </h2>
              <ul className="space-y-3">
                {ontdekt.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Je ervaart */}
            <div>
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-5">
                Je ervaart…
              </h2>
              <ul className="space-y-3">
                {ervaart.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-brown-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trajecten display heading ── */}
      <section className="bg-beige pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[100px] sm:text-[140px] lg:text-[180px] leading-none text-brown-gold font-bold">
            Trajecten
          </h2>
        </div>
      </section>

      {/* ── De drie trajecten ── */}
      <section className="bg-beige-dark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          {trajecten.map((t, i) => (
            <div
              key={t.id}
              className="bg-beige rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Illustratie */}
              <div
                className={`relative min-h-[320px] lg:min-h-[420px] bg-[#f5edda] flex items-center justify-center ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                {/* <Image src={t.image} alt={t.title} fill className="object-contain p-8" /> */}
                <div className="text-center px-8">
                  <p className="text-text-medium/40 font-body text-sm">
                    📸 Illustratie — {t.title}
                    <br />
                    <span className="text-xs">(warme gele achtergrond, blauwe potlood-stijl)</span>
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className={`p-10 lg:p-14 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading text-4xl text-terracotta font-semibold mb-4">
                  {t.title}
                </h3>

                {/* Specs badges */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                  <span className="flex items-center gap-2 font-body text-sm text-text-medium">
                    <span className="w-6 h-6 rounded-full bg-brown-gold/20 flex items-center justify-center text-xs">🕐</span>
                    {t.consults}
                  </span>
                  <span className="flex items-center gap-2 font-body text-sm text-text-medium">
                    <span className="w-6 h-6 rounded-full bg-brown-gold/20 flex items-center justify-center text-xs">👤</span>
                    1-op-1 begeleiding
                  </span>
                  <span className="flex items-center gap-2 font-body text-sm text-text-medium">
                    <span className="w-6 h-6 rounded-full bg-brown-gold/20 flex items-center justify-center text-xs">📋</span>
                    Bespreking behandelplan
                  </span>
                  <span className="flex items-center gap-2 font-body text-sm text-text-medium">
                    <span className="w-6 h-6 rounded-full bg-brown-gold/20 flex items-center justify-center text-xs">€</span>
                    {t.price}
                  </span>
                </div>

                {/* Tijden */}
                <div className="space-y-1 mb-6">
                  {t.specs.map((s) => (
                    <p key={s.label} className="font-body text-sm text-text-dark">
                      <strong>{s.label}:</strong> {s.value}
                    </p>
                  ))}
                </div>

                {/* Inclusief */}
                <div className="mb-4">
                  <p className="font-body font-semibold text-sm text-text-dark mb-2">Inclusief:</p>
                  <ul className="space-y-1.5">
                    {t.inclusief.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-text-medium text-sm">
                        <span className="text-terracotta mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optioneel */}
                {'optioneel' in t && t.optioneel && (
                  <div className="mb-6">
                    <p className="font-body font-semibold text-sm text-text-dark mb-2">Optioneel:</p>
                    <ul className="space-y-1.5">
                      {t.optioneel.map((item) => (
                        <li key={item} className="flex items-start gap-2 font-body text-text-medium text-sm">
                          <span className="text-brown-gold mt-0.5 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  href="/contact"
                  className="inline-block bg-blue-accent text-white px-8 py-3.5 rounded-full font-body font-medium text-sm hover:bg-blue-light transition-colors mt-2"
                >
                  Plan nu je eerste consult
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-beige py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <FAQ />
        </div>
      </section>
    </>
  )
}
