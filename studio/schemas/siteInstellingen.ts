import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteInstellingen',
  title: 'Site-instellingen',
  type: 'document',
  fields: [
    defineField({ name: 'telefoon', title: 'Telefoonnummer', type: 'string' }),
    defineField({ name: 'email', title: 'E-mailadres', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'footerCtaTitel', title: 'Footer CTA — Titel', type: 'string' }),
    defineField({ name: 'footerCtaTekst', title: 'Footer CTA — Tekst kennismaking', type: 'text' }),
    defineField({ name: 'footerCtaTekstDownload', title: 'Footer CTA — Tekst mini plan', type: 'text' }),
  ],
  preview: { prepare: () => ({ title: 'Site-instellingen' }) },
})
