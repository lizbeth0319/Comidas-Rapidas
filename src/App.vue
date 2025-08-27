<template>
  <q-layout view="hhh lpR fff">
    <q-header reveal bordered class="custom-header"  height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/136482269_78203caf-8121-451e-8983-b985b8b52f4e.svg">
          </q-avatar>
          <div class="titulo">Title</div>
        </q-toolbar-title>
      </q-toolbar>

        <q-tabs align="left" class="carpeta">
        <q-route-tab to="/">
          <img src="./images/comida-rapida.png" style="width: 24px; height: 24px;" alt="Presentación" />
        </q-route-tab>
        <q-route-tab to="/hamg">
          <img src="./images/hamburgesa.png" style="width: 24px; height: 24px;" alt="Página Dos" />
        </q-route-tab>
        <q-route-tab to="/perrosysalchi">
          <img src="./images/pancho.png" style="width: 24px; height: 24px;" alt="Página Tres" />
        </q-route-tab>
        <q-route-tab to="/bebidas">
          <img src="./images/bebida-fria.png" style="width: 24px; height: 24px;" alt="Página Tres" />
        </q-route-tab>
        <q-route-tab to="/extras">
          <img src="./images/pancho.png" style="width: 24px; height: 24px;" alt="Página Tres" />
        </q-route-tab>
      </q-tabs>
      
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="custom-header">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/136482269_78203caf-8121-451e-8983-b985b8b52f4e.svg">
          </q-avatar>
          <div class="titulo">Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
@font-face {
  font-family: 'one piece'; 
  src: url('../assets/fonts/one piece font.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
  .titulo {
  font-family: 'one piece';
  }

  .custom-header{
    background-image: url("https://ih1.redbubble.net/image.4484953475.4559/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp");
    background-size:auto;
    background-position: center;
    color: white; 
  }
  .carpeta{
    width: auto;
    border: 2px ;
    margin: 2px solid #ffffff;
  }
</style>

<style scoped>
  .q-tabs {
    width: 500px;
    background-color: rgb(255, 255, 255);
    border: 1px solid white;
    border-radius: 25px 25px 0 0;
  }
  .q-tab{
    color: blue;
  }
</style>