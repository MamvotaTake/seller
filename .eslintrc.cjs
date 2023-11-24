module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'dayjs',
            message: 'Do not directly import dayjs. Only import the dayjs exported from lib/dayjs.',
          },
          {
            name: '@ant-design/icons',
            message: 'Please use icons from the @posthog/icons package instead',
          },
          {
            name: 'antd',
            importNames: ['Tooltip'],
            message: 'Please use Tooltip from @posthog/lemon-ui instead.',
          },
          {
            name: 'antd',
            importNames: ['Alert'],
            message: 'Please use LemonBanner from @posthog/lemon-ui instead.',
          },
        ],
      },
    ],
  },

}
