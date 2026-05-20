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

    const { naam, email, telefoon } = await req.json()
    if (!email) return NextResponse.json({ error: 'E-mail ontbreekt' }, { status: 400 })

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const t = await sanity.fetch(`*[_type == "mailTemplates"][0]{ miniplanOnderwerp, miniplanTekst }`).catch(() => null)

    const onderwerp = t?.miniplanOnderwerp ?? 'Jouw gratis mini plan van Anna Foods'
    const tekst = (t?.miniplanTekst ?? 'Hoi {naam},\n\nHier is je gratis mini plan!\n\nGroeten,\nAnnick')
      .replace('{naam}', naam ?? 'daar')

    // Mini plan naar bezoeker
    await resend.emails.send({
      from: 'Annick van Anna Foods <info@annafoods.nl>',
      to: email,
      subject: onderwerp,
      text: tekst + '\n\nDownload je mini plan hier:\nhttps://www.annafoods.nl/downloads/mini-plan.pdf',
    })

    // Notificatie naar Annick
    await resend.emails.send({
      from: 'website@annafoods.nl',
      to: 'info@annafoods.nl',
      subject: `Nieuw mini plan aanvraag van ${naam ?? email}`,
      text: `Naam: ${naam ?? '-'}\nE-mail: ${email}\nTelefoon: ${telefoon || '-'}\n\nDeze persoon heeft het mini plan aangevraagd.`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mini plan error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
