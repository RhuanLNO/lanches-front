<script setup lang="ts">
import CardsContainer from '../../components/CardsContainer.vue';
import { restaurantsArr } from '../../stores/restaurants';

onMounted(() => {
  document.documentElement.style.setProperty('--main-color', '#E65100');
});
</script>

<template>
  <CardsContainer color="var(--main-color)" :content-arr="restaurantsArr" />
</template>

<style>
.v-main {
  --v-layout-top: 100px !important
}
</style>