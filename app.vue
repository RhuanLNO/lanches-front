<template>
  <v-app>
    <v-layout class="v-layout">
      <ClientOnly>
          <Header />
          <NuxtPage />
          <Footer />
      </ClientOnly>
    </v-layout>
  </v-app>
</template>
<script setup lang="ts">
useHead({
  title: "Qual o rolê?",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "author", content: "Rhuan Levy" },
    { name: "description", content: "Qual o Rolê?" },
  ],
});

useSeoMeta({
  title: "Qual o rolê?",
  description:
    "Uma plataforma para digitalização da cidade de União dos Palmares",
});
</script>
<style>
.v-layout {
  display: block;
}
</style>
