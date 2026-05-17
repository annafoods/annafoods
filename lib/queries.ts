export const homepageQuery = `*[_type == "homepage"][0]`
export const overMijQuery = `*[_type == "overMij"][0]`
export const voorWieQuery = `*[_type == "voorWie"][0]`
export const trajectenPaginaQuery = `*[_type == "trajectenPagina"][0]`
export const siteInstellingenQuery = `*[_type == "siteInstellingen"][0]`

export const ervaringenQuery = `
  *[_type == "ervaring"] | order(volgorde asc) {
    _id,
    naam,
    quote
  }
`

export const trajectenQuery = `
  *[_type == "traject"] | order(volgorde asc) {
    _id,
    titel,
    tagline,
    prijs,
    consults,
    beschrijving,
    inclusief,
    specs,
    meestGekozen,
    volgorde
  }
`

export const artikelenQuery = `
  *[_type == "artikel"] | order(datum desc) {
    _id,
    titel,
    "slug": slug.current,
    categorie,
    uitgelicht,
    samenvatting,
    leestijd,
    datum,
    afbeelding
  }
`
