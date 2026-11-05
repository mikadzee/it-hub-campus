<template>
  <section class="auth-wrapper">
    <div class="image">
      
    </div>

    <div class="content">

      <Login v-if="isLogin"/>
      <Register v-if="!isLogin"/>

      <p class="hint" @click="isLogin = !isLogin">
        {{isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}} <span>{{ isLogin ? 'Регистрация' : 'Войти' }}</span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import Register from "~/components/auth/forms/Register.vue";
import Progressbar from "~/components/auth/Progressbar.vue";
import Login from "~/components/auth/forms/Login.vue";

const isLogin = ref(false);
</script>
<style lang="less" src="./wrapper.less"></style>
