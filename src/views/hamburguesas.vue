<template>
    <q-page class="hamburguesas-page">
        <div class="hamburguesas-container">
        <div class="left-section">
            <titulo textoTitulo="Hamburguesas" :tamañotitulo="150"></titulo>
            <h2>¡Deléitate con nuestras Hamburguesas! 🍔</h2>
            <p class="description-text">  Prepara tus papilas gustativas para un viaje de sabor. A continuación, te presentamos el menú de nuestras hamburguesas, cada una creada con ingredientes frescos y el toque especial de la casa. ¡Elige tu favorita y haz que tu antojo se haga realidad!</p>
            
            <div class="cards-grid">
                <div class="card-item">
                    <card :burger="burger1"></card>
                </div>
                <div class="card-item">
                    <card :burger="burger2"></card>
                </div>
                <div class="card-item">
                    <card :burger="burger2"></card>
                </div>
                <div class="card-item">
                    <boton > mesita </boton>
                </div>
                <div class="card-item">
                </div>
                <div class="card-item">
                </div>
                <img src="https://i.pinimg.com/1200x/dc/9c/9c/dc9c9cfa81027d6160c0b39ac30413eb.jpg" alt="Personaje 1" class="character-small"/>
                <img src="https://i.pinimg.com/736x/20/f9/23/20f923de803cdd263aaf7ea087999650.jpg" alt="Personaje 2" class="character-small"/>
                <img src="https://i.pinimg.com/1200x/d4/e0/7a/d4e07a28674a2e57853ab0e1943bdc74.jpg" alt="Personaje 3" class="character-small"/>
                <img src="https://i.pinimg.com/1200x/fb/af/c2/fbafc204872e60353b6e09444d95d3fe.jpg" alt="Personaje 4" class="character-small"/>
                <img src="https://i.pinimg.com/736x/69/04/d0/6904d09c6c0f0ebdbbc2fdc503f1f3d4.jpg" alt="Personaje 5" class="character-small"/>
                <img src="https://i.pinimg.com/1200x/b2/89/65/b28965062c1410f521e44bece7e531b0.jpg" alt="Personaje 6" class="character-small"/>
            </div>
        </div>

        <div class="right-section">
            <img src="../images/sanji.png" alt="Sanji" class="sanji-character"/>
        </div>
        </div>
    </q-page>
</template>

<script setup>
import titulo from '../components/Titulo.vue';
import boton from '../components/boton.vue';
import card from '../components/card.vue';

const burger1 = {
    name: "Hamburguesa Mugiwara",
    description: "Una jugosa hamburguesa con carne a la parrilla, queso del East Blue...",
    price: "$25.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://i.pinimg.com/736x/7b/13/8b/7b138bfe0e3d82eabb964291d3a7408a.jpg" 
};

const burger2 = {
    name: "Hamburguesa Zoro",
    description: "Una poderosa hamburguesa con doble carne, tocino, y un toque picante...",
    price: "$30.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://i.pinimg.com/736x/7b/13/8b/7b138bfe0e3d82eabb964291d3a7408a.jpg" 
};

const burger3 = {
    name: "Hamburguesa Sanji",
    description: "Un plato exquisito con carne de alta calidad, aros de cebolla y una salsa de ajo especial...",
    price: "$28.000",
    image: "URL_IMAGEN_HAMBURGUESA3",
    background: "URL_IMAGEN_SANJI"
};
</script>

<style scoped>
.hamburguesas-page {
    padding: 20px;
    background-color: url("https://i.pinimg.com/1200x/c7/7a/22/c77a225014b36723781bb6dff623e800.jpg");
}

.hamburguesas-container {
    display: flex;
    gap: 20px;
}

.left-section {
    flex: 3; 
}

.hamburguesas-title {
    font-family: 'one piece', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.description-text {
    font-size: 1rem;
    margin-bottom: 20px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    position: relative;
}

.card-item {
    border: 2px solid #8B0000; 
}

.character-small {
    position: relative;
    width: 40px; /* Tamaño de los círculos en el boceto */
    height: 40px;
    border-radius: 50%; /* Para que la imagen sea un círculo */
    /* Posicionamiento relativo a cada carta */
    /* Esto requeriría posicionamiento individual, aquí es un ejemplo */
}

.right-section {
    flex: 1; 
}

.sanji-character {
    width: 100%;
    height: auto;
    justify-content: end;
}
</style>