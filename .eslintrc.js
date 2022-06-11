module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  'prettier/prettier': [
    {
      usePrettierrc: true,
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _api: './src/api',
          _assets: './src/assets',
          _components: './src/components',
          _formElements: './src/components/form-elements',
          _icons: './src/components/icons',
          _shared: './src/components/shared',
          _pages: './src/pages',
          _redux: './src/redux',
          _screens: './src/screens',
          _styles: './src/styles',
          _utils: './src/utils',
          theme: './src/styles/theme.js',
          MetropolisText: './src/components/elements/MetropolisText.js',
          ForEach: './src/components/elements/ForEach.js',
          BlurView: './src/components/elements/BlurView',
        },
      },
    },
  },
}
