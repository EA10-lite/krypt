import type { Config } from 'tailwindcss'

/**
 * Tailwind CSS Configuration
 * 
 * This configuration file customizes Tailwind CSS for the Krypt application.
 * It includes custom colors, breakpoints, animations, and other design tokens
 * that align with the project's design system.
 */
const config: Config = {
  // Content paths - tells Tailwind where to look for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // Custom color palette for the application
      colors: {
        // Primary brand colors
        primary: {
          DEFAULT: '#2952e3',
          hover: '#2546bd',
          light: '#3d6ef5',
          dark: '#1e3fa8',
        },
        // Background colors
        background: {
          DEFAULT: '#0f0e13',
          light: '#1a1820',
          dark: '#0a0910',
        },
        // Glassmorphism colors
        glass: {
          blue: 'rgba(39, 51, 89, 0.4)',
          white: 'rgba(255, 255, 255, 0.05)',
        },
      },
      
      // Custom breakpoints (extending default Tailwind breakpoints)
      screens: {
        'xs': '475px',
        // Default Tailwind breakpoints:
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
      
      // Custom font families
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      
      // Custom font sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      
      // Custom spacing values
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
      
      // Custom box shadows
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.2)',
        'glass-lg': '0 8px 40px rgba(0, 0, 0, 0.3)',
      },
      
      // Custom animations
      animation: {
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      
      // Custom keyframes
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      
      // Custom backdrop blur
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  
  plugins: [],
}

export default config

