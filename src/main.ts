import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as echarts from 'echarts';
import './styles/index.less';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
//全局使用echarts
app.config.globalProperties.$echarts = echarts;
app.mount('#app');
