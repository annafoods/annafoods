import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { naam, email, telefoon, traject, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'website@annafoods.nl',
      to: 'annick@annasfoodlab.com',
      replyTo: email,
      subject: `Nieuw bericht van ${naam}`,
      text: `Naam: ${naam}
E-mail: ${email}
Telefoon: ${telefoon || '-'}
Traject: ${traject || '-'}

${bericht}`,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
