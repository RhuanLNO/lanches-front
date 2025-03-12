<template>
  <v-container class="text-center mt-4">
    <v-carousel height="fit-content" :show-arrows="false" cycle hide-delimiter-background hide-delimiters delimiter-icon="mdi:circle">
      <v-carousel-item v-for="banner in banners" :key="banner.image || ''">
        <template #default>
          <a :href="banner.link || ''" target="_blank">
            <v-img :src="banner.image || ''" aspect-ratio="16/9" class="d-flex align-center justify-center" cover />
          </a>
        </template>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>
<script setup lang="ts">
import { restaurantsArr } from '~/stores/restaurants';
import banner from '../assets/banner3.png';
import { ref } from 'vue';
import { tourismArr } from '~/stores/tourism';

const mergedArray = ref([...restaurantsArr, ...tourismArr]);

const filteredPremium = ref(mergedArray.value.filter((item, index, self) =>
  item.isPremium && self.findIndex(i => i.id === item.id) === index
));

const banners = ref([
  ...filteredPremium.value.map(item => ({ image: item.banner, link: `https://www.instagram.com/${item.instagram}` })),
  { image: banner, link: 'mailto:qualoroleapp@outlook.com' }
]);

</script>
<style scoped>
.v-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>