<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main>
    <Aside/>
    <div class="container" :class="{ 'auth-container': route.path === '/auth' }">
      <slot/>
    </div>
  </main>

</template>

<style lang="less" scoped src="./default.less">
</style>