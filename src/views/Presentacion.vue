<template>
    <div class="body">
        <div class="arriba">
            <div>
                <titulo textoTitulo="One Piece" :tamañotitulo="150"></titulo>
                <logo></logo>
            </div>
            <div>
                <carucel :imagenes="imagenesArray" class="error" />
            </div>
        </div>


        <div class="medio">
            <div>
                <h2>¡Bienvenidos a su nueva experiencia de sabor!</h2>
            </div>
            <div class="part2">
                <div>
                    <img class="comi" src="https://img.freepik.com/foto-gratis/arreglo-vista-arriba-comida-sobre-fondo-madera_23-2148308806.jpg?semt=ais_hybrid&w=740&q=80" >
                    <img src="../images/chopper.png" class="chooper"></img>
                </div>
                <div>
                    <p> 
                        En One Piece, creemos que la comida rápida no tiene por qué ser aburrida. 
                    </p><p>
                        Nos dedicamos a elevar tus comidas favoritas a un nuevo nivel, combinando la velocidad y conveniencia que buscas con la calidad y el sabor que mereces.
                        Cada hamburguesa, cada porción de papas y cada [otro producto destacado] se prepara con ingredientes frescos y seleccionados, diseñados para deleitar tu paladar. Nuestro menú está pensado para que encuentres tu antojo perfecto, ya sea que busques algo clásico y reconfortante o una opción atrevida y llena de sabor.
                        Únete a nosotros y descubre por qué somos más que una simple parada: somos el destino para los verdaderos amantes de la buena comida. ¡Explora nuestro menú y déjate llevar por una explosión de sabor que te hará volver por más!
                    </p>
                </div>
            </div>

            
        </div>

        <div class="abajo">
            <carucel :imagenes="iamgenes2" />
        </div>
    </div>
</template>

<script setup>
import carucel from '../components/carrusel.vue'
import logo from '../components/logo.vue';
import titulo from '../components/Titulo.vue';
const imagenesArray = [
    "https://www.saborusa.com/wp-content/uploads/2019/10/hamburguesa_queso.png",
    "https://images.rappi.com/restaurants_background/35338a27-fd1e-4116-bb21-3bf3d5671891-1742267026588.jpeg",
    "https://img.freepik.com/fotos-premium/concepto-sabrosa-comida-rapida-cerrar_185193-47669.jpg"
]
const iamgenes2=[
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1ssKrh.img?w=800&h=415&q=60&m=2&f=jpg",
    "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/42Q6QIMLB5F3JPEXQWI6VV7PQ4.jpg",
    "https://okdiario.com/img/2024/10/06/comidas-rapidas-y-balanceadas_-resuelvelas-en-menos-de-20-minutos.jpg"
]
</script>

<style>
.body{
    padding: 3%;
    background-image: url("https://i.pinimg.com/1200x/c7/7a/22/c77a225014b36723781bb6dff623e800.jpg");
    background-repeat:no-repeat;
    background-size: 2200px;
    background-position: bottom;
    /* background-attachment: fixed; */

}

#logo{
    position: relative; /* esto era absoluta, pero lo puse relative */
    left: 320px;
    bottom: 245px;/*  esto estaba en 260 */
}
.arriba{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}
/* .arriba .titulos {
    height: 600px;
} */
.arriba .q-carousel{
    
    WIDTH: 100vh;
    height: auto;
}
.medio h2{
    width: 50%; 
}
.medio .part2{
    display: flex;
    justify-content: space-between;
    gap: 80px;
    height: 500px;
}
.medio .part2 p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
}
.medio .part2 .comi{
    width: 500px;
    height: 400px;
}
.chooper{
    position: relative;
    left: 15px;
    bottom: 200px;
    height: auto;
    width: 150px;
}
.abajo{
    width: 100%;
}
.abajo .q-carousel{
    WIDTH: 100%;
    height: auto;
}
</style> 