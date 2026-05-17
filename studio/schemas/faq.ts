import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ — Veelgestelde vragen',
  type: 'document',
  fields: [
    defineField({ name: 'vraag', title: 'Vraag', type: 'string' }),
    defineField({ name: 'antwoord', title: 'Antwoord', type: 'text' }),
    defineField({ name: 'volgorde', title: 'Volgorde', type: 'number' }),
  ],
  preview: { select: { title: 'vraag' } },
})
