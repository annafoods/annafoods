import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-beige-deeper py-16 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Cutlery icon */}
        <div className="flex justify-center mb-6">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line x1="18" y1="8" x2="18" y2="26" stroke="#2d1f0f" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="26" x2="18" y2="44" stroke="#2d1f0f" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 8 L14 20 Q14 26 18 26 Q22 26 22 20 L22 8" stroke="#2d1f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M34 8 Q40 14 38 22 Q36 28 34 28 L34 44" stroke="#2d1f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="15" y1="27" x2="37" y2="25" stroke="#2d1f0f" strokeWidth="1.5" strokeLinecap="round" transform="rotate(30, 26, 26)" />
          </svg>
        </div>

        <p className="font-body text-text-medium mb-6 text-sm">
          <a href="tel:+31618382828" className="hover:text-blue-accent transition-colors">
            +31 6 18 38 28 28
          </a>
          {' | '}
          <a
            href="mailto:annick@annasfoodlab.com"
            className="hover:text-blue-accent transition-colors"
          >
            annick@annasfoodlab.com
          </a>
        </p>

        <Link href="/contact" className="btn-terracotta mb-8 inline-block">
          Contact
        </Link>

        {/* Social icons */}
        <div className="flex justify-center gap-5 my-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dark hover:text-blue-accent transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dark hover:text-blue-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        <div className="border-t border-beige-dark pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <Link href="/" className="font-heading text-lg text-brown-gold">
            annasfoodlab.nl
          </Link>
          <p className="font-body text-xs text-text-medium">
            © {new Date().getFullYear()} Annick Rozendaal, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
