import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
    detail:
      "'Effect van visolie suppletie bij ouderen (65+) op spiermassa en functie verlies' (gepubliceerd, cijfer: 8,5)",
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
            {/* Foto */}
            <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden">
              {/* <Image src="/images/over-mij.jpg" alt="Annick Rozendaal" fill className="object-cover object-top" priority /> */}
              <div className="absolute inset-0 bg-beige-dark flex items-center justify-center">
                <p className="text-text-medium text-sm text-center px-6 font-body">
                  📸 Portretfoto Annick
                </p>
              </div>
            </div>

            {/* Tekst */}
            <div className="border-l-4 border-blue-accent pl-8 pt-2">
              <h1 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold leading-tight mb-8">
                Mijn reis met voeding als kompas
              </h1>
              <div className="space-y-5 font-body text-text-medium leading-relaxed">
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
                  voedingspatroon — met veel groenten, fruit, peulvruchten en noten, en minder
                  suiker en geraffineerde koolhydraten — begon ik me beter te voelen.
                </p>
                <p>
                  Ook bracht ik meer balans in mijn leven door yoga en ontspanning. Ik stopte
                  met de anticonceptiepil en het slikken van Roaccutane (acne remmer), en
                  langzaam maar zeker werd mijn huid rustiger en namen mijn buikklachten af.
                  Eindelijk kreeg ik mijn energie terug!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vervolg bio: brede tekstkolom ── */}
      <section className="bg-beige pb-16 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 font-body text-text-medium leading-relaxed">
            <p>
              Na mijn studie voeding &amp; diëtetiek wilde ik nog dieper in het vakgebied
              duiken. Die nieuwsgierigheid bracht me naar Schotland, waar ik de Master Human
              Nutrition volgde aan de Universiteit van Glasgow. De focus lag op hoe
              voedselkeuzes onze biochemische en fysiologische processen beïnvloeden en wat de
              impact van voeding is op zowel fysieke als mentale gezondheid.
            </p>
            <p>
              Daarnaast leerde ik wetenschappelijke kennis kritisch te interpreteren en
              praktisch toe te passen. Juist in een tijd waarin er zoveel misinformatie over
              voeding rondgaat, vind ik het belangrijk om feiten van fabels te onderscheiden.
            </p>
            <p>
              Tijdens mijn afstudeeronderzoek dook ik samen met een klein team in de wereld
              van omega-3. We onderzochten zes maanden lang hoe een hoge dosering van deze
              vetzuren de spierkracht en -functie van 65-plussers beïnvloedde. De uitkomst?
              Omega-3 hielp spierafbraak aanzienlijk tegengaan. Dit onderzoek liet me opnieuw
              zien hoe krachtig voeding écht is.
            </p>
            <p>
              Na mijn studie koos ik ervoor om in de voedingsindustrie te werken als
              productontwikkelaar, om een groter publiek te inspireren met het aanbieden van
              gezonde producten. Deze ervaring vormt nu een waardevolle aanvulling op mijn werk
              als orthomoleculair diëtist. Ik laat je graag zien hoe je etiketten kunt lezen,
              verborgen suikers en ongezonde toevoegingen kunt herkennen en bewuste keuzes kunt
              maken in de supermarkt.
            </p>
            <p>
              Afgelopen jaar heb ik de opleiding Orthomoleculaire Therapie gevolgd, en dat
              voelde als het laatste puzzelstukje. Mensen één op één helpen is iets waar ik
              veel passie voor voel. Tijdens mijn werk in Oeganda heb ik gezien hoe je met
              kleine stappen een groot verschil kunt maken in iemands leven — iets waar ik ook
              in geloof in mijn werk als orthomoleculair diëtist.
            </p>
            <p>
              Voeding is niet alleen iets dat ons energie geeft, het is een krachtig middel
              voor herstel. Of het nu gaat om het ondersteunen van je hormonen, je
              spijsvertering of je algehele welzijn: de juiste voedingsstoffen kunnen je
              lichaam helpen weer in balans te komen. Dat besef drijft me in alles wat ik doe:
              mensen laten ervaren hoe voeding een positieve impact kan hebben op hun gezondheid
              en hen helpen hun eigen lichaam beter te begrijpen.
            </p>
          </div>
        </div>
      </section>

      {/* ── Food for thought ── */}
      <section className="bg-beige overflow-hidden py-4">
        <p className="font-heading font-bold text-[140px] sm:text-[200px] lg:text-[260px] leading-none text-brown-gold/10 whitespace-nowrap select-none -mx-8">
          food for thought
        </p>
      </section>

      {/* ── Opleidingen & Ervaringen ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Opleidingen */}
            <div className="text-center">
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-10">
                Opleidingen
              </h2>
              <div className="space-y-7">
                {opleidingen.map((o) => (
                  <div key={o.titel}>
                    <p className="font-body text-text-medium text-sm">
                      {o.jaar} –{' '}
                      <strong className="text-text-dark">{o.titel}</strong>{' '}
                      {o.organisatie && `bij ${o.organisatie}`}
                    </p>
                    {o.detail && (
                      <p className="font-body text-text-medium/70 text-sm italic mt-1">
                        {o.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Ervaringen */}
            <div className="text-center">
              <h2 className="font-heading text-3xl text-blue-accent font-semibold mb-10">
                Ervaringen
              </h2>
              <div className="space-y-7">
                {ervaringen.map((e) => (
                  <div key={e.titel + e.jaar}>
                    <p className="font-body text-text-medium text-sm">
                      {e.jaar}
                      {e.organisatie ? (
                        <>
                          {' – '}
                          <strong className="text-text-dark">{e.titel}</strong>
                          {' bij '}
                          {e.organisatie}
                        </>
                      ) : (
                        <>
                          {' – '}
                          <strong className="text-text-dark">{e.titel}</strong>
                        </>
                      )}
                    </p>
                    {e.detail && (
                      <p className="font-body text-text-medium/70 text-sm italic mt-1">
                        {e.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meer over mij ── */}
      <section className="bg-beige py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-[80px] sm:text-[110px] lg:text-[140px] leading-none text-blue-accent font-bold mb-12">
            Meer over mij
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Tekst */}
            <div className="space-y-5 font-body text-text-medium leading-relaxed">
              <p>
                Ik hou van koken en je kan mij vaak vinden in mijn keuken thuis. Het liefst
                trek ik een halve dag er op uit om door een van mijn kookboeken te bladeren en
                nieuwe recepten te ontdekken. Ik experimenteer graag, en uiteraard ben ik
                benieuwd hoe het smaakt. Dit heb ik jarenlang als productontwikkelaar gedaan,
                en daar haal ik nog steeds veel plezier uit.
              </p>
              <p>
                Van nature ben ik nieuwsgierig en laat me graag inspireren door de wereld om me
                heen. Dat drijft me om avonturen na te jagen en "ja" te zeggen tegen mijn
                dromen. Dit heeft me veel gebracht: ik heb veel gereisd, vrijwilligerswerk
                gedaan en in het buitenland gewerkt. Een verrijking, omdat het me nieuwe
                perspectieven heeft gegeven én me heeft geleerd dat het juiste moment voor een
                droom vaak gewoon nú is.
              </p>
              <p>
                Ik ben graag in de natuur, geniet van lange wandelingen in de bergen, yoga,
                koffiemomentjes in de zon, een zeilbootje huren in de zomer, en tekenen of
                schilderen. Maar het allerfijnste aan thuiskomen blijft toch de dierbare
                momenten met familie en vrienden — daar geniet ik het meest van!
              </p>
            </div>

            {/* Foto grid 4 kolommen */}
            <div className="grid grid-cols-4 gap-2">
              {/* Rij 1 */}
              <div className="col-span-1 row-span-2 relative bg-beige-dark rounded-lg overflow-hidden aspect-[3/4]">
                {/* <Image src="/images/prive-1.jpg" alt="Annick" fill className="object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 row-span-2 relative bg-beige-dark rounded-lg overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              {/* Rij 2 */}
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              {/* Rij 3 */}
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
              <div className="col-span-1 relative bg-beige-dark rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs text-text-medium text-center px-1 font-body">📸</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
