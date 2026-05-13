import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Voor wie',
  description:
    'Herken jij jezelf in klachten als prikkelbare darm, hormonale disbalans of overgewicht? Ontdek hoe orthomoleculaire voeding jou kan helpen.',
}

const klachten = [
  'Prikkelbare darm syndroom',
  'Opgeblazen buik',
  'Hormonale disbalans (acne, moodswings)',
  'Overgewicht',
  'Niet lekker in je vel doordat je niet meer weet wat gezond is',
]

const resultaten = [
  'Meer energie gedurende de dag',
  'Minder opgeblazen buik',
  'Niet meer futloos voelen',
  'Je voelt je steeds meer in balans',
  'Je weet hoe je gezonde voedingskeuzes kunt maken',
  'Minder overweldigend door alle voedingskeuzes',
]

export default function VoorWiePage() {
  return (
    <>
      {/* ── Hero: klachten + resultaat ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[72px] sm:text-[96px] lg:text-[120px] leading-none text-terracotta font-bold mb-10">
            Voor wie
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Klachten */}
            <div>
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-6">
                Herken jij dit?
              </h2>
              <ul className="space-y-3 mb-8">
                {klachten.map((k) => (
                  <li key={k} className="flex items-start gap-3 font-body text-text-medium text-base leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
              <p className="font-body text-text-medium leading-relaxed mb-8">
                Dan ben je bij mij aan het juiste adres. Samen kijken we wat jouw lichaam
                nodig heeft om weer in balans te komen.
              </p>
              <Link href="/contact" className="btn-terracotta">
                Plan een gratis kennismaking
              </Link>
            </div>

            {/* Resultaat */}
            <div>
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-6">
                Wat levert het op?
              </h2>
              <ul className="space-y-3">
                {resultaten.map((r) => (
                  <li key={r} className="flex items-start gap-3 font-body text-text-medium text-base leading-relaxed">
                    <span className="text-terracotta mt-1 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mijn aanpak + missie + foto ── */}
      <section className="bg-beige-dark py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">

            {/* Foto — smaller, 2/5 breedte */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden h-full">
                <Image
                  src="/images/P3030225.jpeg"
                  alt="Annick Rozendaal"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Aanpak + missie + belofte — 3/5 breedte, gelijkmatig verdeeld */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-8">
              <div>
                <h2 className="font-heading text-4xl text-brown-gold font-semibold mb-3">
                  Mijn aanpak
                </h2>
                <p className="font-body text-text-medium leading-relaxed">
                  Als orthomoleculair diëtist staat voor mij kwaliteit voorop. Ik kijk graag naar het
                  grotere plaatje. Voeding is een belangrijke pijler, maar ook mondgezondheid, stress,
                  slaap, ontspanning en beweging neem ik hierin mee. Ik vertaal mijn wetenschappelijke
                  kennis naar praktische inzichten met een holistische visie. Betrouwbaarheid van
                  informatie vind ik heel belangrijk. Tijdens mijn consulten hecht ik waarde aan
                  verbinding en luister ik graag naar wat jij nodig hebt. Ik stel een plan op dat bij
                  jou past, rekening houdend met jouw waarden en leefstijl.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-4xl text-brown-gold font-semibold mb-3">
                  Mijn missie
                </h2>
                <p className="font-body text-text-medium leading-relaxed">
                  Mijn missie is om jou op weg te helpen naar een gezondere leefstijl waar je
                  fysiek en mentaal verschil merkt. Dit doen we samen, stap voor stap. Een aanpak
                  die past bij jouw leefstijl en bij wie jij bent. Ik weet dat eerste stapjes al
                  kunnen helpen om jou het verschil te laten voelen.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-4xl text-brown-gold font-semibold mb-3">
                  Mijn belofte
                </h2>
                <ul className="space-y-3">
                  {[
                    'Ik ben eerlijk met je — ook als dat soms moeilijk te horen is',
                    'Ik ben 24/7 bereikbaar via WhatsApp voor al jouw vragen',
                    'Ik luister écht naar jou en jouw situatie',
                    'Ik geef je een plan dat past bij wie jij bent, niet een standaard schema',
                    'Ik sta voor jou klaar gedurende het hele traject',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm leading-relaxed">
                      <span className="text-terracotta mt-0.5 shrink-0 text-base">↗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
