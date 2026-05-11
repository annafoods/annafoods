import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Leer mij beter kennen. Als orthomoleculair diëtist combineert ik wetenschappelijke kennis met een holistische benadering voor jouw persoonlijk voedingsadvies.',
}

const credentials = [
  'Orthomoleculair diëtist (HBO)',
  'Gecertificeerd voedingscoach',
  '[Aanvullende certificering 1]',
  '[Aanvullende certificering 2]',
]

export default function OverMijPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative h-[420px] sm:h-[560px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/over-mij.jpg" alt="[Naam] portretfoto" fill className="object-cover object-top" /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">
                  📸 Jouw portretfoto hier
                </p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="section-label">Over mij</p>
              <h1 className="font-heading text-5xl sm:text-6xl text-brown-gold font-semibold leading-tight mb-6">
                [Jouw naam]
              </h1>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                [Eerste alinea over jezelf – wie ben je, waar kom je vandaan, wat drijft je?]
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-4">
                [Tweede alinea – jouw persoonlijk verhaal met voeding en gezondheid, hoe je zelf
                klachten hebt overwonnen en wat je daarin heeft gestimuleerd.]
              </p>
              <p className="font-body text-text-medium leading-relaxed mb-8">
                [Derde alinea – jouw visie op gezondheid en voeding, waarom je kiest voor een
                holistische benadering.]
              </p>
              <Link href="/contact" className="btn-terracotta">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Werkwijze ── */}
      <section className="bg-beige-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-4">
              Mijn werkwijze
            </h2>
            <p className="font-body text-text-medium">
              Ik geloof dat geen enkel lichaam hetzelfde is. Daarom begin ik altijd met goed
              luisteren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Kennismaking',
                description:
                  'We beginnen met een uitgebreid intakegesprek. Ik luister naar jouw klachten, leefstijl en wensen.',
              },
              {
                step: '02',
                title: 'Persoonlijk plan',
                description:
                  'Op basis van jouw intake stel ik een persoonlijk voedings- en leefstijlplan op dat echt bij jou past.',
              },
              {
                step: '03',
                title: 'Begeleiding',
                description:
                  'Tijdens het traject sta ik 24/7 voor je klaar met advies, aanpassingen en motivatie.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-beige rounded-2xl p-8">
                <span className="font-heading text-6xl text-beige-dark font-bold">{item.step}</span>
                <h3 className="font-heading text-2xl text-blue-accent font-semibold mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-text-medium text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opleiding & credentials ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-6">
                Opleiding &amp; kennis
              </h2>
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 font-body text-text-medium">
                    <span className="text-terracotta mt-1">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[320px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/over-mij-2.jpg" alt="In de praktijk" fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">
                  📸 Tweede foto – bijv. in de praktijk of keuken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beige-deeper py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-4">
            Laten we kennismaken
          </h2>
          <p className="font-body text-text-medium mb-8">
            Ben je benieuwd of ik jou kan helpen? Plan een gratis kennismakingsgesprek.
          </p>
          <Link href="/contact" className="btn-terracotta">
            Boek jouw consult!
          </Link>
        </div>
      </section>
    </>
  )
}
