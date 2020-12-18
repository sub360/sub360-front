<template>
  <el-container class="app-container">
      <el-header>
        <Menu />
      </el-header>
      <AppMain />
      <el-footer>
      </el-footer>
  </el-container>
</template>

<script lang="ts">
import { default as AppMain } from './components/appMain.vue';
import { default as Menu } from './components/menu.vue';

export default {
  name: "Layout",
  components: {
    AppMain,
    Menu,
  },
};
</script>

<style lang="scss" scoped>

</style>
