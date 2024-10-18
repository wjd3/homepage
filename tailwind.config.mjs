/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			header: ['Karla', 'sans-serif'],
			body: ['Inconsolata', 'monospace']
		},
		colors: {
			'steel-gray': {
				50: '#f2f5fb',
				100: '#e7ecf8',
				200: '#d3dbf2',
				300: '#b8c3e9',
				400: '#9ba5de',
				500: '#8188d3',
				600: '#6869c3',
				700: '#5957ab',
				800: '#49498a',
				900: '#40416f',
				950: '#22223b'
			},
			'gun-powder': {
				50: '#f5f6f9',
				100: '#e8ebf1',
				200: '#d6dce7',
				300: '#bac3d6',
				400: '#98a6c2',
				500: '#7f8bb2',
				600: '#6d77a3',
				700: '#616894',
				800: '#53577a',
				900: '#4a4e69',
				950: '#2d2f3e'
			},
			venus: {
				50: '#f8f7f8',
				100: '#f2f1f2',
				200: '#e7e3e6',
				300: '#d4cdd4',
				400: '#b8aeb7',
				500: '#9a8c98',
				600: '#887a85',
				700: '#72646f',
				800: '#5f555d',
				900: '#524950',
				950: '#2e292d'
			},
			'clam-shell': {
				50: '#faf7f6',
				100: '#f4edec',
				200: '#ebdfdd',
				300: '#dcc9c5',
				400: '#c9ada7',
				500: '#b08b83',
				600: '#997169',
				700: '#7f5d56',
				800: '#6b4f49',
				900: '#5b4641',
				950: '#2f2320'
			},
			'dawn-pink': {
				50: '#faf7f6',
				100: '#f2e9e4',
				200: '#eee1da',
				300: '#e1ccc0',
				400: '#cead9b',
				500: '#ba9079',
				600: '#a3775f',
				700: '#88624d',
				800: '#725342',
				900: '#60493c',
				950: '#33241c'
			},

			extend: {}
		}
	},
	plugins: []
}
