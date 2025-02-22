<script setup lang="ts">
type Tab = {
  value: String,
  icon: String,
  label: String
};

const props = defineProps({
  tabs: Array<Tab>,
  color: String
});

import { tab } from '../stores/tab'

</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs v-model="tab" bg-color="#212121" :color="props.color">
        <v-tab v-for="tab in props.tabs" :value="tab.value">
          <v-icon :name="tab.icon" scale="1.25" class="mr-2" />
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>

