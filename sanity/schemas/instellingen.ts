import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'instellingen',
  title: 'Site-instellingen',
  type: 'document',
  fields: [
    defineField({ name: 'telefoon', title: 'Telefoonnummer', type: 'string' }),
    defineField({ name: 'email', title: 'E-mailadres', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ],
})
