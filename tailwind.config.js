/*
 * Paleta worker-mailer — inspirada na identidade Cloudflare
 * Cores oficiais Cloudflare: #F48120 (orange), #FAAE40 (yellow-orange), #404041 (arsenic)
 * Referência: https://brandpalettes.com/cloudflare-logo-colors/
 *             https://blog.cloudflare.com/thinking-about-color/
 * NÃO usar: azul Tailwind puro (blue-600 #2563EB) sem passar pelo token `edge-*`
 * NÃO usar: preto puro (#000) — sempre usar ink-800 ou ink-950
 */
export default {
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#FFF3E6',
					100: '#FFD9AA',
					200: '#FFC172',
					300: '#FAAE40',
					400: '#F79330',
					500: '#F48120',
					600: '#D96910',
					700: '#C45C0A',
					800: '#9C430A',
					900: '#7A3D0A'
				},
				edge: {
					50: '#EFF6FF',
					100: '#DBEAFE',
					200: '#BFDBFE',
					300: '#93C5FD',
					400: '#60A5FA',
					500: '#3B82F6',
					600: '#2563EB',
					700: '#1D4ED8',
					800: '#1E40AF',
					900: '#1E3A5F'
				},
				ink: {
					50: '#F9F7F5',
					100: '#F0EDE8',
					200: '#E2DED8',
					300: '#D3D1C7',
					400: '#B4B2A9',
					500: '#888780',
					600: '#5F5E5A',
					700: '#444441',
					800: '#404041',
					900: '#2C2C2A',
					950: '#1A1A1B'
				}
			}
		}
	}
};
