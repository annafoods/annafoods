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

const ontdekt = [
  'Welke voeding past bij jouw leefstijl',
  'Wat zijn de eerste stappen die je nu kunt toepassen om meer in balans te komen',
  'Hoe is alles in jouw lichaam met elkaar verbonden',
  'De oplossing die kan helpen om minder klachten te ervaren',
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
      {/* ── Hero ── */}
      <section className="bg-beige pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[72px] sm:text-[96px] lg:text-[120px] leading-none text-terracotta font-bold mb-8">
            Voor wie
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Links: klachten + ontdekt */}
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-blue-accent font-semibold mb-6">
                Ervaar je een van deze lichamelijke klachten?
              </h2>
              <ul className="space-y-3 mb-6">
                {klachten.map((k) => (
                  <li key={k} className="flex items-start gap-3 font-body text-text-medium">
                    <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                    {k}
                  </li>
                ))}
              </ul>
              <p className="font-body text-text-medium leading-relaxed mb-8">
                Dan ben je bij mij aan het juiste adres. Samen kijken we wat jouw lichaam
                nodig heeft om weer in balans te komen.
              </p>
              <div className="bg-beige-dark rounded-2xl p-6 mb-8">
                <h3 className="font-heading text-2xl text-blue-accent font-semibold mb-4">
                  Je ontdekt…
                </h3>
                <ul className="space-y-2">
                  {ontdekt.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm leading-relaxed">
                      <span className="text-terracotta mt-1 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn-terracotta inline-block">
                Plan een gratis kennismaking
              </Link>
            </div>

            {/* Rechts: foto */}
            <div className="relative h-[500px] sm:h-[620px] rounded-2xl overflow-hidden">
              <Image
                src="/images/voor-wie.jpg"
                alt="Annick Rozendaal in de natuur"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mijn aanpak ── */}
      <section className="bg-beige-dark py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-6">
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
        </div>
      </section>

      {/* ── Mijn missie + Resultaat ── */}
      <section className="bg-beige py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-6">
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
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-6">
                Resultaat
              </h2>
              <ul className="space-y-3">
                {resultaten.map((r) => (
                  <li key={r} className="flex items-start gap-3 font-body text-text-medium">
                    <span className="text-terracotta mt-1 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download mini plan ── */}
      <section className="bg-beige-deeper py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-4">
            Benieuwd naar meer?
          </h2>
          <p className="font-body text-text-medium mb-8">
            Download nu gratis een mini plan waarin ik je kort uitleg wat de do's en don'ts zijn
            voor een gezonde leefstijl.
          </p>
          <a
            href="/downloads/mini-plan.pdf"
            className="btn-terracotta"
          >
            Download gratis mini plan
          </a>
        </div>
      </section>
    </>
  )
}
