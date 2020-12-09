<template>
  <div id="nav">
    <main-tab-bar class="main_tab_bar"></main-tab-bar>
  </div>
  <router-view />
</template>

<script>
import MainTabBar from '@/views/mainTabBar/MainTabBar';
export default {
  name: 'app',
  components: { MainTabBar }
};
</script>

<style lang="scss">
.main_tab_bar {
  position: relative;
  z-index: 999;
}
@import 'assets/css/base.css';
</style>
