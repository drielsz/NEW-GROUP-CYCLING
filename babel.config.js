module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-paper/babel'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
