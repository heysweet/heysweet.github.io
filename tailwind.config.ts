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
      flicker: {
        '0%': { opacity: '0.9' },
        '5%': { opacity: '0.1' },
        '10%': { opacity: '0.6' },
        '15%': { opacity: '0.3' },
        '20%': { opacity: '0.2' },
        '25%': { opacity: '0.8' },
        '30%': { opacity: '0.1' },
        '35%': { opacity: '0.4' },
        '40%': { opacity: '0.3' },
        '45%': { opacity: '0.9' },
        '50%': { opacity: '0.2' },
        '55%': { opacity: '0.7' },
        '60%': { opacity: '0.4' },
        '65%': { opacity: '0.7' },
        '70%': { opacity: '0.3' },
        '75%': { opacity: '0.1' },
        '80%': { opacity: '0.5' },
        '85%': { opacity: '0.6' },
        '90%': { opacity: '0.9' },
        '95%': { opacity: '0.35' },
        '100%': { opacity: '0.4' },
      },
      chromaticAberrationHover: {
        '0%': {
          'textShadow': '0.44px 0 1px rgba(0,30,255,0.5), -0.43px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '5%': {
          'textShadow': '2.8px 0 1px rgba(0,30,255,0.5), -2.79px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '10%': {
          'textShadow': '0.03px 0 1px rgba(0,30,255,0.5), -0.029px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '15%': {
          'textShadow': '0.40px 0 1px rgba(0,30,255,0.5), -0.402px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '20%': {
          'textShadow': '3.48px 0 1px rgba(0,30,255,0.5), -3.48px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '25%': {
          'textShadow': '1.61px 0 1px rgba(0,30,255,0.5), -1.61px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '30%': {
          'textShadow': '0.70px 0 1px rgba(0,30,255,0.5), -0.70px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '35%': {
          'textShadow': '3.9px 0 1px rgba(0,30,255,0.5), -3.89px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '40%': {
          'textShadow': '3.87px 0 1px rgba(0,30,255,0.5), -3.87px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '45%': {
          'textShadow': '2.23px 0 1px rgba(0,30,255,0.5), -2.23px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '50%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '55%': {
          'textShadow': '2.37px 0 1px rgba(0,30,255,0.5), -2.37px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '60%': {
          'textShadow': '2.20px 0 1px rgba(0,30,255,0.5), -2.20px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '65%': {
          'textShadow': '2.86px 0 1px rgba(0,30,255,0.5), -2.86px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '70%': {
          'textShadow': '0.49px 0 1px rgba(0,30,255,0.5), -0.48px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '75%': {
          'textShadow': '1.89px 0 1px rgba(0,30,255,0.5), -1.89px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '80%': {
          'textShadow': '0.08px 0 1px rgba(0,30,255,0.5), -0.08px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '85%': {
          'textShadow': '0.1px 0 1px rgba(0,30,255,0.5), -0.097px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '90%': {
          'textShadow': '3.44px 0 1px rgba(0,30,255,0.5), -3.44px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '95%': {
          'textShadow': '2.18px 0 1px rgba(0,30,255,0.5), -2.18px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
        '100%': {
          'textShadow': '2.62px 0 1px rgba(0,30,255,0.5), -2.621px 0 1px rgba(255,0,80,0.3), 0 0 3px;'
        },
      },
      imgChroma: {
        '0%': {
          'opacity': '0.44',
        },
        '5%': {
          'opacity': '0.7',
        },
        '10%': {
          'opacity': '0.03',
        },
        '15%': {
          'opacity': '0.40',
        },
        '20%': {
          'opacity': '0.95',
        },
        '25%': {
          'opacity': '0.4',
        },
        '30%': {
          'opacity': '0.70',
        },
        '35%': {
          'opacity': '1',
        },
        '40%': {
          'opacity': '0.9',
        },
        '45%': {
          'opacity': '0.6',
        },
        '50%': {
          'opacity': '0.08',
        },
        '55%': {
          'opacity': '0.8',
        },
        '60%': {
          'opacity': '0.75',
        },
        '65%': {
          'opacity': '0.7',
        },
        '70%': {
          'opacity': '0.49',
        },
        '75%': {
          'opacity': '0.3',
        },
        '80%': {
          'opacity': '0.1',
        },
        '85%': {
          'opacity': '0.3',
        },
        '90%': {
          'opacity': '0.95',
        },
        '95%': {
          'opacity': '0.7',
        },
        '100%': {
          'opacity': '0.75',
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
    },
    animation: {
      flicker: 'flicker 0.2s infinite',
      'img-chroma': 'imageChroma 3.5s infinite',
      'chroma': 'chromaticAberration 3.5s infinite',
      'chroma-lg': 'chromaticAberrationHover 3.5s infinite',
    }
  },
  plugins: [],
};
export default config;