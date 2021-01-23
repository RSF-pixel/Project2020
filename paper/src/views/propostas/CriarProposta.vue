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

        <div class="d-flex justify-content-between anim-sombra-area-conteudo fundo-f4 borda-r5 sombra-area-conteudo padding-all8">
          <div class="d-flex flex-column width-55">
            <div class="d-flex align-align-items-start sem-margens width-100">
              <div class="sem-padding width-50">
                <div class="mukta-m font-16 align-left weight-500">Título da proposta</div>
                <b-form-input
                  v-model="form.tituloProposta"
                  class="opensans-l font-12"
                  type="text"
                  required
                  placeholder="Aplicação de maratonas (Obrigatório)"
                  size="sm"
                  
                />
              </div>
              <div class="sem-padding margem-l16 width-25">
                <div class="mukta-m font-16 align-left weight-50">Tipo da proposta</div>
                <b-form-select v-model="form.tipoProposta" :options="options" @change = "onChangeTipo"></b-form-select>    
              </div>
            </div>
            <div class="d-flex sem-margens width-100 margem-t15">
              <div class="sem-padding width-50">
                <div class="mukta-m font-16 align-left weight-500 width-100">Objetivos e descrição da proposta</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.descricaoProposta"
                  class="opensans-l font-12 width-100 height-150"
                  placeholder="Descreva sucintamente os objetivos do projeto e as principais atividades que o compõem. (Obrigatório)"
                ></b-form-textarea>
              </div>
              <div class="sem-padding margem-l32 width-50">
                <div class="mukta-m font-16 align-left weight-500 width-100">Plano provisório de trabalho</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.planoProvisorio"
                  class="opensans-l font-12 width-100 height-150"
                  placeholder="Resuma o plano de trabalhos ao longo das 15 semanas do estágio/projeto. (Obrigatório)"
                ></b-form-textarea>
              </div>
            </div>
            <div class="d-flex sem-margens width-100 margem-t15">
              <div class="sem-padding width-50">
                <div class="mukta-m font-16 align-left weight-500">Resultados esperados</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.resultadosEsperados"
                  class="opensans-l font-12 height-150"
                  placeholder="Descreva o que pretende obter no final do estágio/projeto. (Obrigatório)"
                ></b-form-textarea>
              </div>
              <div class="sem-padding margem-l32 width-50">
                <div class="mukta-m font-16 align-left weight-500">Perfil do candidato desejado</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.perfilDesejado"
                  class="opensans-l font-12 height-150"
                  placeholder="Perfil desejado do candidato (competências, entre outras). (Obrigatório)"
                ></b-form-textarea>
              </div>
            </div>
            <div class="d-flex sem-margens width-100 margem-t15">
              <div class="sem-padding width-50">
                <div class="mukta-m font-16 align-left weight-500">Outros dados relevantes</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.resultadosEsperados"
                  class="opensans-l font-12 height-150"
                  placeholder="Exemplo: o estudante tem que estar disponível aos fins de semana."
                ></b-form-textarea>
              </div>
              <div class="sem-padding margem-l32 width-50">
                <div class="mukta-m font-16 align-left weight-500">Recursos necessários</div>
                <b-form-textarea
                  id="textarea"
                  v-model="form.perfilDesejado"
                  class="opensans-l font-12 height-150"
                  placeholder="Descreva necessidades específicas para o projeto como hardware e software necessário. (Obrigatório)"
                ></b-form-textarea>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column width-42">
            <div class="d-flex flex-column justify-content-between fundo-ff borda-r5 borda-solida borda-w1 borda-bb padding-all8 margem-t32">
              <div class="mukta-m font-16 align-left weight-500 margem-t7">Identificação da entidade acolhedora</div>
              <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 align-left weight-500">Nome da Empresa</div>
                  <b-form-input
                    v-model="form.nomeEmpresa"
                    class="width-input opensans-l font-12"
                    type="text"
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 font-16 align-left weight-500">Correio electrónico</div>
                  <b-form-input
                    v-model="form.correioElectronicoEmpresa"
                    class="width-input opensans-l font-12"
                    type="email"
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 align-left weight-500">Morada da Empresa</div>
                  <b-form-input
                    v-model="form.moradaEmpresa"
                    class="width-input opensans-l font-12"
                    type="text"
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 font-16 align-left weight-500">Website</div>
                  <b-form-input
                    v-model="form.website"
                    class="width-input opensans-l font-12"
                    type="email"
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
              </div>
              <div class="fundo-aa height-2 width-100 margem-t15"></div>
              <div class="mukta-m font-16 align-left weight-500 margem-t15">Tutor da entidade acolhedora</div>
              <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 align-left weight-500">Nome e apelido do tutor</div>
                  <b-form-input
                    v-model="form.nomeApelidoTutor"
                    class="width-input opensans-l font-12"
                    type="text"
                    required
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 font-16 align-left weight-500">Correio electrónico</div>
                  <b-form-input
                    v-model="form.correioElectronicoTutor"
                    class="width-input opensans-l font-12"
                    type="email"
                    required
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
              </div>
              <div class="d-flex justify-content-between sem-margens width-100 margem-t7">
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 align-left weight-500">Cargo na Empresa</div>
                  <b-form-input
                    v-model="form.cargoEmpresa"
                    class="width-input opensans-l font-12"
                    type="text"
                    required
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
                <div class="d-flex flex-column sem-padding width-50">
                  <div class="mukta-m font-14 cor-60 font-16 align-left weight-500">Contacto telefónico</div>
                  <b-form-input
                    v-model="form.contactoTelefonico"
                    class="width-input opensans-l font-12"
                    type="email"
                    required
                    placeholder=""
                    size="sm"
                    :disabled = "form.tipoProposta === 2"
                  />
                </div>
              </div>
            </div>
            <div class="fundo-ff borda-r5 borda-solida borda-w1 borda-bb padding-all8 margem-t15">
              <p class="align-left fonte-14 cor-60 sem-margens">Por favor, preencha os campos com dados legítimos e corretos. A nossa plataforma não se responsabiliza por enganos no caso de dados falsos e/ou incorretos.<br />Cada proposta submetida, seja este estágio ou projeto, passa por verificação e validação por parte de uma comissão de docentes responsáveis pela Licenciatura de Tecnologias e Sistemas de Informação para a Web da Escola Superior de Media Artes e Design.</p>
            </div>
            <div class="d-flex align-bottom margem-t7 align-left">
              <b-form-checkbox
                v-model="form.concordar"
                name="concordar"
                value="1"
                unchecked-value="0"
              />
              <div class="fonte-10 margem-t5">Concordo com os termos de funcionamento e a não responsabilização da plataforma em caso de dados incorretos.</div>
            </div>
            <div class="d-flex align-bottom align-left">
              <b-form-checkbox
                v-model="form.confirmar"
                name="confirmar"
                value="1"
                unchecked-value="0"
              />
              <div class="fonte-10 margem-t5">Confirmo que os dados inseridos são legítimos e corretos.</div>
            </div>
            <b-button class="margem-t15 fundo-0084c0" @click="onSubmit">Criar a proposta</b-button>
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
        recursosNecessarios: '',
        nomeEmpresa: '',
        correioElectronicoEmpresa: '',
        moradaEmpresa: '',
        website: '',
        nomeApelidoTutor: '',
        correioElectronicoTutor: '',
        cargoEmpresa: '',
        contactoTelefonico: '',
        concordar: 0,
        confirmar: 0
      },
      options: [
        { value: 0, text: 'Seleccione' },
        { value: 1, text: 'Estágio' },
        { value: 2, text: 'Projeto' },
      ],
    }
  },
  methods: {
    onSubmit() {
      // TODO enviar os dados para a view de gerir propostas
    },
    onChangeTipo(){
      if(this.form.tipoProposta === 2){
        this.form.nomeEmpresa = ''
        this.form.correioElectronicoEmpresa = ''
        this.form.moradaEmpresa = ''
        this.form.website = ''
        this.form.nomeApelidoTutor = ''
        this.form.correioElectronicoTutor = ''
        this.form.cargoEmpresa = ''
        this.form.contactoTelefonico = ''
      }
    }
  }
};
</script>

<style>

.area-navegacao-propostas a{color: #000000 !important; text-decoration: none;}
.lista-propostas-link-btn{ height: 42px; padding: 0px 10px;  }
.lista-propostas-link-btn:hover a{ color: #707070 !important; }
.width-input{width: 95% !important;}
</style>
