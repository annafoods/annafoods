import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'privacyPagina',
  title: 'Privacyverklaring',
  type: 'document',
  fields: [
    defineField({ name: 'bedrijfsnaam', title: 'Bedrijfsnaam', type: 'string' }),
    defineField({ name: 'kvk', title: 'KVK-nummer', type: 'string' }),
    defineField({ name: 'adres', title: 'Adres (optioneel)', type: 'string' }),
    defineField({ name: 'email', title: 'Contacte-mail', type: 'string' }),
    defineField({
      name: 'inhoud',
      title: 'Volledige tekst privacyverklaring',
      description: 'Hier kun je de volledige privacyverklaring aanpassen. Laat dit controleren door een jurist.',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Privacyverklaring' }) },
})
