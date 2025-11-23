import { defineConfig } from '@ice/app'

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  server: {
    onDemand: true,
    format: 'esm',
  },
  ssr: false,
  ssg: false,
  routes: {
    ignoreFiles: [
      'custom.tsx',
      '**/components/**', // 如果每个页面下有 components 目录存放当前页面的组件，可以通过添加此配置忽略被解析成路由组件
    ],
    publicPath: './',
    defineRoutes: (route) => {
      route('/', '01_simple-formily/index')
    },
  },
}))
