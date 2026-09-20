/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Deliberately tight radius scale: this is an engineering brand, not a consumer app.
    borderRadius: {
      none: '0px',
      DEFAULT: '2px',
      sm: '2px',
      md: '3px',
      lg: '4px',
      xl: '6px',
      full: '9999px',
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F2A',
          deep: '#07151D',
          800: '#102A38',
          700: '#183849',
          600: '#22495D',
          line: '#1E3B4B',
        },
        cream: {
          DEFAULT: '#F7F5EF',
          50: '#FBFAF6',
          100: '#F2EFE6',
          200: '#E7E2D5',
          300: '#D8D1C1',
        },
        moss: {
          DEFAULT: '#3F8F5B',
          dark: '#2E7345',
          mid: '#529F6E',
          bright: '#65BA84',
          pale: '#DDEEDC',
        },
        bronze: {
          DEFAULT: '#A87545',
          light: '#C79A6B',
          dark: '#835A33',
        },
        ink: {
          DEFAULT: '#172126',
          soft: '#47565E',
          muted: '#6E7E87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Mobile-first display scale — readable at 320px, commanding at 1440px.
        eyebrow: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.16em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        'display-lg': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.02', letterSpacing: '-0.028em' }],
      },
      maxWidth: {
        shell: '82rem',
        prose: '38rem',
      },
      boxShadow: {
        hair: '0 1px 0 0 rgba(11,31,42,0.06)',
        raise: '0 12px 28px -18px rgba(11,31,42,0.45)',
        panel: '0 24px 48px -32px rgba(11,31,42,0.55)',
      },
      transitionTimingFunction: {
        engineered: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sheet-in': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.55s cubic-bezier(0.22, 0.61, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease both',
        'sheet-in': 'sheet-in 0.22s cubic-bezier(0.22, 0.61, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
