<template>
  <div class="slide-card-wrapper" :class="{ 'reverse': isReverse }">
    <div class="card-content">
      <div class="card-front">
        <h3 class="card-title">{{ burger.name }}</h3>
        <img :src="burger.image" :alt="burger.name" class="card-image" />
      </div>

      <div class="card-back">
        <p class="card-description">{{ burger.description }}</p>
        <p class="card-price">💰 {{ burger.price }}</p>
        <button class="order-button">¡Ordenar Ahora! 🍔🏴‍☠</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  burger: {
    type: Object,
    required: true,
    default: () => ({
      name: "Hamburguesa por defecto",
      description: "Descripción por defecto",
      price: "$0",
      image: "URL_IMAGEN_HAMBURGUESA",
    })
  },
  // La prop 'isReverse' permite alternar la dirección de la animación
  isReverse: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
/* Contenedor principal de la tarjeta. Es el marco de la animación. */
.slide-card-wrapper {
  position: relative;
  width: 350px;
  height: 450px;
  overflow: hidden; /* Oculta todo lo que se salga de este contenedor */
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin: 20px auto; /* Para centrar las tarjetas */
}

/* El contenedor interno que se va a mover */
.card-content {
  display: flex; /* Para poner las dos "caras" una al lado de la otra */
  width: 200%; /* El doble del ancho del contenedor padre */
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Estilos comunes para las dos caras de la tarjeta */
.card-front, .card-back {
  width: 50%; /* Cada cara ocupa la mitad de 'card-content' */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box; /* Incluye padding y border en el tamaño total */
  text-align: center;
}

/* Estilos de la cara frontal */
.card-front {
  background: #fff;
  z-index: 2; /* Para asegurarse de que esté al frente inicialmente */
}
.card-front .card-title {
  font-family: "Permanent Marker", cursive;
  font-size: 1.8rem;
  color: black;
  margin-bottom: 10px;
}
.card-image {
  width: 100%;
  max-width: 250px;
  height: 30vh;
  object-fit: contain;
}

/* Estilos de la cara trasera */
.card-back {
  background: #f0e6d6; /* Un color pastel diferente para la cara trasera */
  color: #333;
  z-index: 1;
}
.card-description {
  font-family: "Luckiest Guy", cursive;
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 15px;
}
.card-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #a89891;
}
.order-button {
  background-color: #a89891;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

/* ------------------ Animación al pasar el mouse ------------------ */

/* Desliza a la izquierda para revelar la cara trasera */
.slide-card-wrapper:not(.reverse):hover .card-content {
  transform: translateX(-50%);
}

/* Desliza a la derecha para revelar la cara trasera (en el caso 'reverse') */
.slide-card-wrapper.reverse .card-content {
  transform: translateX(-50%); /* Posición inicial para el reverso */
}
.slide-card-wrapper.reverse:hover .card-content {
  transform: translateX(0); /* Vuelve a la posición inicial */
}
</style>