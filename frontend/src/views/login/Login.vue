<template>
  <div class="login">
    <div class="login_content">
      <h2>登录</h2>
      <div class="input_p">
        <label
          >用户名：
          <input v-model="username" name="username" type="text" placeholder="请输入用户名" />
        </label>
      </div>
      <div class="input_p">
        <label
          >密码：
          <input v-model="pwd" type="password" placeholder="请输入密码" />
        </label>
      </div>
      <button type="submit" title="点击登录" @click="submit">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      pwd: '',
      yzm: ''
    };
  },
  methods: {
    submit() {
      if (this.username === '') {
        alert('用户名不能为空！');
      } else if (this.pwd === '') {
        alert('密码不能为空！');
      }
    }
  }
};
</script>

<style scoped>
.login {
  position: relative;
  z-index: 99;
}
</style>
