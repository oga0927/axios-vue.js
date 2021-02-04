import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-316b3/databases/(default)/documents";

axios.interceptors.request.use(
  // 機能の追加ができる
  config => {
    console.log('interceptors.request', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use();


new Vue({
  render: h => h(App),
}).$mount('#app')
