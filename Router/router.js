import Presentacion from "../src/views/Presentacion.vue";
import hamburguesas from "../src/views/hamburguesas.vue";
import perrosysalchi from "../src/views/perrosysalchi.vue";
import bebidas from "../src/views/bebidas.vue";
import extras from "../src/views/extras.vue";
import {createRouter, createWebHashHistory} from "vue-router"

  ///presentacion

const routes = [
  { path: "/", component: Presentacion },
  { path: "/hamg", component:hamburguesas},
  { path: "/perrosysalchi", component:perrosysalchi},
  { path: "/bebidas", component:bebidas},
  { path: "/extras", component:extras}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})