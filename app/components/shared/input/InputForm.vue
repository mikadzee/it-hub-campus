<template>
  <div class="field">
    <label :for="name">
      {{ label }}
    </label>

    <input :type="type === 'password' && visible ? 'text' : type" :id="name" :placeholder="placeholder" :name="name" v-model="model" required/>
    <button v-if="type === 'password'" class="show-password" type="button" @click="visible = !visible">{{ visible ? 'Скрыть' : 'Показать' }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}>()

const model = defineModel();
const visible = ref(false);
</script>

<style lang="less" scoped src="./input-form.less"></style>