import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

// import { request } from '@/network/request';
//
// request({
//   url: '/diary'
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
