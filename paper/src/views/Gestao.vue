<template>
  <div>
    <SideBar />
    <h1>Gestão</h1>
    <router-link :to="{ name: 'Aprovar' }">Aprovar</router-link> |
    <router-link :to="{ name: 'Utilizadores' }">Utilizadores</router-link> |
    <router-link :to="{ name: 'Inscricoes' }">Inscrições</router-link> |
    <router-link :to="{ name: 'AdicionarDocentes' }"
      >Adicionar Docente</router-link
    >
    |
    <router-link :to="{ name: 'Prazos' }">Prazos</router-link>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>
