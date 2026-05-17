import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ervaring',
  title: 'Ervaringen (testimonials)',
  type: 'document',
  fields: [
    defineField({ name: 'naam', title: 'Naam', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number' }),
  ],
  preview: { select: { title: 'naam', subtitle: 'quote' } },
})
