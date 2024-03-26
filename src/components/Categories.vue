<script setup lang="ts">
import { tab } from '../stores/tab.ts'

const test = () => {
  console.log(tab.value)
}

const tabs = [
  {
    value: "1",
    icon: "fa-hamburger",
    label: "Hambúrguer"
  },
  {
    value: "2",
    icon: "gi-sushis",
    label: "Asiática"
  },
  {
    value: "3",
    icon: "gi-sandwich",
    label: "Sanduíches"
  },
  {
    value: "4",
    icon: "gi-cupcake",
    label: "Sobremesas"
  },
  {
    value: "5",
    icon: "md-fitnesscenter",
    label: "Fitness"
  },
  {
    value: "6",
    icon: "fa-pizza-slice",
    label: "Pizza"
  },
];

</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs v-model="tab" bg-color="#212121" color="#AC033C" @update:model-value="test">
        <v-tab v-for="tab in tabs" :value="tab.value">
          <v-icon :name="tab.icon" scale="1.25" class="mr-2" />
          {{ tab.label }}
        </v-tab>
      </v-tabs>
    </v-row>
  </v-container>
</template>

