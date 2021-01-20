<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <div class="area-navegacao-propostas d-flex justify-content-start align-items-center"> 
            <router-link :to="{name:'Propostas'}" class="lista-propostas-link-a">
              <button class="lista-propostas-link-btn d-flex align-items-center fundo-dd borda-solida borda-w05 borda-aa borda-r5 opensans-sb fonte-14">
                <svg id="voltar2-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="14.667" viewBox="0 0 22 14.667"><path class="a" d="M7.334,15v3.667L0,11.333,7.334,4V7.667h8.185c8.3,0,6.54,8.728,5.806,10.467C20.6,15.892,19.066,15,16.4,15H7.334Z" transform="translate(0 -4)"/></svg>
                <a>Retornar</a>
              </button>
            </router-link>
          </div>
        </div>



        <div class="anim-sombra-area-conteudo fundo-f4 borda-r5 sombra-area-conteudo padding-all8">
          <b-row class="width-100 sem-margens">
            <b-col align-self="baseline" sm="3" class="sem-padding">
              <div class="mukta-m font-16 align-left weight-500 width-100">Título da proposta</div>
              <b-form-input
                v-model="form.tituloProposta"
                class="opensans-l font-12 width-100"
                type="text"
                required
                placeholder="Aplicação de maratonas (Obrigatório)"
                size="sm"
              />
            </b-col>
            <b-col align-self="baseline" sm="3" class="sem-padding margem-l32" style="text-align: left;">
              <div class="mukta-m font-16 align-left weight-500 width-100">Tipo da proposta</div>
              <b-form-select v-model="form.tipoProposta" :options="options" class="width-50"></b-form-select>
            </b-col>
            <b-col align-self="stretch">
              <div style="width: 100%; height: 100%; backgroung-color: #fff;"></div>
            </b-col>
          </b-row>
          <b-row class="width-100 sem-margens margem-t15">
            <b-col sm="3" class="sem-padding">
              <div class="mukta-m font-16 align-left weight-500 width-100">Objetivos e descrição da proposta</div>
              <b-form-textarea
                id="textarea"
                v-model="form.descricaoProposta"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Descreva sucintamente os objetivos do projeto e as principais atividades que o compõem. (Obrigatório)"
              ></b-form-textarea>
            </b-col>
            <b-col sm="3" class="sem-padding margem-l32" style="text-align: left;">
              <div class="mukta-m font-16 align-left weight-500 width-100">Plano provisório de trabalho</div>
              <b-form-textarea
                id="textarea"
                v-model="form.planoProvisorio"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Resuma o plano de trabalhos ao longo das 15 semanas do estágio/projeto. (Obrigatório)"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="width-100 sem-margens margem-t15">
            <b-col sm="3" class="sem-padding">
              <div class="mukta-m font-16 align-left weight-500 width-100">Resultados esperados</div>
              <b-form-textarea
                id="textarea"
                v-model="form.resultadosEsperados"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Descreva o que pretende obter no final do estágio/projeto. (Obrigatório)"
              ></b-form-textarea>
            </b-col>
            <b-col sm="3" class="sem-padding margem-l32" style="text-align: left;">
              <div class="mukta-m font-16 align-left weight-500 width-100">Perfil do candidato desejado</div>
              <b-form-textarea
                id="textarea"
                v-model="form.perfilDesejado"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Perfil desejado do candidato (competências, entre outras). (Obrigatório)"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-row class="width-100 sem-margens margem-t15">
            <b-col sm="3" class="sem-padding">
              <div class="mukta-m font-16 align-left weight-500 width-100">Outros dados relevantes</div>
              <b-form-textarea
                id="textarea"
                v-model="form.outrosDados"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Exemplo: o estudante tem que estar disponível aos fins de semana."
              ></b-form-textarea>
            </b-col>
            <b-col sm="3" class="sem-padding margem-l32" style="text-align: left;">
              <div class="mukta-m font-16 align-left weight-500 width-100">Recursos necessários</div>
              <b-form-textarea
                id="textarea"
                v-model="form.recursosNecessarios"
                class="opensans-l font-12 width-100 height-150"
                placeholder="Descreva necessidades específicas para o projeto como hardware e software necessário. (Obrigatório)"
              ></b-form-textarea>
            </b-col>
          </b-row>
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
  },
  data() {
    return {
      form: {
        tituloProposta: '',
        tipoProposta: 0,
        descricaoProposta: '',
        planoProvisorio: '',
        resultadosEsperados: '',
        perfilDesejado: '',
        outrosDados: '',
        recursosNecessarios: ''
      },
      options: [
        { value: 0, text: 'Seleccione' },
        { value: 1, text: 'Estágio' },
      ],
    }
  }
};
</script>

<style>

.area-navegacao-propostas a{color: #000000 !important; text-decoration: none;}
.lista-propostas-link-btn{ height: 42px; padding: 0px 10px;  }
.lista-propostas-link-btn:hover a{ color: #707070 !important; }
.form-criar-proposta{width: 100%;}

</style>
