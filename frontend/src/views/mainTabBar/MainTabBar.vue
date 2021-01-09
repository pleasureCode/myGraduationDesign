<template>
  <div class="tab_bar">
    <div class="tab_item">
      <div class="tab_title">
        <a href="/"><p>主页</p></a>
      </div>
    </div>
    <div class="tab_item">
      <div class="tab_title">
        <a href="/manage">
          <p>员工管理</p>
        </a>
      </div>
    </div>
    <div class="tab_item">
      <div class="tab_title">
        <a href="/task">
          <p>工作发布</p>
        </a>
      </div>
    </div>
    <div class="tab_item">
      <div class="tab_title">
        <a href="/diary">
          <p>每日总结</p>
        </a>
      </div>
    </div>
    <div class="tab_item">
      <div class="tab_title">
        <a href="/exit">
          <p>注销</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainTabBar'
};
</script>

<style scoped>
a {
  color: #f4d000;
}

.tab_bar {
  z-index: 9;
  display: flex;
  left: 0;
  right: 0;
  height: 96px;
  background-color: #fc9d9a;
  text-align: center;
  box-shadow: 0 2px 6px 3px rgba(0, 0, 0, 0.2);
}

.tab_item {
  margin: 20px 0 20px 20px;
  text-align: center;
  width: 154px;
  height: 60px;
  flex: 1;
  line-height: 10px;
  border-radius: 60px;
  background-color: rgba(254, 67, 101, 100);
}

.tab_title {
  line-height: 65px;
  font-size: 30px;
}
</style>
