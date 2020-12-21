import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";


import './assets/css/common.css'
import './assets/js/common'
import axios from 'axios';

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import { Table,ConfigProvider,DatePicker } from 'ant-design-vue'
import 'ant-design-vue/lib/table/style/css'
import 'ant-design-vue/lib/date-picker/style/css'
Vue.component(Table.name,Table)//table组件
Vue.use(DatePicker)
Vue.component(ConfigProvider.name,ConfigProvider)//汉化

Vue.use(VideoPlayer)

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
