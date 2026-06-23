/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // referenced via CSS variables so the dark/light toggle works
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        accentA: 'var(--accentA)',
        accentB: 'var(--accentB)',
      },
    },
  },
  plugins: [],
}
