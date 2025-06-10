
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '2.5rem',
				xl: '3rem',
				'2xl': '4rem'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			// Mobile-specific breakpoints
			'mobile-sm': {'max': '374px'},
			'mobile': {'max': '639px'},
			'tablet': {'min': '640px', 'max': '1023px'},
			'desktop': {'min': '1024px'},
			// Touch device detection
			'touch': {'raw': '(hover: none) and (pointer: coarse)'},
			'no-touch': {'raw': '(hover: hover) and (pointer: fine)'}
		},
		extend: {
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
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				// Mobile-optimized sizes
				'mobile-xs': ['0.7rem', { lineHeight: '1rem' }],
				'mobile-sm': ['0.8rem', { lineHeight: '1.2rem' }],
				'mobile-base': ['0.9rem', { lineHeight: '1.4rem' }],
				'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
				'mobile-xl': ['1.1rem', { lineHeight: '1.6rem' }],
				'mobile-2xl': ['1.3rem', { lineHeight: '1.8rem' }],
				'mobile-3xl': ['1.6rem', { lineHeight: '2rem' }],
				'mobile-4xl': ['2rem', { lineHeight: '2.2rem' }],
				'mobile-5xl': ['2.5rem', { lineHeight: '2.7rem' }],
			},
			spacing: {
				'safe-top': 'env(safe-area-inset-top)',
				'safe-bottom': 'env(safe-area-inset-bottom)',
				'safe-left': 'env(safe-area-inset-left)',
				'safe-right': 'env(safe-area-inset-right)',
				// Touch-friendly spacing
				'touch-sm': '0.75rem',
				'touch-md': '1rem',
				'touch-lg': '1.25rem',
				'touch-xl': '1.5rem',
				// Mobile-specific spacing
				'mobile-xs': '0.25rem',
				'mobile-sm': '0.5rem',
				'mobile-md': '0.75rem',
				'mobile-lg': '1rem',
				'mobile-xl': '1.5rem',
				'mobile-2xl': '2rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				medical: {
					light: '#E0F2F7',
					DEFAULT: '#1E88E5',
					dark: '#0D47A1'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'wave': {
					'0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
					'50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.8)' },
					'100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' }
				},
				'button-glow': {
					'0%': { boxShadow: '0 0 5px rgba(30, 136, 229, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(30, 136, 229, 0.8)' },
					'100%': { boxShadow: '0 0 5px rgba(30, 136, 229, 0.5)' }
				},
				// Mobile-optimized animations
				'mobile-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'mobile-slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'mobile-slide-down': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'mobile-scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'touch-feedback': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'swipe-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'swipe-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-right': 'fade-in-right 0.6s ease-out',
				'fade-in-left': 'fade-in-left 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-down': 'slide-down 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'wave': 'wave 12s -2s linear infinite',
				'button-glow': 'button-glow 3s ease-in-out infinite',
				// Mobile-optimized animations
				'mobile-fade-in': 'mobile-fade-in 0.4s ease-out',
				'mobile-slide-up': 'mobile-slide-up 0.3s ease-out',
				'mobile-slide-down': 'mobile-slide-down 0.3s ease-out',
				'mobile-scale-in': 'mobile-scale-in 0.2s ease-out',
				'touch-feedback': 'touch-feedback 0.1s ease-out',
				'swipe-left': 'swipe-left 0.3s ease-out',
				'swipe-right': 'swipe-right 0.3s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
