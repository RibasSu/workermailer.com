/*
 * Paleta worker-mailer — inspirada na identidade Cloudflare
 * Cores oficiais Cloudflare: #F48120 (orange), #FAAE40 (yellow-orange), #404041 (arsenic)
 * Referência: https://brandpalettes.com/cloudflare-logo-colors/
 *             https://blog.cloudflare.com/thinking-about-color/
 * NÃO usar: azul Tailwind puro (blue-600 #2563EB) sem passar pelo token `edge-*`
 * Contraste forte: usar preto ou branco nas superfícies e no texto
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
					50: 'var(--ink-50)',
					100: 'var(--ink-100)',
					200: 'var(--ink-200)',
					300: 'var(--ink-300)',
					400: 'var(--ink-400)',
					500: 'var(--ink-500)',
					600: 'var(--ink-600)',
					700: 'var(--ink-700)',
					800: 'var(--ink-800)',
					900: 'var(--ink-900)',
					950: 'var(--ink-950)'
				}
			}
		}
	}
};
