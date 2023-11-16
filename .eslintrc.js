module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'unused-imports/no-unused-imports': 'error'
  }
}
