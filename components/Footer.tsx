import Link from 'next/link'

const credentials = [
  {
    icon: '🎓',
    title: 'Voedingswetenschapper',
    sub: 'MSc Human Nutrition · University of Glasgow',
  },
  {
    icon: '🥗',
    title: 'Diëtist & orthomoleculair therapeut',
    sub: 'Persoonlijk advies op maat, wetenschappelijk én holistisch',
  },
  {
    icon: '🏭',
    title: 'Food Product Developer',
    sub: 'Werkte bij Danone & Abbot Kinneys · Weet wat er écht in producten zit',
  },
]

export default function Footer() {
  return (
    <footer className="bg-beige-deeper">
      {/* ── Credentials strip ── */}
      <div className="border-t border-beige-dark bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-body font-semibold text-text-dark text-sm">{c.title}</p>
                  <p className="font-body text-text-medium text-xs leading-relaxed mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Booking CTA ── */}
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="font-heading text-5xl sm:text-6xl text-brown-gold font-semibold mb-4">
          Klaar om te beginnen?
        </h2>
        <p className="font-body text-text-medium mb-8">
          Plan een gratis kennismakingsgesprek van 15 minuten en ontdek welk traject bij jou past. Geen verplichtingen.
        </p>
        <Link href="/contact" className="btn-terracotta text-base px-10 py-4">
          Plan een gratis kennismaking
        </Link>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-beige-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <Link href="/" className="font-heading text-lg text-brown-gold block">
              Anna Foods
            </Link>
            <p className="font-body text-xs text-text-medium/60 mt-0.5">
              Wetenschapper · Diëtist · Insider
            </p>
          </div>

          <div className="flex items-center gap-6 font-body text-sm text-text-medium">
            <a href="tel:+31618382828" className="hover:text-blue-accent transition-colors">
              +31 6 18 38 28 28
            </a>
            <a href="mailto:annick@annasfoodlab.com" className="hover:text-blue-accent transition-colors">
              annick@annasfoodlab.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-medium hover:text-blue-accent transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-medium hover:text-blue-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <span className="text-xs text-text-medium/60">© {new Date().getFullYear()} Anna Foods</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
