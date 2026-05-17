import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPagina',
  title: 'Contact pagina',
  type: 'document',
  fields: [
    defineField({ name: 'titel', title: 'Grote titel', type: 'string' }),
    defineField({ name: 'subtitel', title: 'Subtitel onder de titel', type: 'string' }),
    defineField({ name: 'linkseTitel', title: 'Linkse kolom — Titel', type: 'string' }),
    defineField({ name: 'linkseTekst', title: 'Linkse kolom — Tekst', type: 'text' }),
    defineField({ name: 'telefoon', title: 'Telefoonnummer', type: 'string' }),
    defineField({ name: 'email', title: 'E-mailadres', type: 'string' }),
    defineField({ name: 'locatie', title: 'Locatie (bijv. Amsterdam)', type: 'string' }),
    defineField({ name: 'locatieSub', title: 'Locatie — ondertekst', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Contact pagina' }) },
})
