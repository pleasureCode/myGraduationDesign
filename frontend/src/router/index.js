import { createRouter, createWebHistory } from 'vue-router';
import Diary from '@/views/diary/Diary';
import Home from '@/views/home/Home';
import Login from '@/views/login/Login';
import Task from '@/views/task/Task';
import Register from '@/views/register/Register';
import Manage from '@/views/manage/Manage';
import store from '@/store/index';
import * as path from 'path';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/exit',
    name: 'exit',
    component: () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      router.push('/login');
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  }
];

// beforeRouteEnter(to, from, next) {
//   // 添加背景色
//   document.querySelector('body').setAttribute('style', 'background-color:#f9f9f9')
//   next()
// },

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach((to, from, next) => {
  // 添加背景色
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:#C8C8A9');
  // console.log(to.path);
  // next();

  if (to.path === '/login' || to.path === '/register') {
    store.commit('isMainTabBarT');
    next();
  } else {
    let token = sessionStorage.getItem('token');
    console.log('token' + token);
    if (token === '' || token === null) {
      store.commit('isMainTabBarT');
      next('/login');
      console.log('非登录入口：' + token);
    } else {
      store.commit('isMainTabBarF');
      // next('/login');
      console.log('登录入口：' + token);
      next();
    }
  }
});

export default router;
