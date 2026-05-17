import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artikel',
  title: 'Inspiratie artikelen',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Titel', type: 'string' }),
    defineField({ name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'titel' } }),
    defineField({
      name: 'categorie',
      title: 'Categorie',
      type: 'string',
      options: { list: ['Recepten', 'Tips', 'Artikelen', 'Supplementen'] },
    }),
    defineField({ name: 'uitgelicht', title: 'Uitgelicht artikel', type: 'boolean' }),
    defineField({ name: 'samenvatting', title: 'Samenvatting', type: 'text' }),
    defineField({ name: 'inhoud', title: 'Inhoud', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'afbeelding', title: 'Afbeelding', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'leestijd', title: 'Leestijd (bijv. "4 min")', type: 'string' }),
    defineField({ name: 'datum', title: 'Datum', type: 'date' }),
  ],
  preview: { select: { title: 'titel', subtitle: 'categorie', media: 'afbeelding' } },
})
