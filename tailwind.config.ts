import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f2e9e0',
        'beige-dark': '#e4d8cd',
        'beige-deeper': '#d9cab8',
        'brown-gold': '#8B6334',
        'brown-light': '#A07845',
        terracotta: '#A05432',
        'terracotta-dark': '#844428',
        'blue-accent': '#2E5FA3',
        'blue-light': '#3B70B8',
        'text-dark': '#2d1f0f',
        'text-medium': '#5c4030',
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
