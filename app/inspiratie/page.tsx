import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inspiratie',
  description:
    'Recepten, tips en artikelen over voeding en gezondheid. Ontdek hoe kleine aanpassingen in je eetpatroon een groot verschil kunnen maken.',
}

const artikelen = [
  {
    slug: 'ochtendroutine-energie',
    category: 'Tips',
    title: 'Zo start je je dag met meer energie',
    excerpt:
      'Een goede ochtendroutine legt de basis voor een productieve dag. Ontdek welke voedingskeuzes je energie door het dak laten gaan.',
    readTime: '4 min',
    date: 'Mei 2025',
    featured: true,
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
      'Een krachtige start van de dag met ontstekingsremmende ingrediënten. Klaar in 10 minuten en heerlijk van smaak.',
    readTime: '3 min',
    date: 'April 2025',
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
]

const categoryColors: Record<string, string> = {
  Recepten: 'bg-green-100 text-green-800',
  Tips: 'bg-blue-100 text-blue-800',
  Artikelen: 'bg-purple-100 text-purple-800',
}

export default function InspiratiePage() {
  const featured = artikelen[0]
  const rest = artikelen.slice(1)

  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-beige pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-[80px] sm:text-[110px] lg:text-[140px] leading-none text-blue-accent font-bold">
            Inspiratie
          </h1>
          <p className="font-body text-text-medium max-w-xl mt-4">
            Praktische tips, heerlijke recepten en onderbouwde artikelen over voeding en gezondheid.
          </p>
        </div>
      </section>

      {/* ── Uitgelicht ── */}
      <section className="bg-beige py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden bg-beige-dark flex items-center justify-center">
              <p className="text-text-medium text-sm font-body">📸 {featured.title}</p>
            </div>
            <div>
              <span className="font-body text-xs bg-terracotta text-white px-3 py-1 rounded-full mb-4 inline-block">
                Uitgelicht
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mt-3 mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="font-body text-text-medium leading-relaxed mb-4">{featured.excerpt}</p>
              <p className="font-body text-xs text-text-medium mb-5">{featured.date} · {featured.readTime} leestijd</p>
              <Link href={`/inspiratie/${featured.slug}`} className="btn-terracotta">
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Artikel grid ── */}
      <section className="bg-beige py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {rest.map((artikel) => (
              <article key={artikel.slug} className="group bg-white/40 rounded-2xl overflow-hidden border border-beige-dark hover:shadow-md transition-shadow">
                <div className="h-44 bg-beige-dark flex items-center justify-center">
                  <p className="text-text-medium text-xs font-body px-4 text-center">📸 {artikel.title}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-body text-xs px-2 py-0.5 rounded-full ${categoryColors[artikel.category] ?? 'bg-gray-100 text-gray-700'}`}>
                      {artikel.category}
                    </span>
                    <span className="font-body text-xs text-text-medium">{artikel.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-blue-accent font-semibold mb-2 leading-snug">
                    {artikel.title}
                  </h3>
                  <p className="font-body text-text-medium text-sm leading-relaxed mb-4">{artikel.excerpt}</p>
                  <Link href={`/inspiratie/${artikel.slug}`} className="font-body text-sm text-blue-accent hover:underline">
                    Lees meer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
