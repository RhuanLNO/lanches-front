<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import "~/style.css";
import { restaurantTabs, tourismTabs } from '~/stores/tab';
import PageSelect from '~/components/PageSelect.vue';
import Categories from '~/components/Categories.vue';
import AdBanner from '~/components/AdBanner.vue';
import type { LocationQueryValue } from "vue-router";

const route = useRoute();
const tab = ref<string | LocationQueryValue[]>(route.query.tab as string ?? "restaurantes");

const defineTab = (tabValue: string | undefined) => {
  tab.value = tabValue as string ?? "restaurantes";
}

watch(() => route.query.tab, (newVal) => {
  tab.value = newVal as string ?? "restaurantes" ;
});

</script>

<template>
  <v-main class="background mt-5">
    <PageSelect :tab-setter="defineTab" :tab-value="tab" @update:tab-value="defineTab" />
    <Categories :tabs="tab === 'turismo' ? tourismTabs : restaurantTabs" :color="tab === 'turismo' ? '#FFC400' : '#E65100'" class="mt-4" />
    <AdBanner />
    <Tourism v-if="tab === 'turismo'" />
    <Restaurants v-else />
  </v-main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.background {
  background-color: #121212;
}

.card {
  background-color: #212121;
  color: #fff;
  border-radius: 10px;
}
</style>
