const path = require('path');
const webpack = require("webpack");

module.exports = {
  css:{
    loaderOptions:{
      sass:{
        data: `@import "src/assets/scss/main.scss";`
      }
    }
  },
  devServer:{
    port:8888,
    hot:true,
    open:true,
    proxy: {
      '/api': {
        target: 'http://localhost:3303',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    }
  },
  configureWebpack: {
    plugins: []
  }
}