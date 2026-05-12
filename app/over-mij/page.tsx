import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import VerhaalExpand from './VerhaalExpand'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Leer Annick kennen — orthomoleculair diëtist met een MSc Human Nutrition van de Universiteit van Glasgow en een passie voor de kracht van voeding.',
}

const opleidingen = [
  {
    jaar: '2012 – 2016',
    titel: 'BSc Voeding & Diëtetiek',
    sub: 'Hanze Hogeschool Groningen · Toegepaste psychologie',
  },
  {
    jaar: '2017 – 2018',
    titel: 'MSc Human Nutrition',
    sub: 'University of Glasgow · Cijfer 8 · Obesity & weight management',
  },
  {
    jaar: '2024',
    titel: 'Orthomoleculaire therapie Gevorderd',
    sub: 'Ortho Health Foundation',
  },
]

const ervaringen = [
  { jaar: '2016', titel: 'Stagiair Diëtist', sub: 'Diabetes Fonds' },
  { jaar: '2018', titel: 'Wetenschappelijk onderzoek', sub: 'Omega-3 & spierfunctie bij 65+ · Gepubliceerd, cijfer 8,5' },
  { jaar: '2018 – 2019', titel: 'Medical Specialist', sub: 'Danone' },
  { jaar: '2021 – 2024', titel: 'Food Product Developer', sub: 'Abbot Kinneys' },
  { jaar: '2024', titel: 'Vrijwilligerswerk voedingsprojecten', sub: 'Oeganda' },
  { jaar: '2025', titel: 'Food Product Developer', sub: 'Kara-Tunga' },
]

type TijdlijnItem = { jaar: string; titel: string; sub: string }

function HorizontaleTijdlijn({ items, kleur }: { items: TijdlijnItem[]; kleur: string }) {
  return (
    <>
      {/* Desktop: horizontaal */}
      <div className="hidden lg:block relative pt-4 pb-16">
        <div className="absolute top-[11px] left-0 right-0 h-px bg-beige-deeper" />
        <div className="flex justify-between relative">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ width: `${100 / items.length}%` }}
            >
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 z-10 ${kleur}`} />
              <div className={`px-1 text-center ${i % 2 === 0 ? 'mt-4' : 'order-first mb-4'}`}>
                <p className="font-body text-[10px] text-brown-light whitespace-nowrap">{item.jaar}</p>
                <p className="font-body text-xs font-semibold text-text-dark leading-tight mt-0.5">{item.titel}</p>
                <p className="font-body text-[10px] text-text-medium leading-snug mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobiel: verticaal */}
      <div className="lg:hidden space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 ${kleur}`} />
              <div className="w-px flex-1 bg-beige-deeper mt-1" />
            </div>
            <div className="pb-4">
              <p className="font-body text-[11px] text-brown-light uppercase tracking-widest">{item.jaar}</p>
              <p className="font-body text-sm font-semibold text-text-dark">{item.titel}</p>
              <p className="font-body text-xs text-text-medium">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default function OverMijPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative h-[500px] sm:h-[580px] rounded-2xl overflow-hidden">
              <Image
                src="/images/profielfoto.png"
                alt="Annick Rozendaal"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="border-l-2 border-blue-accent pl-8 pt-2">
              <h1 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold leading-tight mb-6">
                Mijn reis met voeding als kompas
              </h1>
              <div className="space-y-4 font-body text-text-medium leading-relaxed">
                <p>
                  Gezond eten kreeg ik van huis uit mee, en bewuste keuzes maken voelde altijd
                  goed. Toch had ik op jonge leeftijd regelmatig last van buikpijn. Al snel werd
                  mij verteld dat ik waarschijnlijk een prikkelbare darm syndroom (PDS) had,
                  maar dat voelde niet als een echte oplossing.
                </p>
                <p>
                  Tijdens mijn studententijd werden mijn klachten erger. Mijn buik was vaak
                  opgeblazen en daarnaast kreeg ik last van heftige acne. Ik probeerde van alles,
                  maar niets hielp echt. Pas toen ik overstapte op een plantaardig
                  voedingspatroon, met veel groenten, fruit, peulvruchten en noten, en minder
                  suiker en geraffineerde koolhydraten, begon ik me beter te voelen.
                </p>
                <p>
                  Ook bracht ik meer balans in mijn leven door yoga en ontspanning. Ik stopte
                  met de anticonceptiepil en het slikken van Roaccutane (acne remmer), en
                  langzaam maar zeker werd mijn huid rustiger en namen mijn buikklachten af.
                  Eindelijk kreeg ik mijn energie terug!
                </p>
              </div>
              <Link href="/contact" className="btn-terracotta mt-8 inline-block">
                Boek jouw consult
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mijn achtergrond + twee tijdlijnen ── */}
      <section className="bg-beige-dark py-14 lg:py-20 relative overflow-hidden">
        <p className="absolute bottom-0 left-0 font-heading font-bold text-[120px] sm:text-[180px] leading-none text-brown-gold/[0.06] whitespace-nowrap select-none pointer-events-none">
          food for thought
        </p>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Links: verhaal */}
            <div>
              <h2 className="font-heading text-2xl text-brown-gold font-semibold mb-6">
                Mijn achtergrond
              </h2>
              <VerhaalExpand />
            </div>

            {/* Rechts: twee tijdlijnen gestapeld */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-blue-accent mb-2">
                  Opleidingen
                </p>
                <HorizontaleTijdlijn items={opleidingen} kleur="bg-blue-accent" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-terracotta mb-2">
                  Ervaringen
                </p>
                <HorizontaleTijdlijn items={ervaringen} kleur="bg-terracotta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kwaliteit staat centraal ── */}
      <section className="bg-beige py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl text-blue-accent font-semibold mb-6">
                Kwaliteit staat centraal
              </h2>
              <div className="space-y-4 font-body text-text-medium leading-relaxed">
                <p>
                  [Jouw tekst hier — vertel wat kwaliteit voor jou betekent in de praktijk: hoe
                  je consulten aanpakt, hoe je kennis up-to-date houdt, en waarom een
                  wetenschappelijke onderbouwing voor jou essentieel is.]
                </p>
                <p>
                  Mijn aanpak is altijd evidence-based: ik combineer de nieuwste
                  wetenschappelijke inzichten met praktische toepasbaarheid in het dagelijks
                  leven. Want goede intenties zonder onderbouwing zijn niet genoeg.
                </p>
                <p>
                  [Aanvullende alinea over jouw werkwijze, hoe je omgaat met nieuwe
                  onderzoeken, of waarom jij gelooft in continue bijscholing.]
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl text-brown-gold font-semibold mb-4">
                  Registraties
                </h3>
                <ul className="space-y-2">
                  {['[Registratie 1 — bijv. BIG-register Diëtist]', '[Registratie 2]', '[Registratie 3]'].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm">
                      <span className="text-terracotta mt-1 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-brown-gold font-semibold mb-4">
                  Beroepsverenigingen
                </h3>
                <ul className="space-y-2">
                  {['[Vereniging 1 — bijv. MBOG]', '[Vereniging 2]', '[Vereniging 3]'].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-text-medium text-sm">
                      <span className="text-blue-accent mt-1 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
