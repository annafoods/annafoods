import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { naam, email, telefoon, traject, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    // ── Email verzending ──────────────────────────────────────────────────
    // Optie 1: Resend (aanbevolen voor Vercel)
    //   npm install resend
    //   const { Resend } = await import('resend')
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'website@annasfoodlab.nl',
    //     to: 'annick@annasfoodlab.com',
    //     subject: `Nieuw contactformulier van ${naam}`,
    //     text: `Naam: ${naam}\nEmail: ${email}\nTelefoon: ${telefoon || '-'}\nTraject: ${traject || '-'}\n\n${bericht}`,
    //   })
    //
    // Optie 2: Nodemailer met SMTP
    // Optie 3: Formspree.io – vervang het formulier action met jouw Formspree URL
    // ─────────────────────────────────────────────────────────────────────

    console.log('Contact form submission:', { naam, email, telefoon, traject, bericht })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
