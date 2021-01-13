<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo ajuste-f anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo">    
          <!-- Por fazer -->
          <div class="area-utilizador d-flex padding-all8">
            <div class="area-utilizador-perfilenotificacoes">
                <div class="area-perfil">
                  <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="perfil-conteudo">Perfil do utilizador</label>  
                  <div class="area-perfil-conteudo" name="perfil-conteudo">
                    <a>{{obterInfoUtilizador.nome + ' ' + obterInfoUtilizador.apelido}}</a>
                    <!--<router-link @click.native="desconectar" :to="{name:'Autenticacao'}">Sair</router-link>-->
                  </div>
                </div>
              <div class="area-notificacoes">
                <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="notificacoes-conteudo">Notificações</label>
                <div class="area-notificacoes-conteudo" name="notificacoes-conteudo">
                  <a>Tabela por fazer</a>
                </div>
              </div>
            </div>
            <div class="area-definicoes">
              <label class="area-label fonte-24 mukta-m cor-20 padding-l8 sem-margens" for="definicoes-conteudo">Definições</label>
              <div class="area-definicoes-conteudo fundo-ff borda-solida borda-w05 borda-aa borda-r5" name="definicoes-conteudo">
                <form action="">
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Alterar a palavra passe</label>
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="password" placeholder="Palavra-passe atual">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="password" placeholder="Nova palavra-passe">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="password" placeholder="Repita a nova palavra-passe">
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Redes sociais</label>
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="link" placeholder="Insira o link para o seu Facebook">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="link" placeholder="Insira o link para o seu GitHub">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="link" placeholder="Insira o link para o seu Instagram">
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens margem-t7" type="text" placeholder="Insira o nome de utilizador">
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Portólio do utilizador</label>
                  <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="link" placeholder="Insira o link do seu portfólio">
                  <label class="area-label fonte-18 mukta-m cor-20 padding-l8 sem-margens margem-t7" for="">Currículo do utilizador</label>
                  <button>Adicione um ficheiro .pdf</button>
                  <div>
                    <button>Guardar</button>
                    <button>Anular</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Por fazer -->
      </div>
    </div>
  </div>
</template>
<style>
.area-utilizador{width: 100%; height: auto;}
.area-utilizador-perfilenotificacoes{width: calc(100% - 256px); height: auto; margin-right: 16px;}
.area-perfil{background-color: green; width: 100%; height: 50%;}
.area-notificacoes{background-color: red; width: 100%; height: 50%;}
.area-definicoes{background-color: blue; width: 256px; height: auto;}
.area-perfil-conteudo{height: calc(100% - 36px); background-color: yellow ;}
.area-notificacoes-conteudo{height: calc(100% - 36px); background-color: pink;}
.area-definicoes-conteudo{height: calc(100% - 36px);}
.area-label{text-align: left; width: 100%;}
.ajuste-f{min-height: 644px;}
</style>
<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "Perfil",
  methods:{
    desconectar(){
      this.$store.dispatch("desconectar")
    },
    editarPerfil(){
      
    }
  },
  components: {
    SideBar
  },
  computed:{
    obterInfoUtilizador(){
      return this.$store.getters.obterUtilizadorAutenticado;
    }
  }
};
</script>
