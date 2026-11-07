<script setup lang="ts">
import Logo from "~/components/aside/Logo.vue";
import Pages from "~/components/aside/Pages.vue";
import Account from "~/components/aside/Account.vue";
</script>

<template>
  <aside class="aside-app">
    <div class="container">
      <Logo />

      <Pages />


      <Account />
    </div>
  </aside>
</template>

<style lang="less" scoped src="./aside.less" />