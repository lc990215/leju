module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        commonjs: '@/commonjs',
        components: '@/components',
        network: '@/network',
        pages: '@/pages'
      }
    }
  },

  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Or array of paths
          resources: ['src/assets/css/color.scss']
        })
        .end()
    })
  },

  transpileDependencies: [
    'vuetify'
  ]
}
