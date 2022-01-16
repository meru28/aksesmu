module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  // 'vue/multi-word-component-names': ['warning', {
  //   ignores: ['Footer', 'index']
  // }],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 0,
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ]
  }
}
