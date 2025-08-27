<template>
  <q-page class="perros-y-salchipapas-page">
    <h2 class="section-title">Perros y Salchipapas</h2>
    
    <div class="menu-container">
      <div class="menu-item-card">
        <div class="item-description">
          <titulo textoTitulo="Hot dog al Rey de los Piratas" :tamañotitulo="50"></titulo>
          <p>Un perro caliente legendario con salchicha de res, cebolla caramelizada, chucrut y una salsa especial de la Grand Line. ¡Suficiente para alimentar a toda una tripulación!</p>
        </div>
        <div class="item-image">
          <img src="https://imagenes.eltiempo.com/files/image_600_455/uploads/2022/09/29/633639c5bfb10.jpeg" alt="Perro Caliente del Rey de los Piratas" />
        </div>
      </div>

      <div class="menu-item-card reverse-layout">
        <div class="item-description">
          <titulo textoTitulo="Diable Jambe" :tamañotitulo="50"></titulo>
          <p>Creado por el mismísimo chef Sanji, este perro caliente lleva salchicha de cerdo, queso derretido, trozos de tocino crujiente y una mayonesa picante, ¡perfecto para conquistar cualquier corazón!</p>
        </div>
        <div class="item-image">
          <img src="https://media.elestimulo.com/uploads/2023/04/Perro-Caliente.jpg" alt="Perro de Sanji" />
        </div>
      </div>

      <div class="menu-item-card">
        <div class="item-description">
          <titulo textoTitulo="Shishi Sonson" :tamañotitulo="50"></titulo>
          <p>¡Atrévete ! Este triple perro caliente, que es triple porción, chili con carne y un toque de queso cheddar gratinado. Esta inspirado en zoro. ¡Atrévete a probarlo!</p>
        </div>
        <div class="item-image">
          <img src="https://assets-us-01.kc-usercontent.com/3b1720e5-a9aa-0088-f165-1043ab81f774/7efa1e30-1dab-49e4-bd5b-ba00614a98db/2023%200626_FJ_Social_July-283_web.jpg?w=1280&auto=format" alt="Perro de Luffy" />
        </div>
      </div>
      
      <div class="menu-item-card reverse-layout">
        <div class="item-description">
          <titulo textoTitulo="Salchipapas recuparador" :tamañotitulo="50"></titulo>
          <p>¡Un festín médico para el paladar! Crujientes papas fritas bañadas en una salsa de queso y trozos de salchicha, decoradas con hierbas frescas. ¡Tan reconfortante como un abrazo de Chopper!</p>
        </div>
        <div class="item-image">
          <img src="https://www.pequerecetas.com/wp-content/uploads/2023/05/salchipapas-receta.jpg" alt="Salchipapas de Chopper" />
        </div>
      </div>

      <div class="menu-item-card">
        <div class="item-description">
          <titulo textoTitulo="Salchipapas del Yonkou" :tamañotitulo="50"></titulo>
          <p>Un plato para verdaderos emperadores. Papas fritas gigantes con salchichas de la mejor calidad, bañadas en una salsa bbq ahumada y cebolla frita. ¡Tan imponente como un Yonkou!</p>
        </div>
        <div class="item-image">
          <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/04/1200/675/Taco-bell3-GettyImages-470408528.jpg?ve=1&tl=1" alt="Salchipapas del Yonkou" />
        </div>
      </div>

      <div class="menu-item-card reverse-layout">
        <div class="item-description">
          <titulo textoTitulo="Salchipapas la Isla del Cielo" :tamañotitulo="50"></titulo>
          <p>Ligeras como las nubes del cielo. Papas fritas extra crujientes y salchichas finamente cortadas, servidas con una salsa de ajo y perejil. ¡Un sabor que te hará volar!</p>
        </div>
        <div class="item-image">
          <img src="https://laparisienne.com.co/cdn/shop/articles/SALCHIPAPA_LA_PARISIENNE_CUADRADA.jpg?v=1682626308" alt="Salchipapas de la Isla del Cielo" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import titulo from '../components/Titulo.vue';
</script>

<style scoped>
.perros-y-salchipapas-page {
  padding: 20px;
}

.section-title {
  font-family: 'one piece', sans-serif;
  font-size: 4rem;
  color: #ff8c00;
  margin-bottom: 30px;
  text-align: center;
}

.menu-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center; /* Centra las tarjetas en el contenedor principal */
}

.menu-item-card {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px; /* Limita el ancho para que no se extiendan demasiado */
  width: 100%;
}

.menu-item-card.reverse-layout {
  flex-direction: row-reverse;
}

.item-description {
  flex: 1;
}

.item-image {
  flex-shrink: 0;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ff8c00;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>