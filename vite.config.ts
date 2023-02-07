import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import VueSetupExtend from 'vite-plugin-vue-setup-extend'

//自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite';
//自动导入ui组件
import Components from 'unplugin-vue-components/vite';
//ant-design-vue
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //自定义组件名称
    // VueSetupExtend(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
      //ant-design-vue
      resolvers: [AntDesignVueResolver()],
    }),
    Components({
      //importStyle如果为false 样式就没了
      resolvers: [AntDesignVueResolver({ importStyle: true, resolveIcons: true })],
    }),
  ],
  //如果需要代理
  server: {
    host: '192.168.11.80',
    proxy: {
      '/api': {
        //匹配请求路径
        target: '', //代理的目标地址
        changeOrigin: true,
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets
        //路径重写，后端有统一前缀(如api)就不开启，没有就开启
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        additionalData: `@import "src/styles/var.less";`,
      },
    },
  },
});
