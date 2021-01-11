/**
 * Babel configuration
 *
 * @format
 */

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'macros',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './assets',
          src: './src',
          'package.json': './package.json',
        },
      },
    ],
  ],
};
