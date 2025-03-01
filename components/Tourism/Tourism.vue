<script setup lang="ts">
import CardsContainer from '../../components/CardsContainer.vue';
import { tourismArr } from '../../stores/tourism';

onMounted(() => {
  document.documentElement.style.setProperty('--main-color', '#FFC400');
});
</script>

<template>
  <CardsContainer color="var(--secondary-color)" :content-arr="tourismArr" />
</template>