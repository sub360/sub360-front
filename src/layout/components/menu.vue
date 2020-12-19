<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1"><router-link to="/wallet/index">钱包</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/staking/index">质押</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="/short-address/index">短地址</router-link></el-menu-item>
    <el-menu-item index="4"><router-link to="/address/generate">地址生成</router-link></el-menu-item>
    <el-submenu index="5">
      <template #title>交易</template>
      <el-menu-item index="5-1"><router-link to="/tx/boardcast">广播交易</router-link></el-menu-item>
      <el-menu-item index="5-2"><router-link to="/tx/validate">验证交易</router-link></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
export default {
  name: "Menu",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string) {
      this.activeIndex = key;
    },
  },
};
</script>

<style type="scss" scoped>
  .el-menu-item a {
    text-decoration: none;
    color: black;
  }

  .el-menu-item a:link {
    text-decoration: none;
    color: black;
  }

  .el-menu-item a:visited {
    text-decoration: none;
    color: black;
  }

  .el-menu-item a:hover {
    text-decoration: none;
    color: black;
  }

  .el-menu-item a:active {
    text-decoration: none;
    color: black;
  }
</style>>
