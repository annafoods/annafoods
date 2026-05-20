import ervaring from './ervaring'
import traject from './traject'
import artikel from './artikel'
import faq from './faq'
import homepage from './homepage'
import overMij from './overMij'
import voorWie from './voorWie'
import trajectenPagina from './trajectenPagina'
import contactPagina from './contactPagina'
import siteInstellingen from './siteInstellingen'
import mailTemplates from './mailTemplates'
import privacyPagina from './privacyPagina'

export const schemaTypes = [
  // Pagina's
  homepage,
  overMij,
  voorWie,
  trajectenPagina,
  contactPagina,
  // Herbruikbare content
  traject,
  ervaring,
  faq,
  artikel,
  // Instellingen
  siteInstellingen,
  mailTemplates,
  privacyPagina,
]
