<template>
  <div class="registration">
    <div class="text">
      <h2>Информация о колледже</h2>
      <p>Укажите, где вы учитесь, чтобы видеть свою группу и события рядом.</p>
    </div>

    <form @submit.prevent="submit">
      <div class="field">
        <label>Город</label>

        <SelectForm
            placeholder="Выберите город"
            :list="cities"
            :disabled="false"
            @select="selectCity"
        />
      </div>

      <div class="field">
        <label>Колледж</label>

        <SelectForm
            :key="form.city"
            :placeholder="form.city ? 'Выберите колледж' : 'Сначала выберите город'"
            :list="colleges"
            :disabled="!form.city"
            @select="selectCollege"
        />
      </div>

      <div class="field">
        <label>Учебная группа</label>

        <SelectForm
            :key="`${form.city}-${form.college}`"
            :placeholder="form.college ? 'Выберите группу' : 'Сначала выберите колледж'"
            :list="groups"
            :disabled="!form.college"
            @select="form.group = $event"
        />
      </div>

      <div class="hint">
        Не нашли свою группу? Обратитесь к куратору или в поддержку Campus.
      </div>

      <button type="submit">
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import SelectForm from "~/components/shared/input/SelectForm.vue";
import type {CollegeType} from "~/components/auth/forms/steps/data.interface.ts";

const emit = defineEmits<{
  (e: 'data', value: CollegeType): void;
}>();

const form = reactive<CollegeType>({
  type: "college",
  city: "",
  college: "",
  group: "",
});

const locations: Record<string, Record<string, string[]>> = {
  "Москва": {
    "ITHub": ["Группа 1", "Группа 2", "Группа 3"],
  },
  "Ставрополь": {
    "ITHub": ["Группа 4", "Группа 5"],
  },
  "Санкт-Петербург": {
    "ITHub": ["Группа 6", "Группа 7"],
  },
};

const cities = Object.keys(locations);

const colleges = computed(() => {
  return Object.keys(locations[form.city] ?? {});
});

const groups = computed(() => {
  return locations[form.city]?.[form.college] ?? [];
});

function selectCity(city: string) {
  form.city = city;
  form.college = "";
  form.group = "";
}

function selectCollege(college: string) {
  form.college = college;
  form.group = "";
}

function submit() {
  if (!form.city || !form.college || !form.group) return;

  emit('data', { ...form });
}
</script>

<style lang="less" scoped src="./registration.less"></style>