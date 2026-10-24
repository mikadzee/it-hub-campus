<template>
  <nav class="nav">
    <ul class="list">
      <li v-for="page in pages">
        <NuxtLink class="link"
                  :to="page.path"
                  :title="page.name"
                  :key="page.id"
        >
          <SvgIcon :icon="page.icon" />

          <span>
            {{ page.name }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>


<script setup lang="ts">
import {pages} from "~/constants/navigation.ts";
import SvgIcon from "~/components/shared/SvgIcon.vue";
</script>

<style lang="less" src="./pages.less" scoped></style>