<script setup lang="ts">
import Header from './components/Header.vue';
import Categories from './components/Categories.vue';
import CardsContainer from './components/CardsContainer.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <v-layout>
      <Header />
      <v-main class="background mt-5">
        <Categories />
        <CardsContainer />
      </v-main>
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

.options {
  color: #AC033C;
  /* gap: 30px; */
}
</style>
