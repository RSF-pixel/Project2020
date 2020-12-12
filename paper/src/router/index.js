import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Entrar from "../views/Entrar.vue";
import Registar from "../views/Registar.vue";
import Propostas from "../views/Propostas.vue";
import Gestao from "../views/Gestao.vue";
import Agenda from "../views/Agenda.vue";
import Perfil from "../views/Perfil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/entrar",
    name: "Entrar",
    component: Entrar
  },
  {
    path: "/registar",
    name: "Registar",
    component: Registar
  },
  {
    path: "/propostas",
    name: "Propostas",
    component: Propostas
  },
  {
    path: "/gestao",
    name: "Gestao",
    component: Gestao
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
