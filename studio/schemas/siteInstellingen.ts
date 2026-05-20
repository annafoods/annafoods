import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteInstellingen',
  title: 'Site-instellingen',
  type: 'document',
  groups: [
    { name: 'contact', title: '📞 Contactgegevens' },
    { name: 'socialmedia', title: '📱 Social media' },
    { name: 'footer', title: '🔗 Footer teksten' },
    { name: 'email', title: '✉️ Bevestigingsmail contactformulier' },
  ],
  fields: [
    // Contactgegevens
    defineField({
      name: 'telefoon',
      title: 'Telefoonnummer',
      description: 'Verschijnt op de contactpagina en in de footer',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      description: 'Verschijnt op de contactpagina en in de footer. Berichten van het contactformulier komen hier binnen.',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'locatie',
      title: 'Locatie (bijv. Amsterdam / online)',
      description: 'Verschijnt op de contactpagina',
      type: 'string',
      group: 'contact',
    }),

    // Social media
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      description: 'Volledige link naar je Instagram profiel',
      type: 'url',
      group: 'socialmedia',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      description: 'Volledige link naar je LinkedIn profiel',
      type: 'url',
      group: 'socialmedia',
    }),

    // Footer teksten
    defineField({
      name: 'footerCtaTitel',
      title: 'Grote titel onderaan elke pagina',
      description: 'Bijv. "Klaar om te beginnen?"',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'footerCtaTekst',
      title: 'Tekst bij "Plan een gratis kennismaking" knop',
      type: 'text',
      group: 'footer',
    }),
    defineField({
      name: 'footerCtaTekstDownload',
      title: 'Tekst bij "Download gratis mini plan" knop',
      type: 'text',
      group: 'footer',
    }),

    // Bevestigingsmail
    defineField({
      name: 'autoReplyOnderwerp',
      title: 'Onderwerp van de bevestigingsmail',
      description: 'Bijv. "Bedankt voor je bericht!"',
      type: 'string',
      group: 'email',
    }),
    defineField({
      name: 'autoReplyTekst',
      title: 'Tekst van de bevestigingsmail',
      description: 'Gebruik {naam} waar je de naam van de bezoeker wil tonen. Bijv: "Hoi {naam}, bedankt voor je bericht!"',
      type: 'text',
      group: 'email',
    }),
  ],
  preview: { prepare: () => ({ title: 'Site-instellingen' }) },
})
