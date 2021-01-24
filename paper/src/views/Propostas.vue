<template>
<div class="view d-flex">
    <SideBar/>
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <div class="area-pesquisa-propostas">
            <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" placeholder="Escreva alguma coisa...">
            <select class="select-pesquisa-proposta cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" name="" id="">
              <option value="" disabled selected>Tipo de Proposta</option>
            </select>
          </div>
          <div class="area-navegacao-propostas d-flex justify-content-start align-items-center">
            <router-link :to="{name:'GestaoP'}" class="gerir-propostas-link-a">
              <button class="gerir-propostas-link-btn d-flex align-items-center fundo-40 borda-solida borda-w05 borda-20 borda-r5 opensans-sb fonte-14">
              <svg id="gerir-propostas-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 19 19.67"><path class="cls-1" d="M18.5,6.83H1.5a1,1,0,0,0-1,1v4.34a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V7.83A1,1,0,0,0,18.5,6.83ZM2.82,10.91a.41.41,0,0,1-.41.41H1.9a.41.41,0,0,1-.41-.41V9.06a.41.41,0,0,1,.41-.41h.51a.41.41,0,0,1,.41.41Zm3.69,0a.41.41,0,0,1-.41.41H4.25a.41.41,0,0,1-.41-.41V9.09a.42.42,0,0,1,.41-.41H6.1a.41.41,0,0,1,.41.41Z" transform="translate(-0.5 -0.17)"/><path class="cls-1" d="M18.5,13.5H1.5a1,1,0,0,0-1,1v4.33a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V14.5A1,1,0,0,0,18.5,13.5ZM2.82,17.58a.4.4,0,0,1-.41.4H1.9a.4.4,0,0,1-.41-.4V15.73a.41.41,0,0,1,.41-.41h.51a.41.41,0,0,1,.41.41Zm3.69,0A.41.41,0,0,1,6.1,18H4.25a.42.42,0,0,1-.41-.41V15.76a.41.41,0,0,1,.41-.41H6.1a.41.41,0,0,1,.41.41Z" transform="translate(-0.5 -0.17)"/><path class="cls-1" d="M18.5.17H1.5a1,1,0,0,0-1,1V5.5a1,1,0,0,0,1,1h17a1,1,0,0,0,1-1V1.17A1,1,0,0,0,18.5.17ZM2.82,4.24a.41.41,0,0,1-.41.41H1.9a.41.41,0,0,1-.41-.41V2.39A.41.41,0,0,1,1.9,2h.51a.41.41,0,0,1,.41.41Zm3.69,0a.41.41,0,0,1-.41.41H4.25a.41.41,0,0,1-.41-.41V2.42A.41.41,0,0,1,4.25,2H6.1a.4.4,0,0,1,.41.4Z" transform="translate(-0.5 -0.17)"/></svg>
              <a>Gerir Propostas</a></button></router-link>
            <router-link :to="{name:'CriarProposta'}" class="criar-proposta-link-a">
              <button class="criar-proposta-link-btn d-flex align-items-center fundo-0084c0 borda-solida borda-w05 borda-004666 borda-r5 opensans-sb fonte-14">
              <svg id="criar-proposta-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="22px" viewBox="0 0 23.31 23.41"><path d="M14.8,4.9a1,1,0,0,0-1.4,0L1.7,16.7a2.19,2.19,0,0,0-.3.5L.3,22.6a1.06,1.06,0,0,0,1.2,1.2l5.4-1.1a.55.55,0,0,0,.5-.3L19.1,10.7a1,1,0,0,0,0-1.4Zm.4,3L4.5,18.6a.48.48,0,0,1-.7,0l-.2-.2a.48.48,0,0,1,0-.7L14.3,7A.48.48,0,0,1,15,7l.2.2A.48.48,0,0,1,15.2,7.9Z" transform="translate(-0.29 -0.4)"/><path d="M23.3,5,19,.7a1,1,0,0,0-1.4,0L16.2,2.1a1,1,0,0,0,0,1.4l4.3,4.3a1,1,0,0,0,1.4,0l1.4-1.4A1,1,0,0,0,23.3,5Z" transform="translate(-0.29 -0.4)"/></svg>
              <a>Criar uma proposta</a></button></router-link>
          </div>
        </div>
        <div class="area-conteudo-se-navegador anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo">
          <div class="area-selecao-proposta">
            <!-- Cards das propostas -->
          </div>
          <div class="area-proposta-selecionada d-flex flex-wrap">
            <div class="info-proposta-principal fundo-ff borda-solida borda-r5 borda-w05 borda-aa">
              <!-- Lista dos dados da proposta com h1 e p-->
            </div>
            <div class="info-proposta-secundaria d-flex flex-wrap fundo-ff borda-solida borda-r5 borda-w05 borda-aa">
              <div class="dados-empresa fundo-f4 borda-r5 sombra-caixa-detalhes">
                <!-- Empresa (nome) -->
              </div>
              <div class="dados-empresa fundo-f4 borda-r5 sombra-caixa-detalhes">
                <!-- Morada -->
              </div>
              <div class="dados-empresa fundo-f4 borda-r5 sombra-caixa-detalhes">
                <!-- Website -->
              </div>
            </div>
            <div class="info-proposta-terciaria d-flex flex-wrap fundo-ff borda-solida borda-r5 borda-w05 borda-aa">
              <div class="info-proposta-e-tutor fundo-f4 borda-r5 sombra-caixa-detalhes">
                <div class="info-proposta-selecionada"> 
                  <!-- Nome e tipo de proposta (label) -->
                  <!-- Título (p)-->
                  <!-- Tipo de proposta entre () (p) -->
                </div>
                <div class="info-tutor-selecionada"> 
                  <!-- Tutor e cargo na empresa (label) -->
                  <!-- Nome do tutor (p)-->
                  <!-- Cargo entre () (p) -->
                </div>
                <!-- Um botão para inscrever-->
              </div>
            </div>
          </div>
        </div>
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
<style>
.area-pesquisa-propostas input, .area-pesquisa-propostas select, .area-navegacao-propostas button{margin: 4px 4px;}
.area-navegacao-propostas a {color: #eeeeee !important; text-decoration: none;}
.select-pesquisa-proposta{width: 152px; background-position-x: 128px; margin: 4px 4px;}
.gerir-propostas-link-btn, .criar-proposta-link-btn{height: 42px; padding: 0px 10px;}
.area-navegacao-propostas button a{text-decoration: none; padding-left: 10px;}
#gerir-propostas-svg, #criar-proposta-svg{fill: #eeeeee;}
.gerir-propostas-link-btn:hover a{color: #707070 !important;}
.gerir-propostas-link-btn:hover #gerir-propostas-svg{fill: #707070;}
.criar-proposta-link-btn:hover a{color: #004666 !important;}
.criar-proposta-link-btn:hover #criar-proposta-svg{fill: #004666;}
.area-selecao-proposta, .area-proposta-selecionada{width: 50%; margin: 8px 8px;}
.area-selecao-proposta{overflow: auto;}
.info-proposta-principal{height: 60%; width: 100%; margin-bottom: 16px;}
.info-proposta-secundaria{height: calc(40% - 16px); width: calc(50% - 8px); margin-right: 16px;}
.info-proposta-terciaria{height: calc(40% - 16px); width: calc(50% - 8px);}
.dados-empresa{height: auto; width: 100%; margin: 4px 4px;}
.info-proposta-e-tutor{height: 72%; width: 100%; margin: 4px 4px;}
.info-proposta-selecionada, .info-tutor-selecionada{height: 50%;}
</style>
