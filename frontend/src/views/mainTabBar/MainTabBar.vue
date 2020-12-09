<template>
  <div class="tab_bar">
    <div class="tab_item" v-for="title in Titles" :key="title">
      <div class="tab_title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTabBar',
  data() {
    return {
      Titles: ['主页', '登录', '注册', '任务', '每日总结', '注销']
    };
  }
};
</script>

<style scoped>
.tab_bar {
  z-index: 9;
  display: flex;
  left: 0;
  right: 0;
  background-color: coral;
  text-align: center;
}
.tab_item {
  font-size: 20px;
  margin: 20px 0 20px 20px;
  text-align: center;
  flex: 1;
}
</style>
