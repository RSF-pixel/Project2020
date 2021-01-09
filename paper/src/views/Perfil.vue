<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo">    
          <!-- Por fazer -->
          <div>Área de Perfil
            <router-link :to="{ name: 'Sair' }">Sair</router-link>
          </div>
          <!-- Por fazer -->
      </div>
    </div>
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
