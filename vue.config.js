const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'http://medikstaff.com:8080/front-vue-2/',
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all'
  }
})
