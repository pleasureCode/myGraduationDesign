<template>
  <div class="register">
    <div class="register_content">
      <h2>注册</h2>
      <div class="input_p">
        <div class="input_pp">
          <label
            >账&#12288;&#12288;号：
            <input
              v-model="username"
              name="username"
              type="text"
              placeholder="请输入用户名"
            />
          </label>
        </div>
        <div class="input_pp">
          <label>
            邮&#12288;&#12288;箱：
            <input
              v-model="email"
              name="email"
              type="text"
              placeholder="请输入邮箱"
            />
          </label>
        </div>
        <div class="input_pp">
          <label
            >密&#12288;&#12288;码：
            <input v-model="pwd" type="password" placeholder="请输入密码" />
          </label>
        </div>
        <div class="input_pp">
          <label
            >确认密码：
            <input v-model="rePwd" type="password" placeholder="请输入密码" />
          </label>
        </div>
      </div>
      <button type="submit" title="点击注册" @click="submit">注册</button>
    </div>
  </div>
</template>

<script>
import { register } from '@/network/userDate';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      pwd: '',
      rePwd: ''
    };
  },
  methods: {
    submit() {
      if (this.pwd !== this.rePwd) {
        alert('密码不相同');
      }
      console.log(this.username, this.email, this.pwd);
      register(this.username, this.email, this.pwd)
        .then((res) => {
          alert('注册成功');
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.register {
  text-align: center;
}

.register_content {
  position: relative;
  left: 50%;
  top: 100px;
  margin-left: -345px;
  width: 691px;
  height: 724px;
  color: #fe4365;
  line-height: 20px;
  border-radius: 100px;
  background-color: rgba(131, 175, 155, 100);
  text-align: center;
  box-shadow: 2px 2px 30px 10px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(187, 187, 187, 100);
}

.register_content h2 {
  position: absolute;
  top: 50px;
  left: 285px;
  font-size: 60px;
}

.register_content button {
  position: absolute;
  left: 201px;
  bottom: 48px;
  width: 335px;
  height: 54px;
  line-height: 20px;
  border-radius: 5px 5px 5px 5px;
  background-color: rgba(229, 131, 8, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.05);
}

.input_p {
  position: absolute;
  top: 150px;
  left: 70px;
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

/*.input_p div:last-child input {*/
/*  margin-right: 58px;*/
/*}*/
</style>
