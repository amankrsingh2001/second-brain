/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		colors: {
			'custom-gray-1': '#2D2D2E',
			'custom-gray-2': '#3D3D3E',
		  },
		  gradientColorStops: (theme) => ({
			'custom-gray-1': '#2D2D2E',
			'custom-gray-2': '#3D3D3E',
		  }),
  		backgroundImage: {
  			'custom-gradient': 'radial-gradient(circle, hsla(240, 1%, 26%, 1) 0%, hsla(0, 0%, 2%, 1) 100%)'
  		},
  		transitionTimingFunction: {
  			'in-expo': 'cubic-bezier(.42,1.04,.64,.39)',
  			'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
