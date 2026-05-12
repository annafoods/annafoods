'use client'

import { useState } from 'react'

export default function VerhaalExpand() {
  const [open, setOpen] = useState(false)

  return (
    <div className="font-body text-text-medium leading-relaxed text-sm space-y-4">
      {/* Altijd zichtbaar — met fade onderaan als ingeklapt */}
      <div className="relative">
        <p>
          Na mijn studie voeding &amp; diëtetiek wilde ik nog dieper in het vakgebied duiken.
          Die nieuwsgierigheid bracht me naar Schotland, waar ik de Master Human Nutrition
          volgde aan de Universiteit van Glasgow. De focus lag op hoe voedselkeuzes onze
          biochemische en fysiologische processen beïnvloeden en wat de impact van voeding is op
          zowel fysieke als mentale gezondheid.
        </p>
        <p className="mt-4">
          Daarnaast leerde ik wetenschappelijke kennis kritisch te interpreteren en praktisch toe
          te passen. Juist in een tijd waarin er zoveel misinformatie over voeding rondgaat, vind
          ik het belangrijk om feiten van fabels te onderscheiden. En de wetenschap laat steeds
          duidelijker zien hoe groot…
        </p>
        {/* Fade-out gradient */}
        {!open && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-beige-dark to-transparent pointer-events-none" />
        )}
      </div>

      {/* Uitklapbaar */}
      <div className={`space-y-4 overflow-hidden transition-all duration-500 ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p>
          Tijdens mijn afstudeeronderzoek dook ik samen met een klein team in de wereld van
          omega-3. We onderzochten zes maanden lang hoe een hoge dosering van deze vetzuren de
          spierkracht en -functie van 65-plussers beïnvloedde. De uitkomst? Omega-3 hielp
          spierafbraak aanzienlijk tegengaan. Dit onderzoek liet me opnieuw zien hoe krachtig
          voeding écht is.
        </p>
        <p>
          Na mijn studie koos ik ervoor om in de voedingsindustrie te werken als
          productontwikkelaar, om een groter publiek te inspireren met het aanbieden van gezonde
          producten. Deze ervaring vormt nu een waardevolle aanvulling op mijn werk als
          orthomoleculair diëtist. Ik laat je graag zien hoe je etiketten kunt lezen, verborgen
          suikers en ongezonde toevoegingen kunt herkennen en bewuste keuzes kunt maken in de
          supermarkt.
        </p>
        <p>
          Afgelopen jaar heb ik de opleiding Orthomoleculaire Therapie gevolgd, en dat voelde
          als het laatste puzzelstukje. Mensen één op één helpen is iets waar ik veel passie
          voor voel. Tijdens mijn werk in Oeganda heb ik gezien hoe je met kleine stappen een
          groot verschil kunt maken in iemands leven.
        </p>
        <p>
          Voeding is niet alleen iets dat ons energie geeft — het is een krachtig middel voor
          herstel. Of het nu gaat om het ondersteunen van je hormonen, je spijsvertering of je
          algehele welzijn: de juiste voedingsstoffen kunnen je lichaam helpen weer in balans
          te komen. Dat besef drijft me in alles wat ik doe.
        </p>
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
