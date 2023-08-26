/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'var(--font-fredoka)',
      },
      fontSize: {
        '1.5xl': '1.375rem',
        'responsive-title': 'clamp(3.75rem, 5vw, 5rem)',
      },
      colors: {
        current: 'currentColor',
        darkblue: '#2C3144',
        cyan: '#3BDCE3',
        darkyellow: '#F5B600',
        yellow: '#FFD03F',
        gray: '#D7D7D8',
        lightgray: '#767676',
        darkGray: '#9da4b0',
        darkDarkGray: '#6B6B6B',
        white: '#FFFFFF',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
