const path = require('path')

module.exports = {
  publicPath: '/',

  //  默认dist  生产环境输出目录
  outputDir: 'dist',

  assetsDir: 'static',

  lintOnSave: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.apiopen.top',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/_variable.scss";`
      },
      less: {
        globalVars: {
          colord: '#ccc'
        }
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, '@/assets/css/_variable.scss')
      ]
    }
  }
}
