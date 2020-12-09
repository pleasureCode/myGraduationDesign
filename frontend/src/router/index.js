import { createRouter, createWebHistory } from 'vue-router';
import Diary from '@/views/diary/Diary';
import Home from '@/views/home/Home';
import Login from '@/views/login/Login';
import Task from '@/views/task/Task';

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
    path: '/task',
    name: 'Task',
    component: Task
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
