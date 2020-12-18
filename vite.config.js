const path = require('path')

console.log(path.resolve(__dirname, './src'))

module.exports = {
   /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: '/',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  port: 3000,

  // 是否自动在浏览器打开
  open: false,

  // 是否开启 https
  https: false,

  // 服务端渲染
  ssr: false,

  // 引入第三方的配置
  // optimizeDeps: {
  //   include: ["axios", "mockjs"]
  // },

  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src'),
    '/@components/': path.resolve(__dirname, './src/components')
  },
  proxy: {
    // 如果是 /apimain 打头，则访问地址如下
    '/apimain': {
      target: 'http://localhost:9001/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/apimain/, '')
    }
  }
}