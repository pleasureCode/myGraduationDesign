<template>
  <div class="login">
    <div class="login_content">
      <h2>登录</h2>
      <div class="input_p">
        <div class="input_pp">
          <label
            >账号：
            <input
              v-model="username"
              name="username"
              type="text"
              placeholder="请输入用户名"
            />
          </label>
        </div>
        <div class="input_pp">
          <label
            >密码：
            <input v-model="pwd" type="password" placeholder="请输入密码" />
          </label>
        </div>
      </div>
      <a class="register" href="/register">立刻注册</a>
      <button type="submit" title="点击登录" @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
import { login } from '@/network/userDate';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      pwd: ''
    };
  },
  methods: {
    submit() {
      console.log(this.$route.path);
      login(this.username, this.pwd)
        .then((res) => {
          console.log(res);
          if (res.data.code === 0) {
            alert('登录失败');
          } else {
            alert('登录成功');
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('username', res.data.username);
            this.$router.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$store.commit('updateToken');
      // this.$router.push('/home');
      // if (this.username === '') {
      //   alert('用户名不能为空！');
      // } else if (this.pwd === '') {
      //   alert('密码不能为空！');
      // }
    }
  }
};
</script>

<style scoped>
.login {
  text-align: center;
}

.login_content {
  position: relative;
  left: 50%;
  top: 100px;
  margin-left: -345px;
  width: 691px;
  height: 571px;
  color: #fe4365;
  line-height: 20px;
  border-radius: 100px;
  background-color: rgba(131, 175, 155, 100);
  text-align: center;
  box-shadow: 2px 2px 30px 10px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.login_content h2 {
  position: absolute;
  top: 50px;
  left: 285px;
  font-size: 60px;
}

.login_content button {
  position: absolute;
  left: 201px;
  bottom: 48px;
  width: 335px;
  height: 54px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(229, 131, 8, 100);
  color: white;
  font-size: 20px;
  text-align: center;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.3);
}

.login_content .register {
  position: absolute;
  top: 360px;
  left: 160px;
  color: white;
  font-size: 18px;
}

.input_p {
  position: absolute;
  top: 150px;
  left: 87px;
  font-size: 20px;
}

.input_pp {
  margin: 20px 0;
}

.input_pp label {
  font-size: 30px;
}

.input_pp label input {
  width: 386px;
  height: 73px;
  border-radius: 10px;
  background-color: rgba(200, 200, 169, 100);
  color: rgba(114, 83, 52, 100);
  font-size: 16px;
  text-align: left;
  border: 1px solid rgba(187, 187, 187, 100);
}
</style>
