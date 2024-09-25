<script setup lang="ts">
import Categories from '../components/Categories.vue';
import CardsContainer from '../components/CardsContainer.vue';
import { restaurantTabs } from '../stores/tab';
import { restaurantsArr } from '../stores/restaurants';
import PageSelect from '../components/PageSelect.vue';
</script>

<template>
  <v-main class="background mt-5">
    <PageSelect :value="2" color="var(--main-color)" route="/turismo" />
    <Categories :tabs="restaurantTabs" color="var(--main-color)" />
    <CardsContainer color="var(--main-color)" :content-arr="restaurantsArr" />
  </v-main>
</template>

<style>
  .v-main {
    --v-layout-top: 100px !important
  }
</style>