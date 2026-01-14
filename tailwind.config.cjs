/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium dark palette - warm & sophisticated
        void: {
          DEFAULT: '#0c0c0e',
          50: '#141416',
          100: '#111113',
          200: '#0e0e10',
          300: '#0c0c0e',
        },
        carbon: {
          DEFAULT: '#1c1c1f',
          light: '#2d2d32',
          dark: '#131315',
          muted: '#242428',
        },
        // Warmer grays
        stone: {
          DEFAULT: '#78716c',
          light: '#a8a29e',
          dark: '#57534e',
          muted: '#44403c',
        },
        // Premium accent colors - warm metallics
        gold: {
          DEFAULT: '#d4a574',
          light: '#e5c9a8',
          dark: '#b08856',
          glow: 'rgba(212, 165, 116, 0.15)',
        },
        copper: {
          DEFAULT: '#c9a07a',
          light: '#dfc4a8',
          dark: '#a67c50',
        },
        emerald: {
          DEFAULT: '#5eead4',
          light: '#99f6e4',
          dark: '#2dd4bf',
          glow: 'rgba(94, 234, 212, 0.15)',
        },
        // Keep a modern accent for CTAs
        accent: {
          DEFAULT: '#f0abfc', // Soft violet
          light: '#f5d0fe',
          dark: '#e879f9',
          alt: '#c4b5fd', // Lavender
        },
        // Text colors
        cream: '#faf8f5',
        warm: '#e7e5e4',
        muted: '#a3a3a3',
        // Signal colors (softer)
        signal: {
          success: '#86efac',
          warning: '#fcd34d',
          error: '#fca5a5',
        },
      },
      fontFamily: {
        // More elegant fonts
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'hero-sub': ['1.35rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'section': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'subtle-grid': `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '80px 80px',
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
        'soft': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'glow-gold': '0 0 40px rgba(212, 165, 116, 0.2)',
        'glow-emerald': '0 0 40px rgba(94, 234, 212, 0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'card': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.2)',
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
