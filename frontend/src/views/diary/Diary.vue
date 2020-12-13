<template>
  <div class="login">
    <input v-model="username" name="username" type="text" placeholder="请输入用户名" />
    <input v-model="DIARYCONTENT" name="content" type="text" placeholder="内容" />
    <input v-model="DIARYTIME" name="time" type="text" placeholder="时间" />
    <button type="submit" title="点击登录" @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'Diary',
  data() {
    return {
      username: '',
      DIARYCONTENT: '',
      DIARYTIME: ''
    };
  },
  methods: {
    submit() {
      console.log('submit');
    }
  }
};
</script>

<style scoped></style>
