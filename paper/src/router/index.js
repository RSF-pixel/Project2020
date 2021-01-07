import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Autenticacao from "../views/Autenticacao.vue";
import Registar from "../views/Registar.vue";
import Propostas from "../views/Propostas.vue";
import Gestao from "../views/Gestao.vue";
import Agenda from "../views/Agenda.vue";
import Perfil from "../views/Perfil.vue";
import GestaoP from "../views/propostas/GestaoP.vue";
import Submeter from "../views/propostas/Submeter.vue";
import Aprovar from "../views/gestao/Aprovar.vue";
import Utilizadores from "../views/gestao/Utilizadores.vue";
import Inscricoes from "../views/gestao/Inscricoes.vue";
import AdicionarDocentes from "../views/gestao/AdicionarDocentes.vue";
import Prazos from "../views/gestao/Prazos.vue";
import Sair from "../views/Sair.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/autenticacao",
    name: "Autenticacao",
    component: Autenticacao
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
  },
  {
    path: "/propostas/gestao",
    name: "GestaoP",
    component: GestaoP
  },
  {
    path: "/propostas/submeter",
    name: "Submeter",
    component: Submeter
  },
  {
    path: "/gestao/aprovar",
    name: "Aprovar",
    component: Aprovar
  },
  {
    path: "/gestao/utilizadores",
    name: "Utilizadores",
    component: Utilizadores
  },
  {
    path: "/gestao/incricoes",
    name: "Inscricoes",
    component: Inscricoes
  },
  {
    path: "/gestao/adicionardocentes",
    name: "AdicionarDocentes",
    component: AdicionarDocentes
  },
  {
    path: "/gestao/prazos",
    name: "Prazos",
    component: Prazos
  },
  {
    path: "/sair",
    name: "Sair",
    component: Sair
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;