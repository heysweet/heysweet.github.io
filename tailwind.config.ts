import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#dcf29d',
        black: '#1b1233',
      },
    },
    keyframes: {
      flicker : {
        '0%, 45%, 90%': { opacity: '0.6' },
        '5%, 20%, 30%, 50%, 75%, 95%': { opacity: '0.5' },
        '10%, 25%, 55%, 65%, 85%': { opacity: '0.525' },
        '15%, 35%, 60%, 70%, 100%': { opacity: '0.45' },
        '40%, 80%': { opacity: '0.5' },
      },
      slowFlicker: {
        '10%, 10.225%, 10.45%': { opacity: '1.0' },
        '10.025%, 10.15%, 10.375%': { opacity: '0.9' },
        '10.05%, 10.257%, 10.325%': { opacity: '0.85' },
        '10.075%, 10.2%, 10.35%': { opacity: '0.875' },
        '10.1%, 10.025%': { opacity: '0.95' },
        '10.175%, 10.3%, 10.5%': { opacity: '0.95' },
        '10.51%': { opacity: '1.0' },
      },
      chromaticAberrationHover: {
        '0%': {
          'textShadow': '0.44px 0 1px rgba(0,30,255,0.35), -0.43px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '5%': {
          'textShadow': '2.8px 0 1px rgba(0,30,255,0.35), -2.79px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '10%': {
          'textShadow': '0.03px 0 1px rgba(0,30,255,0.35), -0.029px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '15%': {
          'textShadow': '0.40px 0 1px rgba(0,30,255,0.35), -0.402px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '20%': {
          'textShadow': '3.48px 0 1px rgba(0,30,255,0.35), -3.48px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '25%': {
          'textShadow': '1.61px 0 1px rgba(0,30,255,0.35), -1.61px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '30%': {
          'textShadow': '0.70px 0 1px rgba(0,30,255,0.35), -0.70px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '35%': {
          'textShadow': '3.9px 0 1px rgba(0,30,255,0.35), -3.89px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '40%': {
          'textShadow': '3.87px 0 1px rgba(0,30,255,0.35), -3.87px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '45%': {
          'textShadow': '2.23px 0 1px rgba(0,30,255,0.35), -2.23px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '50%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.35), -0.08px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '55%': {
          'textShadow': '2.37px 0 1px rgba(0,30,255,0.35), -2.37px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '60%': {
          'textShadow': '2.20px 0 1px rgba(0,30,255,0.35), -2.20px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '65%': {
          'textShadow': '2.86px 0 1px rgba(0,30,255,0.35), -2.86px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '70%': {
          'textShadow': '0.49px 0 1px rgba(0,30,255,0.35), -0.48px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '75%': {
          'textShadow': '1.89px 0 1px rgba(0,30,255,0.35), -1.89px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '80%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.35), -0.08px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '85%': {
          'textShadow': '0.1px 0 1px rgba(0,30,255,0.35), -0.097px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '90%': {
          'textShadow': '3.44px 0 1px rgba(0,30,255,0.35), -3.44px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '95%': {
          'textShadow': '2.18px 0 1px rgba(0,30,255,0.35), -2.18px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
        '100%': {
          'textShadow': '2.62px 0 1px rgba(0,30,255,0.35), -2.621px 0 1px rgba(255,0,80,0.2), 0 0 3px;'
        },
      },
      chromaticAberration: {
        '0%': {
          'textShadow': '0.44px 0 1px rgba(0,30,255,0.13), -0.43px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '5%': {
          'textShadow': '2.8px 0 1px rgba(0,30,255,0.13), -2.79px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '10%': {
          'textShadow': '0.03px 0 1px rgba(0,30,255,0.13), -0.029px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '15%': {
          'textShadow': '0.40px 0 1px rgba(0,30,255,0.13), -0.402px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '20%': {
          'textShadow': '3.48px 0 1px rgba(0,30,255,0.13), -3.48px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '25%': {
          'textShadow': '1.61px 0 1px rgba(0,30,255,0.13), -1.61px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '30%': {
          'textShadow': '0.70px 0 1px rgba(0,30,255,0.13), -0.70px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '35%': {
          'textShadow': '3.9px 0 1px rgba(0,30,255,0.13), -3.89px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '40%': {
          'textShadow': '3.87px 0 1px rgba(0,30,255,0.13), -3.87px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '45%': {
          'textShadow': '2.23px 0 1px rgba(0,30,255,0.13), -2.23px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '50%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.13), -0.08px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '55%': {
          'textShadow': '2.37px 0 1px rgba(0,30,255,0.13), -2.37px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '60%': {
          'textShadow': '2.20px 0 1px rgba(0,30,255,0.13), -2.20px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '65%': {
          'textShadow': '2.86px 0 1px rgba(0,30,255,0.13), -2.86px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '70%': {
          'textShadow': '0.49px 0 1px rgba(0,30,255,0.13), -0.48px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '75%': {
          'textShadow': '1.89px 0 1px rgba(0,30,255,0.13), -1.89px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '80%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.13), -0.08px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '85%': {
          'textShadow': '0.1px 0 1px rgba(0,30,255,0.13), -0.097px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '90%': {
          'textShadow': '3.44px 0 1px rgba(0,30,255,0.13), -3.44px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '95%': {
          'textShadow': '2.18px 0 1px rgba(0,30,255,0.13), -2.18px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
        '100%': {
          'textShadow': '2.62px 0 1px rgba(0,30,255,0.13), -2.621px 0 1px rgba(255,0,80,0.06), 0 0 3px;'
        },
      },
      fadeIn: {
        '0%': {
          'opacity': '0.0',
        },
        '100%': {
          'opacity': '1.0',
        },
      },
      imageLoad: {
        '0%': {
          'clip-path': 'inset(0 0 88% 0);',
        },
        '12%': {
          'clip-path': 'inset(0 0 88% 0);',
        },
        '13%': {
          'clip-path': 'inset(0 0 73% 0);',
        },
        '27%': {
          'clip-path': 'inset(0 0 73% 0);',
        },
        '28%': {
          'clip-path': 'inset(0 0 58% 0);',
        },
        '42%': {
          'clip-path': 'inset(0 0 58% 0);',
        },
        '43%': {
          'clip-path': 'inset(0 0 32% 0);',
        },
        '68%': {
          'clip-path': 'inset(0 0 32% 0);',
        },
        '69%': {
          'clip-path': 'inset(0 0 15% 0);',
        },
        '99%': {
          'clip-path': 'inset(0 0 15% 0);',
        },
        '100%': {
          'clip-path': 'inset(0 0 0% 0);',
        },
      },
    },
    animation: {
      'fade-in': 'fadeIn 3s forwards',
      'flicker': 'flicker 0.25s infinite',
      'slow-flicker': 'slowFlicker 10s infinite',
      'chroma': 'chromaticAberration 3.5s infinite',
      'chroma-lg': 'chromaticAberrationHover 3.5s infinite',
      'img-load': 'imageLoad 0.24s linear forwards',
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;