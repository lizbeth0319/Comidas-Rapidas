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
  src: url('../assets/fonts/one-piece.woff2') format('woff2'),
       url('../assets/fonts/one-piece.woff') format('woff'),
       url('../assets/fonts/one-piece.ttf') format('truetype'); /* Mantén el .ttf como respaldo */
  font-weight: normal;
  font-style: normal;
}
.titulo {
    font-family: 'one piece',sans-serif; /* Usas el nombre que definiste */
  }
</style>