<template>
  <div class="select-container">
    <button type="button" @click="showList = !showList" :disabled="disabled">
      {{ currentSelect ?? props.placeholder }}
    </button>

    <Transition name="dropdown">
      <ul class="list" v-if="showList">
        <li
            v-for="item in props.list"
            @click="send(item)"
            :class="{active: currentSelect === item}"
        >
          {{item}}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    placeholder: string
    list: string[];
    disabled: boolean;
  }>();

  const showList = ref(false);
  const currentSelect = ref<string | null>(null);
  const emit = defineEmits<{
    (e: 'select', value: string): void
  }>()

  function send(e:string) {
    currentSelect.value = e;
    showList.value = false;

    emit('select', currentSelect.value);
  }
</script>
<style lang="less" scoped src="./select-form.less"></style>
