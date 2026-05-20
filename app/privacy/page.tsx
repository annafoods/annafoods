import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van Anna Foods — hoe wij omgaan met jouw persoonsgegevens.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <section className="bg-beige py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl text-brown-gold font-semibold mb-2">
          Privacyverklaring
        </h1>
        <p className="font-body text-text-medium/60 text-sm mb-12">Laatst bijgewerkt: mei 2026</p>

        <div className="space-y-10 font-body text-text-medium leading-relaxed">

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">1. Wie zijn wij?</h2>
            <p>
              Anna Foods is een eenmanszaak van Annick Rozendaal, orthomoleculair diëtist.
              Wij zijn verantwoordelijk voor de verwerking van jouw persoonsgegevens zoals
              beschreven in deze privacyverklaring.
            </p>
            <p className="mt-2">
              <strong>Contactgegevens:</strong><br />
              Anna Foods<br />
              E-mail: info@annafoods.nl<br />
              Website: www.annafoods.nl
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">2. Welke gegevens verzamelen wij?</h2>
            <p>Via onze website verzamelen wij de volgende persoonsgegevens:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Voornaam en/of achternaam',
                'E-mailadres',
                'Telefoonnummer (optioneel)',
                'Inhoud van berichten die je ons stuurt',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">3. Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij verwerken jouw persoonsgegevens voor de volgende doeleinden:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Om contact met je op te nemen naar aanleiding van een ingevuld contactformulier',
                'Om het gratis mini plan toe te sturen na jouw aanvraag',
                'Om je te informeren over onze diensten indien je daarvoor toestemming hebt gegeven',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              De wettelijke grondslag voor deze verwerking is jouw toestemming (artikel 6 lid 1 sub a AVG)
              en de uitvoering van een overeenkomst (artikel 6 lid 1 sub b AVG).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">4. Hoe lang bewaren wij jouw gegevens?</h2>
            <p>
              Wij bewaren jouw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden
              waarvoor ze zijn verzameld. E-mailcorrespondentie bewaren wij maximaal 2 jaar.
              Gegevens die via ons e-mailsysteem (Resend) worden verwerkt, worden maximaal
              30 dagen bewaard in hun systemen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">5. Delen wij jouw gegevens?</h2>
            <p>
              Wij delen jouw gegevens uitsluitend met derden die noodzakelijk zijn voor het
              uitvoeren van onze diensten:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <li className="flex items-start gap-3">
                <span className="text-terracotta mt-1 shrink-0">•</span>
                <span>
                  <strong>Resend</strong> — e-maildienst voor het versturen van bevestigingsmails
                  en het mini plan. Resend verwerkt jouw e-mailadres als sub-verwerker.
                  Meer informatie: <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-accent underline">resend.com/privacy</a>
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Wij verkopen jouw gegevens nooit aan derden en delen ze niet voor marketingdoeleinden
              zonder jouw expliciete toestemming.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">6. Jouw rechten</h2>
            <p>Op basis van de AVG heb je de volgende rechten:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                'Recht op inzage — je kunt opvragen welke gegevens wij van je hebben',
                'Recht op correctie — je kunt onjuiste gegevens laten aanpassen',
                'Recht op verwijdering — je kunt verzoeken jouw gegevens te laten verwijderen',
                'Recht op bezwaar — je kunt bezwaar maken tegen de verwerking van jouw gegevens',
                'Recht op dataportabiliteit — je kunt jouw gegevens opvragen in een overdraagbaar formaat',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-terracotta mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Stuur een verzoek naar <a href="mailto:info@annafoods.nl" className="text-blue-accent underline">info@annafoods.nl</a>.
              Wij reageren binnen 30 dagen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">7. Beveiliging</h2>
            <p>
              Wij nemen passende technische en organisatorische maatregelen om jouw
              persoonsgegevens te beschermen. Onze website maakt gebruik van een beveiligde
              HTTPS-verbinding en e-mails worden verstuurd via een geverifieerd domein.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">8. Klachten</h2>
            <p>
              Heb je een klacht over de manier waarop wij met jouw gegevens omgaan? Neem dan
              contact op via <a href="mailto:info@annafoods.nl" className="text-blue-accent underline">info@annafoods.nl</a>.
              Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens:{' '}
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-blue-accent underline">autoriteitpersoonsgegevens.nl</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-blue-accent font-semibold mb-3">9. Wijzigingen</h2>
            <p>
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De meest recente
              versie staat altijd op deze pagina.
            </p>
            <p className="mt-2 text-sm text-text-medium/60 italic">
              Let op: deze privacyverklaring is een basisdocument. Wij raden aan dit te laten
              controleren door een juridisch adviseur voor je definitief publiceert.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
