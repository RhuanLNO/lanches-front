<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
/* import { useRoute } from 'vue-router'; */
import { ref, computed, DefineComponent, ComponentOptionsMixin, PublicProps, ExtractPropTypes } from 'vue'
import Restaurants from './pages/Restaurants.vue';
import Tourism from './pages/Tourism.vue';

type RouteOptions = {
  [key: string]: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<{}>>, {}, {}>
}

const routes: RouteOptions = {
  '/': Restaurants,
  'turismo': Tourism
}

const currentPath = ref(window.location.pathname)

window.addEventListener('locationchange', () => {
  currentPath.value = window.location.pathname
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <v-app>
    <v-layout>
      <Header />
      <component :is="currentView" />
<!--       <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/turismo">Go to About</RouterLink>
      </nav> -->
<!--       <RouterView /> -->

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
