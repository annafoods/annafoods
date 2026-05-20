import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { naam, email, telefoon, traject, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

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
      subject: 'Bedankt voor je bericht!',
      text: `Hoi ${naam},\n\nBedankt voor je bericht! Ik heb het goed ontvangen en neem zo snel mogelijk contact met je op, uiterlijk binnen 24 uur.\n\nTot snel!\n\nAnnick\nAnna Foods\nwww.annafoods.nl`,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
