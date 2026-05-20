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

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Tijdelijk — wijzigen naar website@annafoods.nl zodra domein geverifieerd is
      to: 'info@annafoods.nl', // Resend free plan: alleen sturen naar account-email (info@annafoods.nl) vóór domeinverificatie
      replyTo: email,
      subject: `Nieuw bericht van ${naam}`,
      text: `Naam: ${naam}\nE-mail: ${email}\nTelefoon: ${telefoon || '-'}\nTraject: ${traject || '-'}\n\n${bericht}`,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
