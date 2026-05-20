import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'mailTemplates',
  title: 'E-mail templates',
  type: 'document',
  groups: [
    { name: 'contactReply', title: '✉️ Bevestiging contactformulier' },
    { name: 'miniplan', title: '📥 Mini plan e-mail' },
  ],
  fields: [
    // Bevestiging contactformulier
    defineField({
      name: 'contactOnderwerp',
      title: 'Onderwerp',
      description: 'Onderwerp van de bevestigingsmail na invullen contactformulier',
      type: 'string',
      group: 'contactReply',
    }),
    defineField({
      name: 'contactTekst',
      title: 'Tekst',
      description: 'Gebruik {naam} voor de naam van de bezoeker',
      type: 'text',
      group: 'contactReply',
    }),

    // Mini plan
    defineField({
      name: 'miniplanOnderwerp',
      title: 'Onderwerp',
      description: 'Onderwerp van de e-mail met het mini plan',
      type: 'string',
      group: 'miniplan',
    }),
    defineField({
      name: 'miniplanTekst',
      title: 'Tekst',
      description: 'Tekst van de e-mail. Het mini plan wordt automatisch als bijlage meegestuurd zodra je het uploadt.',
      type: 'text',
      group: 'miniplan',
    }),
    defineField({
      name: 'miniplanBestand',
      title: 'Mini plan PDF',
      description: 'Upload hier het mini plan PDF bestand',
      type: 'file',
      options: { accept: '.pdf' },
      group: 'miniplan',
    }),
  ],
  preview: { prepare: () => ({ title: 'E-mail templates' }) },
})
