import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from './FAQ'

export const metadata: Metadata = {
  title: 'Trajecten',
  description:
    'Kies jouw traject: het Starttraject (€150) of Versterktraject (€300). Persoonlijke begeleiding van een orthomoleculair diëtist.',
}

const trajecten = [
  {
    id: 'starttraject',
    title: 'Starttraject',
    price: '€ 150,- (excl. BTW)',
    consults: '1 consult',
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
    price: '€ 300,- (excl. BTW)',
    consults: '3 consults',
    featured: true,
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
]

export default function TrajectenPage() {
  return (
    <>
      {/* ── Trajecten ── */}
      <section className="bg-beige pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[80px] sm:text-[110px] lg:text-[140px] leading-none text-terracotta font-bold mb-6">
            Trajecten
          </h1>
          <p className="font-body text-text-medium max-w-2xl mb-12">
            Ik bied twee trajecten aan waarmee we samen jouw gezondheidsdoelen gaan proberen
            te bereiken. Bij beide trajecten sta ik 24/7 voor je klaar om je te helpen bij
            al jouw vragen.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trajecten.map((t) => (
              <div
                key={t.id}
                className="bg-beige-dark rounded-2xl overflow-hidden flex flex-col"
              >
                {/* Illustratie */}
                <div className="min-h-[220px] bg-[#f5edda] flex items-center justify-center">
                  <p className="text-text-medium/40 font-body text-sm text-center px-8">
                    📸 Illustratie — {t.title}
                  </p>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="font-heading text-4xl text-terracotta font-semibold">
                      {t.title}
                    </h2>
                    {t.featured && (
                      <span className="bg-terracotta/10 text-terracotta text-xs font-body font-semibold px-3 py-1 rounded-full shrink-0 ml-4">
                        Meest gekozen
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5 mt-3">
                    <span className="font-body text-xs text-text-medium">🕐 {t.consults}</span>
                    <span className="font-body text-xs text-text-medium">👤 1-op-1 begeleiding</span>
                    <span className="font-body text-xs text-text-medium">💶 {t.price}</span>
                  </div>

                  <div className="space-y-1 mb-5">
                    {t.specs.map((s) => (
                      <p key={s.label} className="font-body text-sm text-text-dark">
                        <strong>{s.label}:</strong> {s.value}
                      </p>
                    ))}
                  </div>

                  <p className="font-body font-semibold text-sm text-text-dark mb-2">Inclusief:</p>
                  <ul className="space-y-1 mb-6">
                    {t.inclusief.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-text-medium text-sm">
                        <span className="text-terracotta shrink-0 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="inline-block bg-blue-accent text-white px-8 py-3 rounded-full font-body font-medium text-sm hover:bg-blue-light transition-colors">
                    Plan nu je eerste consult
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Losse consulten ── */}
      <section className="bg-beige py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-beige-dark rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl text-brown-gold font-semibold mb-2">
                Losse consulten
              </h2>
              <p className="font-body text-text-medium text-sm leading-relaxed max-w-xl">
                Mocht je daarna het gevoel hebben dat je ergens tegenaan blijft lopen, dan kunnen
                we altijd een los consult inplannen. De kosten hiervan zijn <strong>€ 60,- per uur</strong>.
              </p>
            </div>
            <Link href="/contact" className="btn-terracotta shrink-0">
              Plan een consult
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ in 2 kolommen ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <FAQ />
        </div>
      </section>
    </>
  )
}
