<template>
  <div class="registration">
    <div class="text">
      <h2>Создайте аккаунт</h2>
      <p>Присоединяйтесь к сообществу колледжа.</p>
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

      <p class="password-hint">Не менее 8 символов, включая буквы и цифры.</p>
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit">
        Продолжить
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputForm from "~/components/shared/input/InputForm.vue";
import type {AccountType} from "~/components/auth/forms/steps/data.interface.ts";

type FieldName = "name" | "email" | "password" | "confirmPassword";

interface InputField {
  name: FieldName;
  label: string;
  placeholder: string;
  type: "text" | "email" | "password";
}


const emit = defineEmits<{
  (e: 'data', value: AccountType): void;
}>();

const form = reactive<AccountType>({
  type: "account",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const inputs: InputField[] = [
  {
    name: "name",
    label: "Имя и фамилия",
    placeholder: "Как к вам обращаться",
    type: "text",
  },
  {
    name: "email",
    label: "Электронная почта",
    placeholder: "Введите электронную почту",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль",
    placeholder: "Придумайте пароль",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Подтверждение пароля",
    placeholder: "Повторите пароль",
    type: "password",
  },
];

const error = ref("");

function submit() {
  error.value = "";
  if (form.password.length < 8 || !/[a-zа-я]/i.test(form.password) || !/\d/.test(form.password)) {
    error.value = "Пароль должен содержать не менее 8 символов, буквы и цифры.";
    return;
  }
  if (form.password !== form.confirmPassword) {
    error.value = "Пароли не совпадают.";
    return;
  }
  if(form.password == "" && form.password === form.confirmPassword) return;
  if(form.name.trim().length < 2) {
    error.value = "Укажите имя и фамилию.";
    return;
  }

  return emit('data', form);
}
</script>
<style lang="less" scoped src="./registration.less"></style>
