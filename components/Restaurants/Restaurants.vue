<script setup lang="ts">
import Categories from '../../components/Categories.vue';
import CardsContainer from '../../components/CardsContainer.vue';
import { restaurantTabs } from '../../stores/tab';
import { restaurantsArr } from '../../stores/restaurants';
import PageSelect from '../../components/PageSelect.vue';
</script>

<template>
  <v-main class="background mt-5">
    <PageSelect :pageValue="2" color="var(--main-color)" route="?tab=turismo" />
    <Categories :tabs="restaurantTabs" color="var(--main-color)" class="mt-4" />
    <CardsContainer color="var(--main-color)" :content-arr="restaurantsArr" />
  </v-main>
</template>

<style>
  .v-main {
    --v-layout-top: 100px !important
  }
</style>