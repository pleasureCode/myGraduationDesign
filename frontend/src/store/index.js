import { createStore } from 'vuex';
import Login from '@/views/login/Login';

export default createStore({
  state: {
    userDate: {
      token: sessionStorage.getItem('token'),
      username: sessionStorage.getItem('username')
    },
    isMainTabBar: false
  },
  mutations: {
    isMainTabBarT(state) {
      state.isMainTabBar = true;
      // console.log('mutations我被调用了true');
    },
    isMainTabBarF(state) {
      state.isMainTabBar = false;
      // sessionStorage.removeItem('token');
      // sessionStorage.setItem('token', 'x');
      // sessionStorage.setItem('username', '管理员');
      // console.log('mutations我被调用了false');
    },
    updateToken(state) {
      state.token = 'cs';
    }
  },
  actions: {},
  modules: {}
});
