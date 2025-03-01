<script setup lang="ts">
type Tab = {
  value: string;
  icon: string;
  label: string;
};

defineProps<{
  tabs: Array<Tab>;
  color: string;
}>();

import { tab } from "../stores/tab";

onUpdated(() => {
  tab.value = "0";  
})
</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs v-model="tab" bg-color="#212121" :color="color">
        <v-tab v-for="tab in tabs" :value="tab.value">
          <Icon :name="tab.icon" class="mr-2" style="transform: scale(1.5);" />
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>
