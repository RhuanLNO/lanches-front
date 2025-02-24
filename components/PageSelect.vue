<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  pageValue: number,
  color: string
}>();

const tab = ref(props.pageValue);

console.log(tab.value)

</script>

<template>
  <v-container>
    <v-row justify="center" class="options ga-5">
      <v-tabs v-model="tab" bg-color="#212121" :color="color">
        <a href="?tab=restaurantes">
          <v-tab :value="2">
            <Icon name="mdi:restaurant" class="mr-2" style="transform: scale(1.5);" />
            Restaurantes
          </v-tab>
        </a>
        <a href="/?tab=turismo">
          <v-tab :value="1">
            <Icon name="fa-solid:globe-americas" class="mr-2" style="transform: scale(1.5);" />
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