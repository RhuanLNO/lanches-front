<script setup lang="ts">
import Categories from '../components/Categories.vue';
import CardsContainer from '../components/CardsContainer.vue';
import { restaurantTabs } from '../stores/tab';
import { restaurantsArr } from '../stores/restaurants';
</script>

<template>
  <v-main class="background mt-5">
    <Categories :tabs="restaurantTabs" color="var(--main-color)" />
    <CardsContainer color="var(--main-color)" :content-arr="restaurantsArr" />
  </v-main>
</template>

<style>
  .v-main {
    --v-layout-top: 128px !important
  }
</style>