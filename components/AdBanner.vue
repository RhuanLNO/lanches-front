<template>
  <v-container class="text-center mt-4">
    <a href="mailto:qualoroleapp@outlook.com" target="_blank">
      <img :src="banner" class="banner" />
    </a>
  </v-container>
</template>
<script setup lang="ts">
import banner from '../assets/banner.png'
</script>
<style scoped>
.banner {
  max-height: 230px;
  width: 80%;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 95%;
  }
}
</style>