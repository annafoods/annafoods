import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const sanity = createClient({
  projectId: 'ui0ua8r1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: 'E-mail ontbreekt' }, { status: 400 })

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Haal template op uit Sanity
    const t = await sanity.fetch(`*[_type == "mailTemplates"][0]{ miniplanOnderwerp, miniplanTekst, miniplanBestand }`).catch(() => null)

    const onderwerp = t?.miniplanOnderwerp ?? 'Jouw gratis mini plan van Anna Foods'
    const tekst = t?.miniplanTekst ?? 'Hoi!\n\nHier is je gratis mini plan.\n\nGroeten,\nAnnick\nAnna Foods'

    await resend.emails.send({
      from: 'Annick van Anna Foods <info@annafoods.nl>',
      to: email,
      subject: onderwerp,
      text: tekst + '\n\nDownload je mini plan hier: https://www.annafoods.nl/downloads/mini-plan.pdf',
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mini plan error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
