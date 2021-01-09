<template>
  <div>
    <SideBar />
    <!-- Temporary REMOVE LATER -->
    <h1>Aprovar Propostas</h1>
    <router-link :to="{ name: 'Aprovar' }">Aprovar</router-link> |
    <router-link :to="{ name: 'Utilizadores' }">Utilizadores</router-link> |
    <router-link :to="{ name: 'Inscricoes' }">Inscrições</router-link> |
    <router-link :to="{ name: 'AdicionarDocentes' }"
      >Adicionar Docente</router-link
    >
    |
    <router-link :to="{ name: 'Prazos' }">Prazos</router-link>
    <div>
      <Tabela />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import Tabela from "@/components/Tabela.vue"
export default {
  components: {
    SideBar,
    Tabela,
  },
};
</script>
