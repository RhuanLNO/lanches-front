<script setup lang="ts">
import type { LocationQueryValue } from 'vue-router';

defineProps<{
  tabSetter: (tabValue: string) => void,
  tabValue: string | LocationQueryValue[]
}>();

const route = useRoute();
const tabQuery = ref<string | LocationQueryValue[]>(route.query.tab as string ?? "restaurantes");

watch(() => route.query.tab, (newVal) => {
  tabQuery.value = newVal as string ?? "restaurantes";
});
</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs :value="tabValue ? tabValue : 'restaurantes'" bg-color="#212121"
        :color="tabValue === 'turismo' ? 'var(--secondary-color)' : 'var(--main-color)'" v-model="tabQuery" @update:model-value="(v) => {
          navigateTo({ query: { tab: v as string } })
        }">
        <v-tab value="restaurantes">
          <Icon name="mdi:restaurant" class="mr-2" style="transform: scale(1.5);" />
          Restaurantes
        </v-tab>
        <v-tab value="turismo">
          <Icon name="fa-solid:globe-americas" class="mr-2" style="transform: scale(1.5);" />
          Turismo
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<style>
a {
  font-weight: 500;
}

.ov-icon {
  vertical-align: -0.35em;
}
</style>