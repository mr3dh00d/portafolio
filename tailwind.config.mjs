/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'link-icon': "url('https://img.icons8.com/sf-regular/3b82f6/48/link.png')",
			},
		},
	},
	plugins: [],
}
