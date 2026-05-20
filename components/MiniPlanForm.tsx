'use client'

import { useState, FormEvent } from 'react'

export default function MiniPlanForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/miniplan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="font-body text-sm text-text-medium">
        ✓ Check je inbox — het mini plan is onderweg!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="jouw@emailadres.nl"
        className="flex-1 px-4 py-3 rounded-full border border-beige-dark bg-beige font-body text-sm text-text-dark placeholder:text-text-medium/50 focus:outline-none focus:border-terracotta transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium border-2 border-terracotta text-terracotta hover:bg-terracotta/10 transition-all duration-200 disabled:opacity-60 whitespace-nowrap shrink-0"
      >
        {status === 'loading' ? 'Versturen...' : (
          <>
            <span>Stuur mij het mini plan</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="font-body text-xs text-red-600 mt-1">Er ging iets mis. Probeer opnieuw.</p>
      )}
    </form>
  )
}
