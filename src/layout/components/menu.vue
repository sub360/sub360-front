<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1"><router-link to="/wallet">钱包</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/staking">质押</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/short-address">短地址</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/address">地址生成</router-link></el-menu-item>
    <el-menu-item index="5"><router-link to="/tx">广播交易</router-link></el-menu-item>
  </el-menu>
</template>

<script lang="ts">
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    handleSelect(index: number) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
  .el-menu-demo {

  }
</style>>
