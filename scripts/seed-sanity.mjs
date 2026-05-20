/**
 * Seed script — vult Sanity met alle huidige website teksten
 * Gebruik: SANITY_TOKEN=xxx node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ui0ua8r1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const docs = [
  {
    _id: 'singleton-homepage',
    _type: 'homepage',
    heroTitel: 'Jouw herstel begint hier, met voeding die bij jou past',
    heroTekst: 'Leuk dat je er bent! Als orthomoleculair diëtist vind ik het belangrijk om jou te helpen in je gezondheid en je klachten te verminderen. Onder mijn begeleiding geef ik persoonlijk advies dat goed bij jou en je leefstijl past, waarbij ik zowel vanuit een wetenschappelijk oogpunt als een holistische benadering naar je kijk. Ik geloof dat ieder mens uniek is, en daarom stel ik samen met jou doelen die aansluiten bij jouw persoonlijke behoeften en leefstijl.',
    heroCta: 'Boek jouw consult!',
    krachtTitel: 'De kracht van voeding',
    krachtTekst1: 'Jarenlang had ik zelf last van darmklachten, heftige acne en een opgeblazen gevoel. Mijn hormonen waren volledig uit balans en pas toen ik overstapte op een plantaardig dieet, verdwenen mijn klachten bijna volledig. Ik voelde mij weer in balans. Dat gun ik jou ook!',
    krachtTekst2: 'Ik geloof in de kracht van voeding en het zelf herstellend vermogen van ons lichaam. Uit balans zijn komt vaak voor, maar met de juiste voedingsstoffen kan je lichaam langzaam zich herstellen en weer in evenwicht komen. Met kleine stapjes kun je het verschil al voelen.',
    trajectenIntro: 'Ik bied twee trajecten aan waarmee we samen jouw gezondheidsdoelen gaan proberen te bereiken. Bij beide trajecten sta ik 24/7 voor je klaar om je te helpen bij al jouw vragen.',
    leerpunten: [
      { titel: 'Ideale basis voor jouw klachten', beschrijving: 'Hoe creëer je een gezonde basis voor je voeding, slaap, beweging en leefstijl?' },
      { titel: 'Kick-start je ochtendroutine', beschrijving: 'Een goede ochtendroutine legt de basis voor een energieke dag zonder klachten.' },
      { titel: 'Kracht van suppletie', beschrijving: 'Welke supplementen zijn voor jóu van belang bij het herstellen van je balans?' },
      { titel: 'Wat vermijd je beter?', beschrijving: 'Welke voedingsmiddelen verergeren je klachten en kun je het beste (tijdelijk) vermijden?' },
      { titel: 'Slimmer shoppen in de supermarkt', beschrijving: 'We worden overspoeld met bewerkte producten (ultra-processed foods). Ik leer je etiketten te lezen zodat je bewuste en gezonde keuzes kunt maken.' },
    ],
  },
  {
    _id: 'singleton-over-mij',
    _type: 'overMij',
    heroTitel: 'Mijn reis met voeding als kompas',
    heroAlinea1: 'Gezond eten kreeg ik van huis uit mee, en bewuste keuzes maken voelde altijd goed. Toch had ik op jonge leeftijd regelmatig last van buikpijn. Al snel werd mij verteld dat ik waarschijnlijk een prikkelbare darm syndroom (PDS) had, maar dat voelde niet als een echte oplossing.',
    heroAlinea2: 'Tijdens mijn studententijd werden mijn klachten erger. Mijn buik was vaak opgeblazen en daarnaast kreeg ik last van heftige acne. Ik probeerde van alles, maar niets hielp echt. Pas toen ik overstapte op een plantaardig voedingspatroon, met veel groenten, fruit, peulvruchten en noten, en minder suiker en geraffineerde koolhydraten, begon ik me beter te voelen.',
    heroAlinea3: 'Ook bracht ik meer balans in mijn leven door yoga en ontspanning. Ik stopte met de anticonceptiepil en het slikken van Roaccutane (acne remmer), en langzaam maar zeker werd mijn huid rustiger en namen mijn buikklachten af. Eindelijk kreeg ik mijn energie terug!',
    achtergrondAlinea1: 'Na mijn studie voeding & diëtetiek wilde ik nog dieper in het vakgebied duiken. Die nieuwsgierigheid bracht me naar Schotland, waar ik de Master Human Nutrition volgde aan de Universiteit van Glasgow. De focus lag op hoe voedselkeuzes onze biochemische en fysiologische processen beïnvloeden en wat de impact van voeding is op zowel fysieke als mentale gezondheid.',
    achtergrondAlinea2: 'Daarnaast leerde ik wetenschappelijke kennis kritisch te interpreteren en praktisch toe te passen. Juist in een tijd waarin er zoveel misinformatie over voeding rondgaat, vind ik het belangrijk om feiten van fabels te onderscheiden. En de wetenschap laat steeds duidelijker zien hoe groot…',
    achtergrondAlinea3: 'Tijdens mijn afstudeeronderzoek dook ik samen met een klein team in de wereld van omega-3. We onderzochten zes maanden lang hoe een hoge dosering van deze vetzuren de spierkracht en -functie van 65-plussers beïnvloedde. De uitkomst? Omega-3 hielp spierafbraak aanzienlijk tegengaan. Dit onderzoek liet me opnieuw zien hoe krachtig voeding écht is.',
    achtergrondAlinea4: 'Na mijn studie koos ik ervoor om in de voedingsindustrie te werken als productontwikkelaar, om een groter publiek te inspireren met het aanbieden van gezonde producten. Deze ervaring vormt nu een waardevolle aanvulling op mijn werk als orthomoleculair diëtist. Ik laat je graag zien hoe je etiketten kunt lezen, verborgen suikers en ongezonde toevoegingen kunt herkennen en bewuste keuzes kunt maken in de supermarkt.',
    achtergrondAlinea5: 'Afgelopen jaar heb ik de opleiding Orthomoleculaire Therapie gevolgd, en dat voelde als het laatste puzzelstukje. Mensen één op één helpen is iets waar ik veel passie voor voel. Tijdens mijn werk in Oeganda heb ik gezien hoe je met kleine stappen een groot verschil kunt maken in iemands leven.',
    achtergrondAlinea6: 'Voeding is niet alleen iets dat ons energie geeft — het is een krachtig middel voor herstel. Of het nu gaat om het ondersteunen van je hormonen, je spijsvertering of je algehele welzijn: de juiste voedingsstoffen kunnen je lichaam helpen weer in balans te komen. Dat besef drijft me in alles wat ik doe.',
    kwaliteitTekst: '[Jouw tekst hier — vertel wat kwaliteit voor jou betekent in de praktijk]',
    kwaliteitTekst2: 'Mijn aanpak is altijd evidence-based: ik combineer de nieuwste wetenschappelijke inzichten met praktische toepasbaarheid in het dagelijks leven. Want goede intenties zonder onderbouwing zijn niet genoeg.',
    kwaliteitTekst3: '[Aanvullende alinea over jouw werkwijze]',
    registraties: ['[Registratie 1 — bijv. BIG-register Diëtist]', '[Registratie 2]', '[Registratie 3]'],
    beroepsverenigingen: ['[Vereniging 1 — bijv. MBOG]', '[Vereniging 2]', '[Vereniging 3]'],
  },
  {
    _id: 'singleton-voor-wie',
    _type: 'voorWie',
    klachtenTitel: 'Herken jij dit?',
    klachten: ['Prikkelbare darm syndroom', 'Opgeblazen buik', 'Hormonale disbalans (acne, moodswings)', 'Overgewicht', 'Niet lekker in je vel doordat je niet meer weet wat gezond is'],
    klachtenTekst: 'Dan ben je bij mij aan het juiste adres. Samen kijken we wat jouw lichaam nodig heeft om weer in balans te komen.',
    resultatenTitel: 'Wat levert het op?',
    resultaten: ['Meer energie gedurende de dag', 'Minder opgeblazen buik', 'Niet meer futloos voelen', 'Je voelt je steeds meer in balans', 'Je weet hoe je gezonde voedingskeuzes kunt maken', 'Minder overweldigend door alle voedingskeuzes'],
    aanpakTekst: 'Als orthomoleculair diëtist staat voor mij kwaliteit voorop. Ik kijk graag naar het grotere plaatje. Voeding is een belangrijke pijler, maar ook mondgezondheid, stress, slaap, ontspanning en beweging neem ik hierin mee. Ik vertaal mijn wetenschappelijke kennis naar praktische inzichten met een holistische visie. Betrouwbaarheid van informatie vind ik heel belangrijk. Tijdens mijn consulten hecht ik waarde aan verbinding en luister ik graag naar wat jij nodig hebt. Ik stel een plan op dat bij jou past, rekening houdend met jouw waarden en leefstijl.',
    missieTekst: 'Mijn missie is om jou op weg te helpen naar een gezondere leefstijl waar je fysiek en mentaal verschil merkt. Dit doen we samen, stap voor stap. Een aanpak die past bij jouw leefstijl en bij wie jij bent. Ik weet dat eerste stapjes al kunnen helpen om jou het verschil te laten voelen.',
    beloftes: ['Ik ben eerlijk met je — ook als dat soms moeilijk te horen is', 'Ik ben 24/7 bereikbaar via WhatsApp voor al jouw vragen', 'Ik luister écht naar jou en jouw situatie', 'Ik geef je een plan dat past bij wie jij bent, niet een standaard schema', 'Ik sta voor jou klaar gedurende het hele traject'],
  },
  {
    _id: 'singleton-trajecten-pagina',
    _type: 'trajectenPagina',
    heroTitel: 'Persoonlijke begeleiding op jouw pad naar gezondheid',
    heroTekst1: 'Persoonlijke betrokkenheid is voor mij erg belangrijk. Daarom ben ik 24/7 (via WhatsApp) bereikbaar voor jouw vragen! Twijfel je tussen de verschillende trajecten? Neem dan gerust contact op, en ik adviseer je graag.',
    heroTekst2: 'Mocht je liever geen traject willen, kun je ook een los consult van 60 minuten inplannen voor €80. We bespreken je huidige situatie, jouw voortgang, vragen beantwoorden en nieuwe doelen afstemmen.',
    heroTekst3: 'Daarnaast is het mogelijk om over te stappen naar een langer traject. Hierin werken we samen aan jouw doelen met een gestructureerd plan en meerdere consultmomenten.',
    visieTekst: 'Ik kijk graag naar het grotere plaatje. Voeding is een belangrijke pijler, maar ook mondgezondheid, stress, slaap, ontspanning en beweging neem ik hierin mee. Ik combineer mijn wetenschappelijke kennis met een holistische visie.',
    ontdektItems: ['Welke voeding past bij jouw leefstijl', 'Wat zijn de eerste stappen die je nu kunt toepassen om meer in balans te komen', 'Hoe is alles in jouw lichaam met elkaar verbonden', 'De oplossing die kan helpen om minder klachten te ervaren'],
    ervaartItems: ['Een volwaardig eetpatroon passend bij jouw leefstijl', 'Met kleine stapjes meer in balans voelen', 'Meer energie gedurende dag', 'Vermindering van je klachten', 'Meer in balans'],
    losConsultTekst: 'Mocht je daarna het gevoel hebben dat je ergens tegenaan blijft lopen, dan kunnen we altijd een los consult inplannen.',
    losConsultPrijs: '€ 60,-',
  },
  {
    _id: 'singleton-site-instellingen',
    _type: 'siteInstellingen',
    telefoon: '+31 6 18 38 28 28',
    email: 'info@annafoods.nl',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    footerCtaTitel: 'Klaar om te beginnen?',
    footerCtaTekst: 'Plan een gratis kennismakingsgesprek van 30 minuten en ontdek welk traject bij jou past. Geen verplichtingen.',
    footerCtaTekstDownload: 'Wil je eerst zelf aan de slag? Download gratis het mini plan met de do\'s en don\'ts voor een gezonde leefstijl.',
  },
]

async function seed() {
  console.log('Seeding Sanity...')
  for (const doc of docs) {
    await client.createOrReplace(doc)
    console.log(`✓ ${doc._type}`)
  }
  console.log('Klaar!')
}

seed().catch(console.error)
