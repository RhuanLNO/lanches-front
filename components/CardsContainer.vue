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
const dialog = ref(false);
const selectedItem = ref<ApiResponse | null>(null);
const carouselImages = ref<string[]>([]);

const openDetails = (item: ApiResponse) => {
  selectedItem.value = item;
  // For the carousel, use the main photo and add placeholder images
  // In a real implementation, you would fetch additional photos from an API
  carouselImages.value = [];
  if (item.photo) {
    carouselImages.value.push(item.photo);
  }
  // Add placeholder images for demonstration
  carouselImages.value.push(placeholder);
  carouselImages.value.push(placeholder);
  
  dialog.value = true;
};

const getRestaurants = async () => {
  loading.value = true;
  content.value = [];
  if (props.contentArr) {
    if (tab.value === '0') {
      content.value = [...props.contentArr].sort((a, b) => {
        if ((a.isPremium || a.isMocambos) === (b.isPremium || b.isMocambos)) return 0;
        return (a.isPremium || a.isMocambos) ? -1 : 1;
      });
      return;
    };
    const filteredRestaurants: ApiResponse[] = props.contentArr
      .filter((content) => content.categories.some(category => category === Number(tab.value)))
      .sort((a, b) => {
        if ((a.isPremium || a.isMocambos) === (b.isPremium || b.isMocambos)) return 0;
        return (a.isPremium || a.isMocambos) ? -1 : 1;
      });
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
                      <Icon name="fa-solid:star" style="transform: scale(1.25);" />
                    </span>
                  </div>
                </template>
              </v-tooltip>
              <v-tooltip text="Parceiro Destaque - Projeto Mocambos" location="bottom center">
                <template v-slot:activator="{ props }"  >
                  <div class="premiumContainer" v-bind="props" v-if="!restaurant.isPremium && restaurant.isMocambos">
                    <span class="mocambosSpan">
                      <Icon name="fa-solid:star" style="transform: scale(1.25);" />
                    </span>
                  </div>
                </template>
              </v-tooltip>
              <img :key="restaurant.id" :src="restaurant.photo ? restaurant.photo : placeholder" width="100%" class="photo" />
              <v-col class="">
                <div class="title">{{ restaurant.name }}</div>
                <v-col>
                  <v-row justify="center" class="ga-3">
                    <a :href="restaurant.phone ? 'tel:' + restaurant.phone : undefined">
                      <v-btn class="ma-2" :color="props.color">
                        <Icon name="mdi:phone" style="transform: scale(1.65);" />
                      </v-btn>
                    </a>
                    <a :href="restaurant.phone ? 'https://wa.me/' + restaurant.phone : undefined" target="_blank">
                      <v-btn class="ma-2" :color="props.color">
                        <Icon name="mdi:whatsapp" style="transform: scale(1.65);" />
                      </v-btn>
                    </a>
                    <a :href="restaurant.instagram ? 'https://www.instagram.com/' + restaurant.instagram : undefined"
                      target="_blank">
                      <v-btn class="ma-2" :color="props.color">
                        <Icon name="mdi:instagram" style="transform: scale(1.65);" />
                      </v-btn>
                    </a>
                  </v-row>
                </v-col>
                <div>Funcionamento: {{ restaurant.businessHours }}</div>
<!--                 <v-btn class="mt-3 details-btn" :color="props.color" @click="openDetails(restaurant)">
                  Ver Detalhes
                </v-btn> -->
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

    <!-- Details Modal -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card v-if="selectedItem" class="details-modal">
        <v-card-title class="modal-title">
          {{ selectedItem.name }}
          <v-btn icon @click="dialog = false" class="close-btn">
            <Icon name="mdi:close" class="close-btn-icon" />
          </v-btn>
        </v-card-title>
        
        <v-card-text>
          <v-carousel height="400" :show-arrows="true" cycle hide-delimiter-background delimiter-icon="mdi:circle">
            <v-carousel-item
              v-for="(image, i) in carouselImages"
              :key="i"
              :src="image"
              cover
            ></v-carousel-item>
          </v-carousel>
          
          <div class="details-info mt-4">
            <p><strong>Funcionamento:</strong> {{ selectedItem.businessHours }}</p>
            <p v-if="selectedItem.phone"><strong>Telefone:</strong> {{ selectedItem.phone }}</p>
            <p v-if="selectedItem.instagram"><strong>Instagram:</strong> @{{ selectedItem.instagram }}</p>
          </div>
          
          <v-row justify="center" class="mt-4">
            <a :href="selectedItem.phone ? 'tel:' + selectedItem.phone : undefined">
              <v-btn class="ma-2" :color="props.color">
                <Icon name="mdi:phone" style="transform: scale(1.65);" />
              </v-btn>
            </a>
            <a :href="selectedItem.phone ? 'https://wa.me/' + selectedItem.phone : undefined" target="_blank">
              <v-btn class="ma-2" :color="props.color">
                <Icon name="mdi:whatsapp" style="transform: scale(1.65);" />
              </v-btn>
            </a>
            <a :href="selectedItem.instagram ? 'https://www.instagram.com/' + selectedItem.instagram : undefined"
              target="_blank">
              <v-btn class="ma-2" :color="props.color">
                <Icon name="mdi:instagram" style="transform: scale(1.65);" />
              </v-btn>
            </a>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
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

.details-btn {
  width: 100%;
  margin-top: 10px;
}

.details-modal {
  background-color: #212121 !important;
  color: white !important;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.close-btn {
  margin-left: auto;
  background-color: rgba(0, 0, 0, 0.5) !important;

  .close-btn-icon {
    transform: scale(1.4);
  }
}

.details-info {
  margin-top: 20px;
  text-align: left;
}

.details-info p {
  margin-bottom: 8px;
  font-size: 16px;
}

/* Carousel navigation styling */
.v-carousel .v-btn--icon {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: white !important;
  transform: scale(1.2);
}

.v-carousel .v-btn--icon:hover {
  background-color: rgba(0, 0, 0, 0.8) !important;
}

/* Carousel indicators styling */
.v-carousel .v-carousel__controls {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  border-radius: 20px;
}

.v-carousel .v-carousel__controls .v-btn {
  color: white !important;
  opacity: 0.7;
  transform: scale(0.8);
}

.v-carousel .v-carousel__controls .v-btn--active {
  opacity: 1;
}
</style>