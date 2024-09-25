<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  value: Number,
  color: String,
  route: String
});

const tab = ref(props.value);

</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs v-model="tab" bg-color="#212121" :color="props.color">
        <a :href="props.route">
          <v-tab :value="2">
            <v-icon name="io-restaurant" scale="1.25" class="mr-2" />
            Restaurantes
          </v-tab>
        </a>
        <a :href="props.route">
          <v-tab :value="1">
            <v-icon name="fa-globe-americas" scale="1.25" class="mr-2" />
            Turismo
          </v-tab>
        </a>
      </v-tabs>
    </v-row>
  </v-container>
</template>

<style>
a {
  font-weight: 500;
}

.ov-icon {
  vertical-align: -0.35em;
}
</style>