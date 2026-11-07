<script setup lang="ts">
import SvgIcon from "~/components/shared/SvgIcon.vue";
</script>
<template>
  <div class="account">
    <NuxtLink class="link-aside" to="/profile">
      <SvgIcon icon="icon-profile"/>

      <span>
        Профиль
      </span>
    </NuxtLink>

    <NuxtLink class="link-aside" to="/settings">
      <SvgIcon icon="icon-settings"/>

      <span>
        Настройки
      </span>
    </NuxtLink>

  </div>
</template>

<style lang="less" scoped src="./account.less" />