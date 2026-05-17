import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitel', title: 'Hero — Titel', type: 'string' }),
    defineField({ name: 'heroTekst', title: 'Hero — Tekst', type: 'text' }),
    defineField({ name: 'heroCta', title: 'Hero — Knoptekst', type: 'string' }),
    defineField({ name: 'krachtTitel', title: 'Kracht van voeding — Titel', type: 'string' }),
    defineField({ name: 'krachtTekst1', title: 'Kracht van voeding — Alinea 1', type: 'text' }),
    defineField({ name: 'krachtTekst2', title: 'Kracht van voeding — Alinea 2', type: 'text' }),
    defineField({ name: 'trajectenIntro', title: 'Trajecten — Introtekst', type: 'text' }),
    defineField({
      name: 'leerpunten',
      title: 'Wat jij sowieso gaat leren',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'titel', title: 'Titel', type: 'string' },
          { name: 'beschrijving', title: 'Beschrijving', type: 'text' },
        ],
      }],
    }),
    defineField({ name: 'ctaTitel', title: 'Klaar om te beginnen — Titel', type: 'string' }),
    defineField({ name: 'ctaTekst', title: 'Klaar om te beginnen — Tekst', type: 'text' }),
  ],
  preview: { prepare: () => ({ title: 'Homepage' }) },
})
