/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#F7F8FA',
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#DDE3EC',
          dark: '#EEF2F7',
          muted: '#F0F3F8',
        },
        ink: '#152238',
        'body-copy': '#334155',
        muted: {
          DEFAULT: '#566278',
          light: '#566278',
          dark: '#41506A',
          muted: '#64748B',
        },
        brand: {
          DEFAULT: '#2457E6',
          light: '#1E49C7',
          dark: '#173EAB',
          soft: '#EEF3FF',
        },
        'base-100': '#F7F8FA',
        'base-200': '#FFFFFF',
        'base-300': '#EEF3FF',
        'base-content': '#152238',
        signal: {
          success: '#16805D',
          warning: '#946200',
          error: '#C5333D',
        },
      },
      fontFamily: {
        display: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'hero-sub': ['1.35rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'section': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        soft: '0 4px 16px rgba(21, 34, 56, 0.06)',
        card: '0 12px 36px rgba(21, 34, 56, 0.09)',
        'card-hover': '0 8px 24px rgba(21, 34, 56, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
