<template>
  <!-- REMOVE LATER! -->
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div
          class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo"
        >
          <h1>Prazos</h1>
          <router-link :to="{ name: 'Aprovar' }"
            ><div><a>Aprovar</a></div></router-link
          >
          |
          <router-link :to="{ name: 'Utilizadores' }"
            ><div><a>Utilizadores</a></div></router-link
          >|
          <router-link :to="{ name: 'Inscricoes' }"
            ><div><a>Inscrições</a></div></router-link
          >
          |
          <router-link :to="{ name: 'AdicionarDocentes' }"
            ><div><a>Adicionar Docente</a></div></router-link
          >
        </div>
        <div
          class="area-conteudo-se-navegador anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo"
        >
          <!-- Por fazer -->
          <div>Área de Gestão (precisamos tabelas)</div>
          <Tabela />
          <!-- Por fazer -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabela from "@/components/Tabela.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar,
    Tabela,
  },
};
</script>
