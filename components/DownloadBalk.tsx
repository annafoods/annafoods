'use client'

import { useState, useEffect } from 'react'

export default function DownloadBalk() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Niet tonen als al eerder weggedrukt in deze sessie
    if (sessionStorage.getItem('miniplan-dismissed')) return
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setDismissed(true)
    sessionStorage.setItem('miniplan-dismissed', '1')
  }

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2d1f0f] border-t-2 border-terracotta shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <p className="font-body text-white/80 text-sm">
          <span className="text-[#e8d5b7] font-semibold">Gratis mini plan</span>
          {' '}—{' '}
          <span className="hidden sm:inline">Ontdek de do&apos;s en don&apos;ts voor een gezonde leefstijl.</span>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/downloads/mini-plan.pdf"
            className="bg-terracotta hover:bg-terracotta-dark text-white text-sm font-body font-medium px-5 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            Download gratis →
          </a>
          <button
            onClick={dismiss}
            aria-label="Sluiten"
            className="text-white/50 hover:text-white transition-colors p-1"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
