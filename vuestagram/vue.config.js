const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  pwa : {
    name : '앱 이름',
    themeColor : '#4DBA87',
    msTileColor : '#000000',

    workboxOptions : {
      exclude : [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
})
