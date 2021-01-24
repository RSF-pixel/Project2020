<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <h1>Inscrições</h1>
          <router-link :to="{ name: 'Aprovar' }">
            <div><a>Aprovar</a></div></router-link> |
          <router-link :to="{ name: 'Utilizadores' }">
            <div><a>Utilizadores</a></div></router-link> |
          <router-link :to="{ name: 'Inscricoes' }">
            <div><a>Inscrições</a></div></router-link> |
          <router-link :to="{ name: 'AdicionarDocentes' }">
            <div><a>Adicionar Docente</a></div></router-link>
        </div>
        <div class="area-conteudo-se-navegador anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo">
          <!-- Por fazer -->
          <div>
            <table>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Tipo de proposta</th>
                <th>Entidade acolhedora</th>
                <th>Tutor</th>
                <th>Detalhes</th>
                <th>Ações</th>
              </tr>
              <tr v-for="(inscricoes) in obterTabelaInscricoes" :key="inscricoes.id">              
                <td>{{inscricoes.id}}</td>
                <td>{{inscricoes.nome_inscrito}}</td>
                <td>{{inscricoes.tipo_proposta}}</td>
                <td>{{inscricoes.entidade}}</td>
                <td>{{inscricoes.tutor}}</td>
                <td><a v-b-modal.modalDetalhes @click="obterModalVerDetalhes(inscricoes.id_proposta)">Ver detalhes</a></td>
                <td><button @click="aprovarInscricao(inscricoes.id)">Aprovar</button><button @click="negarInscricao(inscricoes.id)">Negar</button></td>
              </tr>
            </table>
          </div>
          <div>
            <b-modal id="modalDetalhes" :title="dadosModal[0].titulo">
              <p>Objetivos: {{dadosModal[0].objetivos}}</p>
              <p>Plano Provisório: {{dadosModal[0].planos}}</p>
              <p>Resultados Esperados: {{dadosModal[0].resultados}}</p>
              <p>Perfil Desejado: {{dadosModal[0].perfil}}</p>
              <p>Dados Relevantes: {{dadosModal[0].dados}}</p>
              <p>Recursos Necessários: {{dadosModal[0].recursos}}</p>
              <template v-if="dadosModal[0].id_tipo == 1">
                <p>Cargo Tutor: {{dadosModal[1].cargo_tutor}}</p>
                <p>Contacto Tutor: {{dadosModal[1].contacto_tutor}}</p>
                <p>Correio Tutor: {{dadosModal[1].correio_tutor}}</p>
              </template>
            </b-modal>
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
    SideBar,
  },
  data() {
    return {
      dadosModal: [{titulo:""}]
    };
  },
  computed: {
    obterTabelaInscricoes() {
      return this.$store.getters.obterTabelaInscricoes;
    }
  },
  methods: {
    aprovarInscricao(id) {
      this.$store.dispatch("aprovarInscricao", id)
    },
    negarInscricao(id) {
      this.$store.dispatch("negarInscricao", id)
    },
    obterModalVerDetalhes(id) {
      this.dadosModal = this.$store.getters.obterModalVerDetalhes(id);
    }
  }
};
</script>

