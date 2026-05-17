'use client'

import { useState } from 'react'

type Testimonial = { _id?: string; naam: string; quote: string }

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [current, setCurrent] = useState(0)
  const total = items.length
  const visible = 3
  const max = Math.max(0, total - visible)

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(max, c + 1))

  return (
    <div className="relative">
      {/* Kaarten */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current * (100 / visible)}% - ${current * (24 / visible)}px))` }}
        >
          {items.map((e, i) => (
            <div
              key={e._id ?? i}
              className="bg-white/40 rounded-2xl p-8 border border-beige-dark flex flex-col flex-shrink-0"
              style={{ width: `calc(${100 / visible}% - ${(24 * (visible - 1)) / visible}px)` }}
            >
              <p className="font-body text-text-medium leading-relaxed mb-6 flex-grow">
                &ldquo;{e.quote}&rdquo;
              </p>
              <p className="font-body font-semibold text-text-dark text-sm">– {e.naam}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigatie */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Vorige"
          className="w-10 h-10 rounded-full border border-beige-dark flex items-center justify-center text-text-medium hover:border-terracotta hover:text-terracotta transition-colors disabled:opacity-30"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ga naar ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-terracotta' : 'bg-beige-dark'}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current >= max}
          aria-label="Volgende"
          className="w-10 h-10 rounded-full border border-beige-dark flex items-center justify-center text-text-medium hover:border-terracotta hover:text-terracotta transition-colors disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  )
}
