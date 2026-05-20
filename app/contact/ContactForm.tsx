'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    traject: '',
    bericht: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ naam: '', email: '', telefoon: '', traject: '', bericht: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/40 rounded-2xl p-8 sm:p-10 border border-beige-dark space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="naam" className="block font-body text-sm text-text-dark mb-1">
            Naam <span className="text-terracotta">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            value={form.naam}
            onChange={handleChange}
            placeholder="Jouw naam"
            className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm text-text-dark mb-1">
            E-mailadres <span className="text-terracotta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jouw@email.nl"
            className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefoon" className="block font-body text-sm text-text-dark mb-1">
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            value={form.telefoon}
            onChange={handleChange}
            placeholder="+31 6 ..."
            className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
          />
        </div>
        <div>
          <label htmlFor="traject" className="block font-body text-sm text-text-dark mb-1">
            Interesse in
          </label>
          <select
            id="traject"
            name="traject"
            value={form.traject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige font-body text-sm text-text-dark focus:outline-none focus:border-terracotta transition-colors"
          >
            <option value="">Kies een traject...</option>
            <option value="starttraject">Starttraject</option>
            <option value="versterktraject">Versterktraject</option>
            <option value="transformatietraject">Transformatietraject</option>
            <option value="kennismaking">Gratis kennismaking</option>
            <option value="anders">Anders / vraag</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bericht" className="block font-body text-sm text-text-dark mb-1">
          Jouw bericht <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          value={form.bericht}
          onChange={handleChange}
          placeholder="Vertel me iets over je situatie en wat je wil bereiken..."
          className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors resize-none"
        />
      </div>

      <p className="font-body text-xs text-text-medium/60 leading-relaxed">
        Door dit formulier te versturen ga je akkoord met onze{' '}
        <a href="/privacy" className="underline hover:text-blue-accent transition-colors">privacyverklaring</a>.
        Jouw gegevens worden uitsluitend gebruikt om contact met je op te nemen.
      </p>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 font-body text-sm rounded-xl px-4 py-3">
          ✓ Bedankt! Ik neem zo snel mogelijk contact met je op.
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 font-body text-sm rounded-xl px-4 py-3">
          Er is iets misgegaan. Probeer het opnieuw of mail direct naar info@annafoods.nl.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-terracotta w-full disabled:opacity-60"
      >
        {status === 'sending' ? 'Verzenden...' : 'Verstuur bericht'}
      </button>
    </form>
  )
}
