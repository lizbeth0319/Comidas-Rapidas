<template>
  <div class="burger-card">
    <img
      class="burger-image"
      :src="burger.image"
      :alt="burger.name"
    />
    
    <img
      class="burger-fondo"
      :src="burger.background"
      :alt="burger.name"
    />
    
    <div class="card-content">
      <h2 class="title">{{ burger.name }}</h2>
      <p class="description">{{ burger.description }}</p>
      <p class="price">💰 {{ burger.price }}</p>
      <button class="order-button">¡Ordenar Ahora! 🍔🏴‍☠</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    burger: {
        type: Object,
        required: true,
        default: () => ({
            name: "Hamburguesa por defecto",
            description: "Descripción por defecto",
            price: "$0",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
            background: 'https://i.pinimg.com/736x/7b/13/8b/7b138bfe0e3d82eabb964291d3a7408a.jpg'
        })
    }
});
</script>

<style scoped>
.burger-card {
    position: relative;
    max-width: 350px;
    background: #f8f2e1;
    border: 4px solid #b48b3c;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    font-family: "Permanent Marker", cursive;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    padding-bottom: 1rem;
    background-image: url('https://i.pinimg.com/736x/db/d0/90/dbd090ce30f21c81e5f8a817b1f94215.jpg');
    background-size: cover;
    background-position: center;
    margin: auto;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.burger-card:hover {
  transform: scale(1.05); /* Hace que la tarjeta se agrande un 5% */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35); /* Le da una sombra más pronunciada */
}
.burger-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid #b48b3c;
    transition: transform 0.3s ease-in-out;
}
.burger-card:hover .burger-image {
    transform: translateY(-5px); /* Desplaza la hamburguesa un poco hacia arriba */
}
.card-content {
    position: relative;
    z-index: 15;
    padding: 1rem;
    color: #2c1b00;
    text-shadow: 1px 1px #fff2c2;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #000000;
}

.description {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    font-family: "Luckiest Guy", cursive;
    font-weight: 400;
    font-style: normal;
    color: #000000;
}

.price {
    background-color: #000000;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.order-button {
    background-color: #a89891;
    color: #fff;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.order-button:hover {
    background-color: #c38700;
}

.burger-fondo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>