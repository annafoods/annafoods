import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'overMij',
  title: 'Over mij pagina',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitel', title: 'Hero — Titel', type: 'string' }),
    defineField({ name: 'heroAlinea1', title: 'Mijn reis — Alinea 1', type: 'text' }),
    defineField({ name: 'heroAlinea2', title: 'Mijn reis — Alinea 2', type: 'text' }),
    defineField({ name: 'heroAlinea3', title: 'Mijn reis — Alinea 3', type: 'text' }),
    defineField({ name: 'achtergrondAlinea1', title: 'Mijn achtergrond — Alinea 1 (altijd zichtbaar)', type: 'text' }),
    defineField({ name: 'achtergrondAlinea2', title: 'Mijn achtergrond — Alinea 2 (altijd zichtbaar)', type: 'text' }),
    defineField({ name: 'achtergrondAlinea3', title: 'Mijn achtergrond — Uitklapbaar alinea 1', type: 'text' }),
    defineField({ name: 'achtergrondAlinea4', title: 'Mijn achtergrond — Uitklapbaar alinea 2', type: 'text' }),
    defineField({ name: 'achtergrondAlinea5', title: 'Mijn achtergrond — Uitklapbaar alinea 3', type: 'text' }),
    defineField({ name: 'achtergrondAlinea6', title: 'Mijn achtergrond — Uitklapbaar alinea 4', type: 'text' }),
    defineField({ name: 'kwaliteitTekst', title: 'Kwaliteit staat centraal — Tekst', type: 'text' }),
    defineField({ name: 'kwaliteitTekst2', title: 'Kwaliteit staat centraal — Alinea 2', type: 'text' }),
    defineField({ name: 'kwaliteitTekst3', title: 'Kwaliteit staat centraal — Alinea 3', type: 'text' }),
    defineField({
      name: 'registraties',
      title: 'Registraties',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'beroepsverenigingen',
      title: 'Beroepsverenigingen',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'meerTekst1', title: 'Meer over mij — Alinea 1', type: 'text' }),
    defineField({ name: 'meerTekst2', title: 'Meer over mij — Alinea 2', type: 'text' }),
    defineField({ name: 'meerTekst3', title: 'Meer over mij — Alinea 3', type: 'text' }),
    defineField({
      name: 'opleidingen',
      title: 'Opleidingen (tijdlijn)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'jaar', title: 'Jaar', type: 'string' },
          { name: 'titel', title: 'Titel', type: 'string' },
          { name: 'organisatie', title: 'Organisatie', type: 'string' },
          { name: 'detail', title: 'Extra info (optioneel)', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'ervaringen',
      title: 'Ervaringen (tijdlijn)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'jaar', title: 'Jaar', type: 'string' },
          { name: 'titel', title: 'Titel', type: 'string' },
          { name: 'organisatie', title: 'Organisatie', type: 'string' },
          { name: 'detail', title: 'Extra info (optioneel)', type: 'string' },
        ],
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Over mij' }) },
})
