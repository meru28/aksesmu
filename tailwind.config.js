module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        mainlogo: 'var(--logo)',
        bgchome: 'var(--bghome)',
        btn_success: 'var(--success)',
        creamy: 'var(--creamy)'

      },
      fontFamily: {
        nunito: "'Nunito', sans-serif"
      }
    }
  },
  plugins: []
}
