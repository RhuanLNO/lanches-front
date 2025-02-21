<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
  <!--  <div>

  </div>-->
</template>
<script setup lang="ts">
useHead({
  title: "Qual o rolê?",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "author", content: "Rhuan Levy" },
    { name: "description", content: "Qual o Rolê?" },
  ],
  /*  link: [{ rel: 'shortcut icon', href: favicon }]*/
});

useSeoMeta({
  title: "Qual o rolê?",
  description:
    "Uma plataforma para digitalização da cidade de União dos Palmares",
});
</script>
