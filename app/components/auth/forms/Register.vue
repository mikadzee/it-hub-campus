<template>
  <div class="registration">
    <Progressbar :step="currentStep" />

    <Account v-show="currentStep === 1" @data="nextStep"/>
    <College v-show="currentStep === 2" @data="nextStep"/>
    <button v-if="currentStep === 2" class="back" @click="currentStep = 1">← Назад к аккаунту</button>
  </div>
</template>

<script setup>
  import Progressbar from "~/components/auth/Progressbar.vue";
  import Account from "~/components/auth/forms/steps/Account.vue";
  import College from "~/components/auth/forms/steps/College.vue";

  const currentStep = ref(1);
  const data = reactive({});

  function nextStep(e ) {
    if(e?.type === "account") {
      Object.assign(data, e);
      return currentStep.value = 2
    }
    if(e?.type === "college") {
      Object.assign(data, e);

      return data
    };
  }
</script>