module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-preset-env': {},
    cssnano: {
      'cssnano-preset-advanced': {
        zindex: false, //只要启用了这个插件，z-index的值就会重置为1,一定关闭
        autoprefixer: false
      }
    }
  }
};
