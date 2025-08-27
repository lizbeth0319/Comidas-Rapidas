<template>
    <h1 class="titulo" :style="{ fontSize: `${tamañotitulo}px` }">
        {{ props.textoTitulo }}<!-- prop. -->
    </h1>
</template>

<script setup>
import { ref } from 'vue';
    const props=defineProps({
        textoTitulo:{
            Required:true,
            type: String,
            default:"One Piece"
        },
        tamañotitulo:{
          type:Number,
          default:100
        }
    })
</script>

<style>
@font-face {
  font-family: 'one piece';
  src: url('../public/fonts/one\ piece\ font.ttf') format('woff2'),
       url('../public/fonts/one\ piece\ font.woff') format('woff'),
       url('../public/fonts/one\ piece\ font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.titulo {
    font-family: 'one piece',sans-serif; /* Usas el nombre que definiste */
  }
</style>