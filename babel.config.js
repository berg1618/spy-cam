module.exports = function (api) {
  api.cache(true);
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true
    }]
  ]
  return {
    presets: ['babel-preset-expo'],
  };

};
