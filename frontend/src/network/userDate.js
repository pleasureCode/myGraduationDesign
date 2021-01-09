import { request } from '@/network/request';

export function allUser() {
  return request({
    url: '/'
  });
}

export function login(userName, psw) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      userName,
      psw
    }
  });
}

export function register(userName, email, psw) {
  return request({
    url: '/register',
    method: 'post',
    data: {
      userName,
      email,
      psw
    }
  });
}
