import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'annafoods',
  title: 'Anna Foods — Beheer',
  projectId: 'ui0ua8r1',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
