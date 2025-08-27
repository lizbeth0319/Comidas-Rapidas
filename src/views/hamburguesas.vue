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
                    <card :burger="burger3"></card>
                </div>
                <div class="card-item">
                    <card :burger="burger4"></card>
                </div>
                <div class="card-item">
                    <card :burger="burger5"></card>
                </div>
                <div class="card-item">
                    <card :burger="burger6"></card>
                </div>
                

            </div>
        </div>

        <div class="right-section">
           <!--  <img src="../images/sanjimes.jpg" alt="Sanji" class="sanji-character"/> -->
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
    background: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/Doble-napo-1024x1024.png" 
};

const burger2 = {
    name: "Hamburguesa Zoro",
    description: "Una poderosa hamburguesa con doble carne, tocino, y un toque picante...",
    price: "$30.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.bo/wp-media-folder-burger-king-bolivia//home/ubuntu/wordpress/web/app/uploads/sites/9/bacon-king-doble.png" 
};

const burger3 = {
    name: "Hamburguesa Sanji",
    description: "Un plato exquisito con carne de alta calidad, aros de cebolla y una salsa de ajo especial...",
    price: "$28.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/Doble-queso-1.png"
};

const burger4 = {
    name: "Hamburguesa Usopp",
    description: "Una hamburguesa con un toque de humor y muchos sabores. Incluye una mezcla de vegetales crujientes y una salsa agridulce. ¡Un verdadero tesoro!",
    price: "$22.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://bk-latam-prod.s3.amazonaws.com/sites/burgerking.latam/files/product_detail_steakhousedoritos1-050916.png"
};

const burger5 = {
    name: "Hamburguesa Chopper",
    description: "Una hamburguesa pequeña pero con un gran corazón. Lleva carne de pollo, queso y un pan suave. ¡Una comida que te hará feliz y fuerte!",
    price: "$18.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/2022/03/Mega-Stacker-x1.png"
};
const burger6 = {
    name: "Hamburguesa Franky",
    description: "Una hamburguesa súper poderosa con un pan de ajonjolí, dos porciones de carne, tocino, queso derretido y un toque de salsa picante.",
    price: "$35.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzyFr9kf2Wl4B6EdtZhzEUdq9M0P4N9elQVHwNYsxnCUbvtQY0UUjBgx5AURR_tX27N0&usqp=CAU",
    background: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.uy/wp-media-folder-bk-uruguay//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/27/Mega-Stacker-4.0.png"
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
    background-image: url('../images/sanjimes.jpg');
    background-size: cover;
    background-position: center;
}

.sanji-character {
    width: 100%;
    height: auto;
    justify-content: end;
}
</style>