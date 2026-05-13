'use client'

import { useState } from 'react'

const vragen = [
  {
    q: 'Als ik tussentijdse vragen heb, kan ik je die dan stellen?',
    a: 'Ja, absoluut! Bij alle trajecten ben ik 24/7 bereikbaar via WhatsApp voor al jouw vragen. Persoonlijke betrokkenheid is voor mij erg belangrijk.',
  },
  {
    q: 'Wat betekent het als je orthomoleculair diëtist bent?',
    a: 'Een orthomoleculair diëtist kijkt naar de optimale hoeveelheid voedingsstoffen die jouw lichaam nodig heeft om goed te functioneren. Ik combineer wetenschappelijke kennis met een holistische benadering en kijk niet alleen naar voeding, maar ook naar leefstijl, slaap, stress en beweging.',
  },
  {
    q: 'Hoe wijkt dit af van een reguliere diëtist?',
    a: 'Een reguliere diëtist richt zich voornamelijk op richtlijnen voor ziektepreventie en behandeling via voeding. Een orthomoleculair diëtist gaat een stap verder: ik kijk naar de individuele biochemie van jouw lichaam en pas het advies volledig aan op jouw unieke situatie, inclusief suppletie waar nodig.',
  },
  {
    q: 'Wordt mijn traject vergoed door mijn zorgverzekering?',
    a: 'In sommige gevallen vergoeden aanvullende verzekeringen een deel van de kosten. Dit verschilt per verzekeraar en polis. Ik raad je aan dit vooraf te checken bij jouw zorgverzekeraar.',
  },
  {
    q: 'Hoe lang duurt het voordat ik resultaat ga voelen?',
    a: 'Dit verschilt per persoon en per klacht. Sommige mensen voelen al na een paar weken verschil, voor anderen duurt het iets langer. Samen stellen we realistische doelen en monitoren we jouw voortgang gedurende het traject.',
  },
  {
    q: 'Wordt er bij altijd gebruik gemaakt van supplementen?',
    a: 'Niet per se. Suppletie is een aanvulling, geen vervanging voor goede voeding. Ik beoordeel per situatie of supplementen zinvol zijn en geef alleen advies over suppletie als dat toegevoegde waarde heeft voor jouw specifieke situatie.',
  },
  {
    q: 'Kan het consult ook online plaatsvinden?',
    a: 'Ja! Alle consulten kunnen online via video plaatsvinden. Dit werkt net zo goed als een fysiek gesprek en geeft je de flexibiliteit om mee te doen vanuit waar je wilt.',
  },
  {
    q: 'Kan ik bepaalde voeding opgeven die ik sowieso wil houden?',
    a: 'Absoluut. Mijn advies is altijd op maat en houdt rekening met jouw voorkeuren, gewoonten en leefstijl. Het gaat erom dat het plan voor jou werkt — niet om perfectie.',
  },
  {
    q: 'Werk je met labtesten?',
    a: 'Bij het Transformatietraject is er de optie om een labtest te doen (vetzuur & omega-3 balans). Dit geeft waardevolle inzichten in jouw biochemie. Buiten dat kan ik op basis van klachten en voedingspatroon al veel aanbevelen zonder labtesten.',
  },
  {
    q: 'Kan ik mijn traject verlengen?',
    a: 'Ja, dat is zeker mogelijk. Als je na afloop van een traject wilt doorgaan, bespreken we samen welke vorm van verdere begeleiding het beste bij jou past.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const left = vragen.slice(0, 5)
  const right = vragen.slice(5)

  const Item = ({ item, idx }: { item: typeof vragen[0]; idx: number }) => (
    <div className="border border-beige-dark rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-beige hover:bg-beige-dark/40 transition-colors"
        onClick={() => setOpen(open === idx ? null : idx)}
        aria-expanded={open === idx}
      >
        <span className="font-body font-medium text-text-dark text-sm pr-4">{item.q}</span>
        <span className={`shrink-0 text-terracotta transition-transform duration-200 ${open === idx ? 'rotate-45' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-64' : 'max-h-0'}`}>
        <p className="font-body text-text-medium text-sm leading-relaxed px-5 pb-4 pt-1">{item.a}</p>
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="space-y-3">
        {left.map((item, i) => <Item key={i} item={item} idx={i} />)}
      </div>
      <div className="space-y-3">
        {right.map((item, i) => <Item key={i} item={item} idx={i + 5} />)}
      </div>
    </div>
  )
}
