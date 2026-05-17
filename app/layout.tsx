import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://annafoods.nl'),
  title: {
    template: '%s | Anna Foods',
    default: 'Anna Foods – Orthomoleculair Diëtist',
  },
  description:
    'Persoonlijk voedingsadvies door een orthomoleculair diëtist. Jouw herstel begint hier, met voeding die bij jou past.',
  keywords: [
    'orthomoleculair diëtist',
    'voedingsadvies',
    'holistische benadering',
    'voeding en gezondheid',
    'darmklachten',
    'hormoonbalans',
    'plantaardig dieet',
  ],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://annafoods.nl',
    siteName: 'Anna Foods',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-body bg-beige text-text-dark antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
