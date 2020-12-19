<template>
  <div>质押</div>
</template>

<script lang="ts">
import { Keyring } from "@polkadot/keyring";
import { cryptoWaitReady, mnemonicGenerate } from "@polkadot/util-crypto";

export default {
  name: "Staking",
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style scoped>
</style>
