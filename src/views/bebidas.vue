<template>
  <q-page class="bebidas-page">
    <h2 class="section-title">Navega por Nuestras Bebidas</h2>
    <p class="section-description">
      Descubre nuestra colección de bebidas refrescantes, inspiradas en las heroínas de la Grand Line. Cada sorbo es un viaje de sabores únicos y colores pastel.
    </p>

    <div class="bebidas-container">
      <div class="bebida-card nami-bg">
        <div class="bebida-content">
          <h3 class="bebida-name">Tornado de Nami</h3>
          <p class="bebida-description">
            Un refrescante y dulce tornado de mango y maracuyá, con un toque de jengibre. Su color naranja vibrante y su sabor picante te recordarán el espíritu aventurero de la navegante.
          </p>
        </div>
        <img src="../images/amarrilo.png" alt="Ilustración de Nami" class="personaje-icon nami-icon" />
      </div>

      <div class="bebida-card robin-bg">
        <div class="bebida-content">
          <h3 class="bebida-name">Flor de Robin</h3>
          <p class="bebida-description">
            Una elegante bebida de arándanos y lavanda, con una suave infusión de té de jazmín. Su color púrpura pastel evoca el misterio y la inteligencia de la arqueóloga.
          </p>
        </div>
        <img src="../images/morado.png" alt="Ilustración de Robin" class="personaje-icon robin-icon" />
      </div>

      <div class="bebida-card hancock-bg">
        <div class="bebida-content">
          <h3 class="bebida-name">Filtro de Hancock</h3>
          <p class="bebida-description">
            Una exótica mezcla de lichi, cereza y un toque de rosa. Este néctar rojo y rosado es tan cautivador y dulce como la emperatriz pirata, ¡te dejará petrificado!
          </p>
        </div>
        <img src="../images/rojo.png" alt="Ilustración de Hancock" class="personaje-icon hancock-icon" />
      </div>

      <div class="bebida-card perona-bg">
        <div class="bebida-content">
          <h3 class="bebida-name">Lágrimas de Perona</h3>
          <p class="bebida-description">
            Una bebida agridulce con sabor a limonada de fresa y un toque de frambuesa. Su color rosa chicle y su burbujeante textura te harán sentir su energía positiva... o su pesimismo.
          </p>
        </div>
        <img src="../images/rosa.png" alt="Ilustración de Perona" class="personaje-icon perona-icon" />
      </div>

      <div class="bebida-card vivi-bg">
        <div class="bebida-content">
          <h3 class="bebida-name">Brisa de Vivi</h3>
          <p class="bebida-description">
            Un suave batido de melón y menta. Su color verde menta y su frescura te recordarán a la brisa del desierto de Alabasta. Un sabor suave, ideal para una princesa.
          </p>
        </div>
        <img src="../images/azul.png" alt="Ilustración de Vivi" class="personaje-icon vivi-icon" />
      </div>

    </div>
  </q-page>
</template>

<script setup>
// No se necesita lógica adicional en el script
</script>

<style scoped>
.bebidas-page {
  padding: 30px;
  /* background-color: #f7f3e9; /* Un fondo crema muy suave */ 
  background-image: url('../images/collage_one.jpg');
  background-size: cover;
  background-position: top;
}

.section-title {
  font-family: 'one piece', sans-serif;
  font-size: 4rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.section-description {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto 50px auto;
}

.bebidas-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.bebida-card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  text-align: left;
}

.bebida-card:hover {
  transform: translateY(-10px);
}

.bebida-content {
    position: relative;
    z-index: 2;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.bebida-name {
    font-family: 'one piece', sans-serif;
    font-size: 2rem;
    margin: 0 0 10px 0;
}

.bebida-description {
    font-family: Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    margin: 0;
}

.personaje-icon {
    position: absolute;
    bottom: 0;
    right: -20px; /* Posicionamiento fuera del borde para un efecto dinámico */
    height: 120%;
    width: auto;
    opacity: 0.8;
    z-index: 1;
}

/* Colores de fondo para cada bebida */
.nami-bg {
  background: linear-gradient(135deg, #FFC107, #FFA500); /* Naranja */
}

.robin-bg {
  background: linear-gradient(135deg, #9C27B0, #E91E63); /* Púrpura */
}

.hancock-bg {
  background: linear-gradient(135deg, #F06292, #E91E63); /* Rosa */
}

.perona-bg {
  background: linear-gradient(135deg, #F8BBD0, #F48FB1); /* Rosa Chicle */
}

.vivi-bg {
  background: linear-gradient(135deg, #81C784, #4CAF50); /* Verde menta */
}
</style>