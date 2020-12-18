<template>
  <el-main class="app-main">
    main content
    <router-view />
  </el-main>
</template>

<script lang="ts">
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.app-main {
}

// fix css style bug in open el-dialog
// .el-popup-parent--hidden {
//   .fixed-header {
//     padding-right: 15px;
//   }
// }
</style>
