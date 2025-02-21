<script setup lang="ts">
import Categories from '../../components/Categories.vue';
import CardsContainer from '../../components/CardsContainer.vue';
import { tourismTabs } from '../../stores/tab';
import { tourismArr } from '../../stores/tourism';
import PageSelect from '../PageSelect.vue';

</script>

<template>
  <v-main class="background mt-5">
    <PageSelect :pageValue="1" color="var(--secondary-color)" route="/" />
    <Categories :tabs="tourismTabs" color="var(--secondary-color)" class="mt-4" />
    <CardsContainer color="var(--secondary-color)" :content-arr="tourismArr" />
  </v-main>
</template>