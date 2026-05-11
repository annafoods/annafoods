import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inspiratie',
  description:
    'Recepten, tips en artikelen over voeding en gezondheid. Ontdek hoe kleine aanpassingen in je eetpatroon een groot verschil kunnen maken.',
}

const categories = ['Alle', 'Recepten', 'Tips', 'Artikelen', 'Supplementen']

const artikelen = [
  {
    slug: 'ochtendroutine-energie',
    category: 'Tips',
    title: 'Zo start je je dag met meer energie',
    excerpt:
      'Een goede ochtendroutine legt de basis voor een productieve dag. Ontdek welke voedingskeuzes je energie door het dak laten gaan.',
    readTime: '4 min',
    date: 'Mei 2025',
  },
  {
    slug: 'darmgezondheid-verbeteren',
    category: 'Artikelen',
    title: 'Darmgezondheid verbeteren: waar begin je?',
    excerpt:
      'De darm wordt niet voor niets ons tweede brein genoemd. Hier vind je concrete stappen om je darmflora te herstellen.',
    readTime: '6 min',
    date: 'April 2025',
  },
  {
    slug: 'anti-inflammatoire-kom',
    category: 'Recepten',
    title: 'Anti-inflammatoire ontbijtkom',
    excerpt:
      'Een krachtige start van de dag met entstekingsremmende ingrediënten. Klaar in 10 minuten en heerlijk van smaak.',
    readTime: '3 min',
    date: 'April 2025',
  },
  {
    slug: 'supplementen-beginnen',
    category: 'Supplementen',
    title: 'Wanneer heeft suppletie zin?',
    excerpt:
      'Niet iedereen heeft supplementen nodig, maar voor sommigen kunnen ze het verschil maken. Ik leg uit wanneer en welke.',
    readTime: '5 min',
    date: 'Maart 2025',
  },
  {
    slug: 'hormoonbalans-voeding',
    category: 'Artikelen',
    title: 'Voeding en hormoonbalans: wat is het verband?',
    excerpt:
      'Hormonen sturen bijna alles in je lichaam aan. Ontdek hoe voeding je hormoonbalans ondersteunt of verstoort.',
    readTime: '7 min',
    date: 'Maart 2025',
  },
  {
    slug: 'snelle-maaltijd-bowls',
    category: 'Recepten',
    title: '3 voedzame maaltijdbowls voor door de week',
    excerpt:
      'Druk maar toch gezond eten? Met deze drie bowls heb je binnen 20 minuten een vullende, uitgebalanceerde maaltijd op tafel.',
    readTime: '4 min',
    date: 'Februari 2025',
  },
]

const categoryColors: Record<string, string> = {
  Recepten: 'bg-green-100 text-green-800',
  Tips: 'bg-blue-100 text-blue-800',
  Artikelen: 'bg-purple-100 text-purple-800',
  Supplementen: 'bg-orange-100 text-orange-800',
}

export default function InspiratiePage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-beige pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-center">Blog & recepten</p>
          <h1 className="font-heading text-[80px] sm:text-[110px] lg:text-[140px] leading-none text-blue-accent font-bold text-center">
            Inspiratie
          </h1>
          <p className="font-body text-text-medium max-w-xl mx-auto text-center mt-6">
            Praktische tips, heerlijke recepten en onderbouwde artikelen over voeding en
            gezondheid. Voor iedereen die stap voor stap gezonder wil leven.
          </p>
        </div>
      </section>

      {/* ── Category filter (static, no JS needed) ── */}
      <section className="bg-beige py-8 sticky top-16 z-40 border-b border-beige-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`font-body text-sm px-4 py-1.5 rounded-full border cursor-pointer transition-colors ${
                  cat === 'Alle'
                    ? 'bg-terracotta text-white border-terracotta'
                    : 'border-beige-dark text-text-medium hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured article ── */}
      <section className="bg-beige py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/inspiratie-featured.jpg" alt="Uitgelicht artikel" fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">
                  📸 Uitgelichte afbeelding
                </p>
              </div>
            </div>
            <div>
              <span className="font-body text-xs bg-terracotta text-white px-3 py-1 rounded-full mb-4 inline-block">
                Uitgelicht
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mt-3 mb-4 leading-tight">
                {artikelen[0].title}
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-6">
                {artikelen[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-body text-xs text-text-medium">{artikelen[0].date}</span>
                <span className="font-body text-xs text-text-medium">{artikelen[0].readTime} leestijd</span>
              </div>
              <Link
                href={`/inspiratie/${artikelen[0].slug}`}
                className="btn-terracotta mt-6 inline-block"
              >
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article grid ── */}
      <section className="bg-beige py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artikelen.slice(1).map((artikel) => (
              <article
                key={artikel.slug}
                className="group bg-white/40 rounded-2xl overflow-hidden border border-beige-dark hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-beige-dark flex items-center justify-center">
                  {/* <Image src={`/images/${artikel.slug}.jpg`} alt={artikel.title} width={400} height={200} className="w-full h-full object-cover" /> */}
                  <p className="text-text-medium text-xs text-center px-4 font-body">
                    📸 {artikel.title}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-body text-xs px-2 py-0.5 rounded-full ${
                        categoryColors[artikel.category] || 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {artikel.category}
                    </span>
                    <span className="font-body text-xs text-text-medium">{artikel.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-blue-accent font-semibold mb-2 group-hover:text-blue-light transition-colors leading-snug">
                    {artikel.title}
                  </h3>
                  <p className="font-body text-text-medium text-sm leading-relaxed mb-4">
                    {artikel.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-text-medium">{artikel.date}</span>
                    <Link
                      href={`/inspiratie/${artikel.slug}`}
                      className="font-body text-sm text-blue-accent hover:underline"
                    >
                      Lees meer →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-beige-deeper py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-4">
            Blijf op de hoogte
          </h2>
          <p className="font-body text-text-medium mb-8">
            Ontvang maandelijks mijn nieuwste recepten en tips rechtstreeks in je inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="jouw@emailadres.nl"
              className="flex-1 px-4 py-3 rounded-full border border-beige-dark bg-beige font-body text-sm focus:outline-none focus:border-terracotta"
              required
            />
            <button type="submit" className="btn-terracotta whitespace-nowrap">
              Aanmelden
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
