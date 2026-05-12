import type { Metadata } from 'next'
import Link from 'next/link'
import VerhaalExpand from './VerhaalExpand'

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
      {/* ── Hero ── */}
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
                  goed. Toch had ik op jonge leeftijd regelmatig last van buikpijn. Al snel werd
                  mij verteld dat ik waarschijnlijk een prikkelbare darm syndroom (PDS) had,
                  maar dat voelde niet als een echte oplossing.
                </p>
                <p>
                  Tijdens mijn studententijd werden mijn klachten erger. Mijn buik was vaak
                  opgeblazen en daarnaast kreeg ik last van heftige acne. Pas toen ik overstapte
                  op een plantaardig voedingspatroon — met veel groenten, fruit, peulvruchten en
                  noten, en minder suiker — begon ik me beter te voelen.
                </p>
                <p>
                  Ook bracht ik meer balans in mijn leven door yoga en ontspanning. Ik stopte
                  met de anticonceptiepil en Roaccutane, en langzaam werd mijn huid rustiger en
                  namen mijn buikklachten af. Eindelijk kreeg ik mijn energie terug!
                </p>
              </div>
              <Link href="/contact" className="btn-terracotta mt-8 inline-block">
                Boek jouw consult
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-kolom: verhaal + opleidingen + ervaringen ── */}
      <section className="bg-beige-dark py-14 lg:py-20 relative overflow-hidden">
        {/* Watermark */}
        <p className="absolute bottom-0 left-0 font-heading font-bold text-[120px] sm:text-[180px] leading-none text-brown-gold/[0.06] whitespace-nowrap select-none pointer-events-none">
          food for thought
        </p>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* 1/3: Verhaal */}
            <div>
              <h2 className="font-heading text-2xl text-brown-gold font-semibold mb-6">
                Mijn achtergrond
              </h2>
              <VerhaalExpand />
            </div>

            {/* 1/3: Opleidingen */}
            <div>
              <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-6">
                Opleidingen
              </h2>
              <div className="space-y-5">
                {opleidingen.map((o) => (
                  <div key={o.titel} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-terracotta mt-1.5 shrink-0" />
                      <div className="w-px flex-1 bg-beige-deeper mt-1.5" />
                    </div>
                    <div className="pb-5">
                      <span className="font-body text-[11px] text-brown-light uppercase tracking-widest">{o.jaar}</span>
                      <p className="font-body text-sm font-semibold text-text-dark mt-0.5">{o.titel}</p>
                      <p className="font-body text-xs text-text-medium">{o.organisatie}</p>
                      {o.detail && <p className="font-body text-[11px] text-text-medium/70 italic mt-0.5">{o.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1/3: Ervaringen */}
            <div>
              <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-6">
                Ervaringen
              </h2>
              <div className="space-y-5">
                {ervaringen.map((e) => (
                  <div key={e.titel + e.jaar} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-brown-gold mt-1.5 shrink-0" />
                      <div className="w-px flex-1 bg-beige-deeper mt-1.5" />
                    </div>
                    <div className="pb-5">
                      <span className="font-body text-[11px] text-brown-light uppercase tracking-widest">{e.jaar}</span>
                      <p className="font-body text-sm font-semibold text-text-dark mt-0.5">{e.titel}</p>
                      {e.organisatie && <p className="font-body text-xs text-text-medium">{e.organisatie}</p>}
                      {e.detail && <p className="font-body text-[11px] text-text-medium/70 italic mt-0.5">{e.detail}</p>}
                    </div>
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
