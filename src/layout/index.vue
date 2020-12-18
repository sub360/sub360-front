<template>
  <el-container class="app-container">
      layout title
      <el-header>
        <menu/>
      </el-header>
      <app-main/>
      <el-footer>
      </el-footer>
  </el-container>
</template>

<script lang="ts">
import { AppMain, Menu } from "./components";

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
