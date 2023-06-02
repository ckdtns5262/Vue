const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // 이 에러는 Eslint와 같이 사용할 때 발생하는 에러인데, vue에서 component명을 만들 때 반드시 단어의 조합(CmmMenu)으로 지어야 한다는 의미이다.
  lintOnSave : false
})
