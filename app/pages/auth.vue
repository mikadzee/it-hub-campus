<template>
  <Wrapper />
</template>

<script setup lang="ts">
import Wrapper from "~/components/auth/Wrapper.vue";
definePageMeta({ layout: "default" });
</script>

<style lang="less" scoped>
.auth-wrapper {
  width: 100%;
  margin: 0;
  min-height: calc(100dvh - 40px);

  & > :deep(.image) {
    width: 44%;
  }

  & > :deep(.content) {
    flex: 1;
    min-width: 0;
  }
}

@media (max-width: 1100px) {
  .auth-wrapper {
    & > :deep(.image) { display: none; }
  }
}
</style>
