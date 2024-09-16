<script setup lang="ts">
import Categories from '../components/Categories.vue';
import CardsContainer from '../components/CardsContainer.vue';
import { tourismTabs } from '../stores/tab';
</script>

<template>
  <v-main class="background mt-5">
    <Categories :tabs="tourismTabs" color="var(--secondary-color)" />
    <CardsContainer color="var(--secondary-color)" />
  </v-main>
</template>