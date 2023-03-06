// eslint-disable-next-line func-names
module.exports = function (apiSelect) {
  apiSelect.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-typescript',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '#/',
          rootPathSuffix: './src/'
        }
      ],
    ],
  };
};
