import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'voorWie',
  title: 'Voor wie pagina',
  type: 'document',
  fields: [
    defineField({ name: 'klachtenTitel', title: 'Klachten — Titel', type: 'string' }),
    defineField({ name: 'klachten', title: 'Lichamelijke klachten', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'klachtenTekst', title: 'Klachten — Tekst onder lijst', type: 'text' }),
    defineField({ name: 'resultatenTitel', title: 'Resultaten — Titel', type: 'string' }),
    defineField({ name: 'resultaten', title: 'Resultaten', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'aanpakTekst', title: 'Mijn aanpak — Tekst', type: 'text' }),
    defineField({ name: 'missieTekst', title: 'Mijn missie — Tekst', type: 'text' }),
    defineField({ name: 'beloftes', title: 'Mijn belofte — Punten', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { prepare: () => ({ title: 'Voor wie' }) },
})
