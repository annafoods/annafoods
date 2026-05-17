import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'traject',
  title: 'Trajecten',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Titel', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (bijv. "3 maanden")', type: 'string' }),
    defineField({ name: 'prijs', title: 'Prijs (bijv. "€ 300,- excl. BTW")', type: 'string' }),
    defineField({ name: 'consults', title: 'Aantal consults', type: 'string' }),
    defineField({ name: 'beschrijving', title: 'Korte beschrijving', type: 'text' }),
    defineField({
      name: 'inclusief',
      title: 'Inclusief',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'specs',
      title: 'Consult tijden',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'waarde', title: 'Waarde', type: 'string' },
        ],
      }],
    }),
    defineField({ name: 'meestGekozen', title: 'Meest gekozen', type: 'boolean' }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number' }),
  ],
  preview: { select: { title: 'titel', subtitle: 'prijs' } },
})
