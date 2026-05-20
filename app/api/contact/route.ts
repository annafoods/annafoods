import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { rateLimit } from '@/lib/rateLimit'

const sanity = createClient({
  projectId: 'ui0ua8r1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    const { ok } = rateLimit(ip)
    if (!ok) {
      return NextResponse.json({ error: 'Te veel verzoeken. Probeer het later opnieuw.' }, { status: 429 })
    }

    const body = await req.json()
    const { naam, email, telefoon, traject, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Haal auto-reply tekst op uit Sanity
    const templates = await sanity.fetch(`*[_type == "mailTemplates"][0]{ contactOnderwerp, contactTekst }`).catch(() => null)

    const onderwerp = templates?.contactOnderwerp ?? 'Bedankt voor je bericht!'
    const tekst = (templates?.contactTekst ?? 'Hoi {naam},\n\nBedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.\n\nTot snel!\nAnnick').replace('{naam}', naam)

    // E-mail naar Annick
    await resend.emails.send({
      from: 'website@annafoods.nl',
      to: 'info@annafoods.nl',
      replyTo: email,
      subject: `Nieuw bericht van ${naam}`,
      text: `Naam: ${naam}\nE-mail: ${email}\nTelefoon: ${telefoon || '-'}\nTraject: ${traject || '-'}\n\n${bericht}`,
    })

    // Automatische bevestiging naar bezoeker
    await resend.emails.send({
      from: 'Annick van Anna Foods <info@annafoods.nl>',
      to: email,
      subject: onderwerp,
      text: tekst,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
