<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      height="300px"
    >
      <q-carousel-slide
        v-for="(img, index) in imagenes"
        :key="index"
        :name="index + 1"
        :img-src="img"
      />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)

const props = defineProps({
  imagenes: {
    required: true,
    type: Array
  }
})
</script>

import { ref } from 'vue';
    const props=defineProps({
    textoboton:{
        Required:true,
        type: String,
        default:"Ver ..."
    },
    actionbuton:{
        Required:true,
        type: Function,
    },
    coloresboton:{
        Required:true,
        type: String,
    }
    }) */
