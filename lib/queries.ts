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
