import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        ashColor:'#a3aec4',
        darkBlue:"#0d0f14"
      },
      colors:{
        cream:'#f8f9f9',
        blueColor: '#3e5abc',
        brown:"#aa6d53",
        lightBrown:"#41383a",
        darkBlue:"#0d0f14"
      },
    },
  },
  plugins: [],
}
export default config
