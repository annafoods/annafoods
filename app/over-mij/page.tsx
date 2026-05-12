import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over mij',
  description:
    'Leer Annick kennen — orthomoleculair diëtist met een MSc Human Nutrition van de Universiteit van Glasgow en een passie voor de kracht van voeding.',
}

const opleidingen = [
  {
    jaar: '2024',
    titel: 'Orthomoleculaire therapie Gevorderd',
    organisatie: 'Ortho Health Foundation',
  },
  {
    jaar: '2017 – 2018',
    titel: 'MSc Human Nutrition',
    organisatie: 'University of Glasgow',
    detail: 'Cijfer: 8 · Specialisatie: Obesity & weight management',
  },
  {
    jaar: '2012 – 2016',
    titel: 'BSc Voeding & Diëtetiek',
    organisatie: 'Hanze Hogeschool Groningen',
    detail: 'Specialisatie: Toegepaste psychologie',
  },
]

const ervaringen = [
  { jaar: '2025', titel: 'Food Product Developer', organisatie: 'Kara-Tunga' },
  { jaar: '2024', titel: 'Vrijwilligerswerk voedingsprojecten', organisatie: 'Oeganda' },
  { jaar: '2021 – 2024', titel: 'Food Product Developer', organisatie: 'Abbot Kinneys' },
  { jaar: '2018 – 2019', titel: 'Medical Specialist', organisatie: 'Danone' },
  {
    jaar: '2018',
    titel: 'Bijgedragen aan wetenschappelijk onderzoek',
    organisatie: '',
    detail: "'Effect van visolie suppletie bij ouderen (65+) op spiermassa en functie verlies' (gepubliceerd, cijfer: 8,5)",
  },
  { jaar: '2016', titel: 'Stagiair Diëtist', organisatie: 'Diabetes Fonds' },
]

export default function OverMijPage() {
  return (
    <>
      {/* ── Hero: foto links, tekst rechts ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative h-[500px] sm:h-[580px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/over-mij.jpg" alt="Annick Rozendaal" fill className="object-cover object-top" priority /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">📸 Portretfoto Annick</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-accent pl-8 pt-2">
              <h1 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold leading-tight mb-6">
                Mijn reis met voeding als kompas
              </h1>
              <div className="space-y-4 font-body text-text-medium leading-relaxed">
                <p>
                  Gezond eten kreeg ik van huis uit mee, en bewuste keuzes maken voelde altijd
                  goed. Toch had ik op jonge leeftijd regelmatig last van buikpijn — al snel
                  werd mij verteld dat ik waarschijnlijk PDS had, maar dat voelde niet als een
                  echte oplossing.
                </p>
                <p>
                  Tijdens mijn studententijd werden mijn klachten erger: een opgeblazen buik en
                  heftige acne. Pas toen ik overstapte op een plantaardig voedingspatroon —
                  meer groenten, fruit, peulvruchten en minder suiker — begon ik me echt beter
                  te voelen. Ik stopte met de anticonceptiepil en Roaccutane, bracht meer balans
                  via yoga en ontspanning, en eindelijk kreeg ik mijn energie terug!
                </p>
                <p>
                  Na mijn studie voeding &amp; diëtetiek volgde ik de Master Human Nutrition in
                  Glasgow, waar ik leerde hoe voedselkeuzes onze biochemie beïnvloeden. Tijdens
                  mijn afstudeeronderzoek bewees omega-3 spierverlies bij 65-plussers aanzienlijk
                  te vertragen — dat liet me opnieuw zien hoe krachtig voeding écht is.
                </p>
                <p>
                  Als food product developer bij Danone en Abbot Kinneys leerde ik de
                  voedingsindustrie van binnenuit kennen. Nu gebruik ik die kennis om jou te
                  helpen etiketten te lezen, verborgen suikers te herkennen en bewuste keuzes
                  te maken. Voeding is een krachtig middel voor herstel — dat besef drijft
                  alles wat ik doe.
                </p>
              </div>
              <Link href="/contact" className="btn-terracotta mt-8 inline-block">
                Boek jouw consult
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food for thought + Opleidingen & Ervaringen ── */}
      <section className="bg-beige-dark py-14 lg:py-20 relative overflow-hidden">
        {/* Watermark */}
        <p className="absolute bottom-0 left-0 font-heading font-bold text-[120px] sm:text-[160px] leading-none text-brown-gold/[0.06] whitespace-nowrap select-none pointer-events-none -mb-6">
          food for thought
        </p>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-8">
                Opleidingen
              </h2>
              <div className="space-y-5">
                {opleidingen.map((o) => (
                  <div key={o.titel}>
                    <p className="font-body text-text-medium text-sm">
                      {o.jaar} – <strong className="text-text-dark">{o.titel}</strong>{o.organisatie && ` bij ${o.organisatie}`}
                    </p>
                    {o.detail && <p className="font-body text-text-medium/70 text-xs italic mt-0.5">{o.detail}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-8">
                Ervaringen
              </h2>
              <div className="space-y-5">
                {ervaringen.map((e) => (
                  <div key={e.titel + e.jaar}>
                    <p className="font-body text-text-medium text-sm">
                      {e.jaar} – <strong className="text-text-dark">{e.titel}</strong>
                      {e.organisatie && ` bij ${e.organisatie}`}
                    </p>
                    {e.detail && <p className="font-body text-text-medium/70 text-xs italic mt-0.5">{e.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meer over mij ── */}
      <section className="bg-beige py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-5xl sm:text-6xl text-blue-accent font-bold mb-10">
            Meer over mij
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 font-body text-text-medium leading-relaxed">
              <p>
                Ik hou van koken en je kan mij vaak vinden in mijn keuken thuis. Het liefst
                trek ik een halve dag er op uit om door een van mijn kookboeken te bladeren en
                nieuwe recepten te ontdekken. Dit heb ik jarenlang als productontwikkelaar
                gedaan, en daar haal ik nog steeds veel plezier uit.
              </p>
              <p>
                Van nature ben ik nieuwsgierig en laat me graag inspireren door de wereld om me
                heen. Ik heb veel gereisd, vrijwilligerswerk gedaan en in het buitenland
                gewerkt — het juiste moment voor een droom is vaak gewoon nú.
              </p>
              <p>
                Ik ben graag in de natuur, geniet van wandelingen in de bergen, yoga,
                koffiemomentjes in de zon, zeilen in de zomer en tekenen of schilderen. Maar het
                allerfijnste blijft thuiskomen bij familie en vrienden.
              </p>
            </div>

            {/* Foto grid */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { span: 'col-span-1 row-span-2', h: 'aspect-[3/4]' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1 row-span-2', h: 'aspect-[3/4]' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
                { span: 'col-span-1', h: 'aspect-square' },
              ].map((cell, i) => (
                <div key={i} className={`${cell.span} relative bg-beige-dark rounded-lg overflow-hidden ${cell.h} flex items-center justify-center`}>
                  {/* <Image src={`/images/prive-${i+1}.jpg`} alt="Annick" fill className="object-cover" /> */}
                  <p className="text-xs text-text-medium/40 font-body">📸</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
