<script setup lang="ts">
import logo from "../assets/logo-new.png";
</script>

<template>
  <v-app-bar :elevation="2" color="grey-darken-4" height="100">
    <div class="logoContainer">
      <NuxtLink to="/" class="link">
        <img :src="logo" height="100%" />
      </NuxtLink>
    </div>
  </v-app-bar>
</template>

<style>
.headerTitle {
  font-size: 28px !important;
}

.logoContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.link {
  height: 100%;
}
</style>
