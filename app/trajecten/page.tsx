import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trajecten',
  description:
    'Ontdek mijn drie trajecten: het Starttraject, Versterktraject en Transformatietraject. Samen werken we aan jouw gezondheid en welzijn.',
}

const trajecten = [
  {
    id: 'starttraject',
    title: 'Starttraject',
    tagline: 'Eén consult, helder plan',
    price: '€ [X],-',
    duration: 'Eenmalig',
    color: 'blue-accent',
    includes: [
      'Uitgebreid intakegesprek (60-90 min)',
      'Persoonlijk voedingsadvies op maat',
      'Concreet stappenplan voor de eerste weken',
      'Receptensuggesties passend bij jouw klachten',
      'Opvolg-mail met samenvatting en tips',
    ],
    description:
      'Perfect voor wie snel inzicht wil in de nodige veranderingen voor een gezonder voedingspatroon. In één uitgebreid consult kijken we samen naar jouw huidige voedingspatroon, jouw klachten en leefstijl. Je gaat naar huis met een helder plan.',
    ideal: 'Je wil snel weten waar je staat en wat je kunt veranderen, zonder een lang traject.',
  },
  {
    id: 'versterktraject',
    title: 'Versterktraject',
    tagline: 'Diepgaande begeleiding',
    price: '€ [X],-',
    duration: '3 maanden',
    color: 'terracotta',
    featured: true,
    includes: [
      'Alles uit het Starttraject',
      'Vier vervolgconsulten (45 min)',
      'Persoonlijk weekmenu op aanvraag',
      'Suppletieadvies op maat',
      'Whatsapp support (24/7 bereikbaar)',
      'Tussentijdse aanpassingen van het plan',
    ],
    description:
      'Dit traject biedt diepgaande begeleiding om je voeding te optimaliseren en je gezondheid te versterken met concrete resultaten. We werken drie maanden intensief samen aan jouw gezondheid.',
    ideal:
      'Je hebt specifieke klachten die je wil aanpakken en wil gedurende een langere periode begeleid worden.',
  },
  {
    id: 'transformatietraject',
    title: 'Transformatietraject',
    tagline: 'Complete transformatie',
    price: '€ [X],-',
    duration: '6 maanden',
    color: 'blue-accent',
    includes: [
      'Alles uit het Versterktraject',
      'Acht vervolgconsulten (45 min)',
      'Bloedwaarden-analyse (indien gewenst)',
      'Gepersonaliseerd maandmenu',
      'Kook-videosessie op aanvraag',
      'Onbeperkte WhatsApp support',
      'Eindrapportage met resultaten',
    ],
    description:
      'Het meest uitgebreide traject voor wie zijn gezondheid naar een hoger niveau wil tillen en langdurige resultaten wil bereiken. Zes maanden intensieve begeleiding voor een echte transformatie.',
    ideal:
      'Je wil structureel en langdurig aan je gezondheid werken en écht de basis leggen voor een nieuw, gezond leven.',
  },
]

export default function TrajectenPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-beige pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-center">Mijn aanbod</p>
          <h1 className="font-heading text-[80px] sm:text-[110px] lg:text-[140px] leading-none text-terracotta font-bold text-center">
            Trajecten
          </h1>
          <p className="font-body text-text-medium max-w-2xl mx-auto text-center mt-6">
            Ik bied drie soorten trajecten aan waarmee we samen jouw gezondheidsdoelen gaan
            proberen te bereiken. Bij alle trajecten sta ik 24/7 voor je klaar om je te helpen
            bij al jouw vragen.
          </p>
        </div>
      </section>

      {/* ── Trajectory cards ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {trajecten.map((t, i) => (
            <div
              key={t.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div
                className={`relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                {/* <Image src={`/images/traject-${t.id}.jpg`} alt={t.title} fill className="object-cover" /> */}
                <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                  <p className="text-text-medium text-sm text-center px-6 font-body">
                    📸 {t.title} afbeelding
                  </p>
                </div>
                {t.featured && (
                  <div className="absolute top-4 right-4 bg-terracotta text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    Meest gekozen
                  </div>
                )}
              </div>

              {/* Text side */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="font-body text-xs uppercase tracking-widest text-brown-light mb-2 block">
                  {t.duration}
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-2">
                  {t.title}
                </h2>
                <p className="font-heading text-xl text-brown-gold italic mb-4">{t.tagline}</p>
                <p className="font-body text-text-medium leading-relaxed mb-6">
                  {t.description}
                </p>

                <div className="bg-beige-dark rounded-xl p-6 mb-6">
                  <p className="font-body text-sm font-semibold text-text-dark mb-3">
                    Dit traject omvat:
                  </p>
                  <ul className="space-y-2">
                    {t.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-body text-text-medium text-sm"
                      >
                        <span className="text-terracotta mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-body text-xs text-text-medium italic mb-4">
                  <strong>Ideaal voor:</strong> {t.ideal}
                </p>

                <div className="flex items-center gap-6">
                  <span className="font-heading text-3xl text-brown-gold font-semibold">
                    {t.price}
                  </span>
                  <Link href="/contact" className="btn-terracotta">
                    Direct inschrijven
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="bg-beige-dark py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl text-blue-accent font-semibold text-center mb-10">
            Veelgestelde vragen
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Wordt het traject vergoed door mijn zorgverzekeraar?',
                a: 'In sommige gevallen vergoeden zorgverzekeraars een deel van de kosten. Neem contact op om de mogelijkheden voor jouw situatie te bespreken.',
              },
              {
                q: 'Kan ik ook online een consult volgen?',
                a: 'Ja, alle consulten kunnen online via video plaatsvinden. Dit werkt net zo goed als een fysiek gesprek.',
              },
              {
                q: 'Wat als een traject niet bij mij past?',
                a: 'We beginnen altijd met een gratis kennismakingsgesprek. Zo kun je inschatten of mijn aanpak bij jou past, zonder verplichtingen.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-beige rounded-xl p-6">
                <h3 className="font-body font-semibold text-text-dark mb-2">{item.q}</h3>
                <p className="font-body text-text-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-beige-deeper py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-4">
            Nog twijfels?
          </h2>
          <p className="font-body text-text-medium mb-8">
            Plan een gratis kennismakingsgesprek van 15 minuten. Geen verplichtingen, wel
            antwoorden.
          </p>
          <Link href="/contact" className="btn-terracotta">
            Gratis kennismaking plannen
          </Link>
        </div>
      </section>
    </>
  )
}
