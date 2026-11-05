<template>
  <div class="registration">
    <div class="text">
      <h2>Войдите в аккаунт</h2>
      <p>Возвращайтесь в сообщество вашего колледжа.</p>
    </div>

    <form @submit.prevent="submit">
      <InputForm
          v-for="input in inputs"
          :key="input.name"
          v-model="form[input.name]"
          :label="input.label"
          :placeholder="input.placeholder"
          :name="input.name"
          :type="input.type"
      />

      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputForm from "~/components/shared/input/InputForm.vue";

type FieldName = "email" | "password";

const form = reactive({
  email: "",
  password: "",
});

const inputs: { name: FieldName; label: string; placeholder: string; type: string }[] = [
  {
    name: "email",
    label: "Электронная почта",
    placeholder: "Введите электронную почту",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    type: "password",
  },
];

function submit() {
  if (!form.email.trim() || !form.password) return;

  // ждем
}
</script>

<style lang="less" scoped src="./steps/registration.less"></style>
