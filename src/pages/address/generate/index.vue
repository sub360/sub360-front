<template>
  地址生成
</template>

<script lang="ts">
    import { Keyring } from '@polkadot/keyring';
    import { cryptoWaitReady, mnemonicGenerate } from '@polkadot/util-crypto';

    export default {
        name: "Address"
    };
</script>

<style scoped>

</style>
