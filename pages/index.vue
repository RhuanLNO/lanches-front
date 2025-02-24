<script setup lang="ts">
const route = useRoute();
const actualRoute = route?.query?.tab;
import "~/style.css";
</script>

<template>
  <v-app>
    <v-layout>
      <ClientOnly>
        <Header />
        <Tourism v-if="actualRoute === 'turismo'" />
        <Restaurants v-else />
      </ClientOnly>
    </v-layout>
    <Footer />
  </v-app>
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
