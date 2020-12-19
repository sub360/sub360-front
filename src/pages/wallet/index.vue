<template>
  钱包
</template>

<script lang="ts">
export default {
  name: "Wallet",
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string) {
      this.activeIndex = key;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
