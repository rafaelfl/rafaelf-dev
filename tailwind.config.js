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
        "responsive-title": 'clamp(5.5rem, 7vw, 7rem)',
      },
      colors: {
        current: 'currentColor',
        darkblue: '#2C3144',
        cyan: '#3BDCE3',
        darkyellow: '#F5B600',
        yellow: '#FFD03F',
        gray: '#D7D7D8',
        white: '#FFFFFF',
      },
    }
  },
  plugins: [],
}
