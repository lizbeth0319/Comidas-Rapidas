<template>
    <q-page>
        <h2 class="section-title">Algunos de nuestros platillos especiales</h2>
        <div class="menu-grid">
            <SlideCard :burger="burger1" />
            <SlideCard :burger="burger2" :isReverse="true" />
            <SlideCard :burger="burger3" />
            <SlideCard :burger="burger4" :isReverse="true" />
        </div>
    </q-page>
</template>

<script setup>
import SlideCard from '../components/extra.vue'; // Asegúrate de que la ruta sea correcta

const burger1 = {
  name: "Hamburguesa Mugiwara",
  description: "¡Un festín digno del Capitán! Una jugosa hamburguesa con carne a la parrilla, queso del East Blue, lechuga Grand Line y nuestra salsa secreta del Rey de los Piratas. ¡GOMU GOMU NO... DELICIA!",
  price: "$25.000",
  image: "https://i.pinimg.com/736x/05/d2/b8/05d2b891a6a64e1737b7db0880479ebb.jpg",
};

const burger2 = {
  name: "Postre Torao",
  description: "Un postre que opera en el corazón. Deliciosos aros de chocolate negro y blanco, rellenos de crema de cereza y un toque de arándanos, que te harán viajar a la Isla de Punk Hazard. ¡ROOM!",
  price: "$30.000",
  image: "https://i.pinimg.com/736x/c9/78/c3/c978c33fa9819cef2dbec8dbf6bbb20b.jpg",
};
const burger3 = {
  name: "Ramen Chopper",
  description: "¡Una sopa medicinal que cura el alma! Nuestro ramen especial con fideos frescos, caldo de huesos, huevo de corral y trozos de carne, perfecto para recuperar energías en el frío invierno de Drum Island.",
  price: "$30.000",
  image: "https://i.pinimg.com/736x/f0/d9/5c/f0d95c2d8931475584b8ef8b5b24d57c.jpg",
};
const burger4 = {
  name: "Postre Akuma no Mi",
  description: "¡Prueba el poder de las Frutas del Diablo! Un pastel de frutas exóticas con un glaseado púrpura y el patrón característico de la fruta, con un sabor tan impactante que te hará sentir invencible. ¡Pero cuidado, es un manjar del mar!",
  price: "$30.000",
  image: "https://i.pinimg.com/1200x/ff/62/70/ff62700c35767f25ee10cec0405dea2c.jpg",
};


</script>

<style scoped>
h2{
    font-family: 'one piece', sans-serif;
}
.menu-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>