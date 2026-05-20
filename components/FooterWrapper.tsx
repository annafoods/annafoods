import Link from 'next/link'
import { client } from '@/lib/sanity'
import { siteInstellingenQuery } from '@/lib/queries'

export default async function FooterWrapper() {
  const s = await client.fetch(siteInstellingenQuery).catch(() => null)

  const telefoon = s?.telefoon ?? '+31 6 18 38 28 28'
  const email = s?.email ?? 'info@annafoods.nl'
  const instagram = s?.instagram ?? 'https://instagram.com'
  const linkedin = s?.linkedin ?? 'https://linkedin.com'
  const ctaTitel = s?.footerCtaTitel ?? 'Klaar om te beginnen?'
  const ctaTekst = s?.footerCtaTekst ?? 'Plan een gratis kennismakingsgesprek van 30 minuten en ontdek welk traject bij jou past. Geen verplichtingen.'
  const ctaDownload = s?.footerCtaTekstDownload ?? 'Wil je eerst zelf aan de slag? Download gratis het mini plan met de do\'s en don\'ts voor een gezonde leefstijl.'

  return (
    <>
      {/* ── Klaar om te beginnen ── */}
      <div className="bg-beige-deeper py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-5xl sm:text-6xl text-brown-gold font-semibold mb-12 text-center">
            {ctaTitel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-beige/50 rounded-2xl p-8 flex flex-col items-start">
              <p className="font-body text-text-medium leading-relaxed mb-6 flex-grow">
                {ctaTekst}
              </p>
              <Link href="/contact" className="btn-terracotta">
                Plan een gratis kennismaking
              </Link>
            </div>
            <div className="bg-beige/50 rounded-2xl p-8 flex flex-col items-start">
              <p className="font-body text-text-medium leading-relaxed mb-6 flex-grow">
                {ctaDownload}
              </p>
              <a
                href="/downloads/mini-plan.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-medium border-2 border-terracotta text-terracotta hover:bg-terracotta/10 transition-all duration-200"
              >
                <span>Download gratis mini plan</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-beige border-t border-beige-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
            <div>
              <Link href="/" className="font-heading text-xl text-brown-gold leading-tight">
                Anna Foods
              </Link>
              <p className="font-body text-[10px] text-text-medium/60 mt-0.5 tracking-wide leading-snug">
                Voedingswetenschapper · Diëtist &amp; orthomoleculair therapeut · Insider
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 font-body text-sm text-text-medium">
              <a href={`tel:${telefoon.replace(/\s/g, '')}`} className="hover:text-blue-accent transition-colors">{telefoon}</a>
              <a href={`mailto:${email}`} className="hover:text-blue-accent transition-colors">{email}</a>
            </div>
            <div className="flex items-center justify-center sm:justify-end gap-4">
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-text-medium hover:text-blue-accent transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-text-medium hover:text-blue-accent transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <span className="text-text-medium/50 text-xs">© {new Date().getFullYear()} Anna Foods</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
