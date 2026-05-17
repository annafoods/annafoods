import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trajectenPagina',
  title: 'Trajecten pagina',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitel', title: 'Hero — Titel', type: 'string' }),
    defineField({ name: 'heroTekst1', title: 'Hero — Alinea 1', type: 'text' }),
    defineField({ name: 'heroTekst2', title: 'Hero — Alinea 2', type: 'text' }),
    defineField({ name: 'heroTekst3', title: 'Hero — Alinea 3', type: 'text' }),
    defineField({ name: 'visieTekst', title: 'Mijn visie — Tekst', type: 'text' }),
    defineField({ name: 'ontdektItems', title: 'Je ontdekt...', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'ervaartItems', title: 'Je ervaart...', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'losConsultTekst', title: 'Losse consulten — Tekst', type: 'text' }),
    defineField({ name: 'losConsultPrijs', title: 'Losse consulten — Prijs (bijv. €60)', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'Trajecten pagina' }) },
})
