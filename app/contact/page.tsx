import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { client } from '@/lib/sanity'
import { contactPaginaQuery } from '@/lib/queries'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op voor een gratis kennismakingsgesprek of stel je vraag. Ik reageer binnen 24 uur.',
}

export default async function ContactPage() {
  const cms = await client.fetch(contactPaginaQuery).catch(() => null)
  return (
    <>
      {/* ── Page header ── */}
      <section className="bg-beige pt-16 pb-8 lg:pt-24 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-center">Neem contact op</p>
          <h1 className="font-heading text-[70px] sm:text-[100px] lg:text-[130px] leading-none text-brown-gold font-bold text-center">
            Contact
          </h1>
          <p className="font-body text-text-medium max-w-xl mx-auto text-center mt-6">
            {cms?.subtitel ?? 'Heb je vragen of wil je direct een consult boeken? Ik hoor graag van je!'}
          </p>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-4">
                  {cms?.linkseTitel ?? 'Laten we kennismaken'}
                </h2>
                <p className="font-body text-text-medium text-sm leading-relaxed">
                  {cms?.linkseTekst ?? 'Stuur me een berichtje via het formulier, bel me of mail me direct. Ik reageer binnen 24 uur.'}
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${(cms?.telefoon ?? '+31618382828').replace(/\s/g,'')}`}
                  className="flex items-center gap-3 font-body text-text-medium hover:text-blue-accent transition-colors"
                >
                  <span className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center shrink-0 text-lg">
                    📞
                  </span>
                  {cms?.telefoon ?? '+31 6 18 38 28 28'}
                </a>
                <a
                  href={`mailto:${cms?.email ?? 'info@annafoods.nl'}`}
                  className="flex items-center gap-3 font-body text-text-medium hover:text-blue-accent transition-colors"
                >
                  <span className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center shrink-0 text-lg">
                    ✉️
                  </span>
                  info@annafoods.nl
                </a>
                <div className="flex items-start gap-3 font-body text-text-medium">
                  <span className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center shrink-0 text-lg">
                    📍
                  </span>
                  <span>
                    {cms?.locatie ?? 'Amsterdam / online'}
                    <br />
                    <span className="text-xs opacity-70">{cms?.locatieSub ?? 'Consulten ook online mogelijk'}</span>
                  </span>
                </div>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-widest text-brown-light mb-3">
                  Volg mij
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center text-text-dark hover:text-blue-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-beige-dark rounded-full flex items-center justify-center text-text-dark hover:text-blue-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form (client component) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
