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
    <el-menu-item index="2"><router-link to="/short-address">短地址</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/staking">质押</router-link></el-menu-item>
    <el-submenu index="4">
      <template #title>工具</template>
      <el-menu-item index="4-1"><router-link to="/tools/address/generate">地址生成</router-link></el-menu-item>
      <el-menu-item index="4-2"><router-link to="/tools/tx/broadcast">广播交易</router-link></el-menu-item>
      <el-menu-item index="4-3"><router-link to="/tools/tx/validate">验证交易</router-link></el-menu-item>
    </el-submenu>
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