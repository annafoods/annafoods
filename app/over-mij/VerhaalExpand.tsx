'use client'

import { useState } from 'react'

type Props = {
  alinea1?: string
  alinea2?: string
  alinea3?: string
  alinea4?: string
  alinea5?: string
  alinea6?: string
}

export default function VerhaalExpand({
  alinea1 = 'Na mijn studie voeding & diëtetiek wilde ik nog dieper in het vakgebied duiken. Die nieuwsgierigheid bracht me naar Schotland, waar ik de Master Human Nutrition volgde aan de Universiteit van Glasgow.',
  alinea2 = 'Daarnaast leerde ik wetenschappelijke kennis kritisch te interpreteren en praktisch toe te passen. Juist in een tijd waarin er zoveel misinformatie over voeding rondgaat, vind ik het belangrijk om feiten van fabels te onderscheiden.',
  alinea3 = 'Tijdens mijn afstudeeronderzoek dook ik samen met een klein team in de wereld van omega-3. We onderzochten zes maanden lang hoe een hoge dosering van deze vetzuren de spierkracht en -functie van 65-plussers beïnvloedde.',
  alinea4 = 'Na mijn studie koos ik ervoor om in de voedingsindustrie te werken als productontwikkelaar. Deze ervaring vormt nu een waardevolle aanvulling op mijn werk als orthomoleculair diëtist.',
  alinea5 = 'Afgelopen jaar heb ik de opleiding Orthomoleculaire Therapie gevolgd, en dat voelde als het laatste puzzelstukje.',
  alinea6 = 'Voeding is niet alleen iets dat ons energie geeft — het is een krachtig middel voor herstel. Dat besef drijft me in alles wat ik doe.',
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="font-body text-text-medium leading-relaxed text-sm space-y-4">
      <div className="relative">
        <p>{alinea1}</p>
        <p className="mt-4">{alinea2}</p>
        {!open && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige-dark to-transparent pointer-events-none" />
        )}
      </div>

      <div className={`space-y-4 overflow-hidden transition-all duration-500 ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {alinea3 && <p>{alinea3}</p>}
        {alinea4 && <p>{alinea4}</p>}
        {alinea5 && <p>{alinea5}</p>}
        {alinea6 && <p>{alinea6}</p>}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-blue-accent text-sm font-medium hover:underline mt-2"
      >
        {open ? 'Lees minder ↑' : 'Lees meer ↓'}
      </button>
    </div>
  )
}
