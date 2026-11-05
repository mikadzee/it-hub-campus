<template>
  <div class="progress-bar">
    <div class="step" :class="{active: step >= 1}">
      <div>
        1
      </div>
      Аккаунт
    </div>

    <div class="step" :class="{active: step >= 2}">
      <div>
        2
      </div>
      Колледж
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  step: number
}>()
</script>

<style lang="less" src="./progressbar.less" scoped></style>