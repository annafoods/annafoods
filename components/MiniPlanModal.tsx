'use client'

import { useState, FormEvent } from 'react'

export default function MiniPlanModal() {
  const [open, setOpen] = useState(false)
  const [naam, setNaam] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/miniplan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Trigger knop */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-body font-medium border-2 border-terracotta text-terracotta hover:bg-terracotta/10 transition-all duration-200"
      >
        <span>Download gratis mini plan</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="bg-beige rounded-2xl p-8 w-full max-w-md shadow-xl relative">

            {/* Sluit knop */}
            <button
              onClick={() => { setOpen(false); setStatus('idle') }}
              className="absolute top-4 right-4 text-text-medium/50 hover:text-text-dark transition-colors"
              aria-label="Sluiten"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {status === 'success' ? (
              <div className="text-center py-4">
                <p className="font-heading text-2xl text-brown-gold mb-3">Check je inbox!</p>
                <p className="font-body text-text-medium text-sm">
                  Het mini plan is onderweg naar <strong>{email}</strong>. Soms komt het in de spam terecht — even checken!
                </p>
                <button
                  onClick={() => { setOpen(false); setStatus('idle') }}
                  className="btn-terracotta mt-6 inline-block"
                >
                  Sluiten
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-3xl text-brown-gold mb-2">
                  Waar sturen we het naartoe?
                </h2>
                <p className="font-body text-text-medium text-sm mb-6">
                  Vul je naam en e-mailadres in en ontvang het mini plan direct in je inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="mp-naam" className="block font-body text-sm text-text-dark mb-1">
                      Voornaam <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="mp-naam"
                      type="text"
                      required
                      value={naam}
                      onChange={e => setNaam(e.target.value)}
                      placeholder="Jouw voornaam"
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-white/60 font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="mp-email" className="block font-body text-sm text-text-dark mb-1">
                      E-mailadres <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="mp-email"
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jouw@email.nl"
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-white/60 font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="font-body text-xs text-red-600">Er ging iets mis. Probeer opnieuw.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-terracotta w-full disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Versturen...' : 'Stuur mij het mini plan →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
