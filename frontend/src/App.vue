<template>
  <div id="nav">
    <main-tab-bar
      :class="{ main_tab_bar: true, isMainTabBar_active: isMainTabBar }"
    ></main-tab-bar>
  </div>
  <router-view />
</template>

<script>
import MainTabBar from '@/views/mainTabBar/MainTabBar';

export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    isMainTabBar() {
      return this.$store.state.isMainTabBar;
    },
    token() {
      return this.$store.state.token;
    }
  },
  components: { MainTabBar }
};
</script>

<style lang="scss">
.main_tab_bar {
  z-index: 10;
}

.isMainTabBar_active {
  display: none !important;
}

@import 'assets/css/base.css';
</style>
