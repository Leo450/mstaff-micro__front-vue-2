const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'http://localhost:21000/',
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all'
  }
})
