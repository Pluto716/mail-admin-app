<template>
  <div class='home'>
    <LeftMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SliderNav />
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import SliderNav from './components/SliderNav.vue';

export default {
  components: { SliderNav, LeftMenu },
};
</script>

<style lang="less" >
@import url('~@/assets/css/home.less');
</style>
