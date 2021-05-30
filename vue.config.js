let webpackConfig,
  servOpt = {};

servOpt.disableHostCheck = process.env.NODE_ENV == "development";
webpackConfig = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: servOpt,
};
module.exports = webpackConfig;
