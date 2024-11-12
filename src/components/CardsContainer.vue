<script setup lang="ts">
import { tab } from '../stores/tab'
import { ref, watch } from 'vue'
import placeholder from '../assets/mock.jpg'

type ApiResponse = {
  id: number,
  name: string,
  businessHours: string,
  instagram: string | null,
  phone: string | null,
  photo: string | null,
  /* categories: Array<Category> */
  categories: Array<Number>,
  isMocambos: boolean,
  isPremium: boolean
}

const props = defineProps({
  color: String,
  contentArr: Array<ApiResponse>
});

/* type Category = {
  id: number,
  name: string
} */

const loading = ref(false);
const content = ref<ApiResponse[]>([]);

const getRestaurants = async () => {
  loading.value = true;
  content.value = [];
  if (props.contentArr) {
    if (tab.value === '0') {
      content.value = props.contentArr;
      return
    };
    const filteredRestaurants: ApiResponse[] = props.contentArr.filter((content) => content.categories.some(category => category === Number(tab.value)));
    content.value = filteredRestaurants;
  };
  /*   fetch(`${import.meta.env.VITE_BACK_URL}/restaurants?category=${tab.value}`)
      .then(res => res.json())
      .then(data => { console.log(data); restaurants.value = data.restaurants; loading.value = false }) */
};

watch(() => tab.value, getRestaurants, { immediate: true })
</script>

<template>
  <v-container>
    <v-row v-if="content.length > 0">
      <v-col v-for="restaurant in content" :key="restaurant.id" sm="12" md="6" lg="4" xl="3" cols="12">
        <v-card class="card">
          <v-card-item>
            <v-col>
              <v-tooltip text="Parceiro Premium" location="bottom center">
                <template v-slot:activator="{ props }"  >
                  <div class="premiumContainer" v-bind="props" v-if="restaurant.isPremium && !restaurant.isMocambos">
                    <span class="premiumSpan">
                      <v-icon name="fa-star" color="#fff" />
                    </span>
                  </div>
                </template>
              </v-tooltip>
              <v-tooltip text="Parceiro Destaque - Projeto Mocambos" location="bottom center">
                <template v-slot:activator="{ props }"  >
                  <div class="premiumContainer" v-bind="props" v-if="!restaurant.isPremium && restaurant.isMocambos">
                    <span class="mocambosSpan">
                      <v-icon name="fa-star" color="#fff" />
                    </span>
                  </div>
                </template>
              </v-tooltip>
              <img :src="restaurant.photo ? restaurant.photo : placeholder" width="100%" class="photo" />
              <v-col class="">
                <div class="title">{{ restaurant.name }}</div>
                <v-col>
                  <v-row justify="center" class="ga-3">
                    <a :href="restaurant.phone ? 'tel:' + restaurant.phone : undefined">
                      <v-btn class="ma-2" :color="props.color">
                        <v-icon name="md-phone-round" scale="1.15" color="#fff" />
                      </v-btn>
                    </a>
                    <a :href="restaurant.phone ? 'https://wa.me/' + restaurant.phone : undefined" target="_blank">
                      <v-btn class="ma-2" :color="props.color">
                        <v-icon name="io-logo-whatsapp" scale="1.15" color="#fff" />
                      </v-btn>
                    </a>
                    <a :href="restaurant.instagram ? 'https://www.instagram.com/' + restaurant.instagram : undefined"
                      target="_blank">
                      <v-btn class="ma-2" :color="props.color">
                        <v-icon name="io-logo-instagram" scale="1.15" color="#fff" />
                      </v-btn>
                    </a>
                  </v-row>
                </v-col>
                <div>Funcionamento: {{ restaurant.businessHours }}</div>
              </v-col>

            </v-col>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <!--     <v-col v-if="loading" class="mt-15">
      <v-row justify="center">
        <p>O primeiro carregamento pode demorar um pouco...</p>
      </v-row>
      <v-row justify="center" class="mt-6">
        <span class="loader" />
      </v-row>
    </v-col> -->
    <v-row v-if="content.length === 0 && !loading" class="mt-15" justify="center">
      <p>Sem resultados para exibir</p>
    </v-row>
  </v-container>
</template>

<style>
.card {
  background-color: #212121 !important;
  border-radius: 10px !important;
  color: #fff !important;
  text-align: center;
  /*   min-height: 550px;
  max-height: 550px; */
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #212121;
  border-bottom-color: var(--main-color);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

p {
  color: white;
}

.photo {
  object-fit: cover;
  min-height: 360px;
  max-height: 360px;
}

.title {
  font-size: 20px;
  font-weight: 600;
}

.premiumContainer {
  position: absolute;
  right: 10px;
}

.premiumSpan {
  padding: 10px 15px;
  background-color: #FFC400;
  border-radius: 25px;
}

.mocambosSpan {
  padding: 10px 15px;
  background-color: #7026c8;
  border-radius: 25px;
}
</style>