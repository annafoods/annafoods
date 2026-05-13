import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* ── Klaar om te beginnen — beige-deeper zodat het uitspringt ── */}
      <div className="bg-beige-deeper py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-5xl sm:text-6xl text-brown-gold font-semibold mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="font-body text-text-medium mb-8">
            Plan een gratis kennismakingsgesprek van 15 minuten en ontdek welk traject bij jou
            past. Geen verplichtingen.
          </p>
          <Link href="/contact" className="btn-terracotta text-base px-10 py-4">
            Plan een gratis kennismaking
          </Link>
          <div className="mt-6 pt-6 border-t border-beige-dark/40 max-w-md mx-auto">
            <p className="font-body text-text-medium text-sm leading-relaxed mb-3">
              Wil je eerst zelf beginnen? Download gratis het mini plan — do's en don'ts voor
              een gezonde leefstijl — en ga zelf aan de slag.
            </p>
            <a
              href="/downloads/mini-plan.pdf"
              className="font-body text-sm text-terracotta hover:text-terracotta-dark font-medium underline underline-offset-4 transition-colors"
            >
              Download gratis het mini plan →
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer — zelfde kleur als header ── */}
      <footer className="bg-beige border-t border-beige-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <Link href="/" className="font-heading text-xl text-brown-gold block leading-tight">
              Anna Foods
            </Link>
            <p className="font-body text-[10px] text-text-medium/60 mt-0.5 tracking-wide">
              Voedingswetenschapper&nbsp;·&nbsp;Diëtist &amp; orthomoleculair therapeut&nbsp;·&nbsp;Insider
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

          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-medium hover:text-blue-accent transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-medium hover:text-blue-accent transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <span className="text-text-medium/50 text-xs">© {new Date().getFullYear()} Anna Foods</span>
          </div>
        </div>
      </footer>
    </>
  )
}
