<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <h1>Aprovar Propostas</h1>
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
          <div>
            <select id="typeSelect" v-model="select">
              <option value="utilizadores">Utilizadores</option>
              <option value="propostas">Propostas</option>
            </select>
            <div v-if="(select == 'utilizadores')">
              <h3>Aprovar Utilizadores</h3>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Tipo de utilizador</th>
                  <th>Nome</th>
                  <th>Correio eletrónico</th>
                  <th>Complementar</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="(user) in obterTabelaAprovarUsers" :key="user.id">              
                  <td>{{user.id}}</td>
                  <td>{{user.tipo}}</td>
                  <td>{{user.nome}}</td>
                  <td>{{user.correio}}</td>
                  <td>{{user.complementar}}</td>
                  <td><button @click="aprovarUtilizador(user.id)">Aprovar</button><button @click="negarUtilizador(user.id)">Negar</button></td>
                </tr>
              </table>
            </div>
            <div v-else>
              <h3>Aprovar Propostas</h3>
              <table>
                <tr>
                  <th>ID</th>
                  <th>Submetido por</th>
                  <th>Nome</th>
                  <th>Tipo de proposta</th>
                  <th>Detalhes</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="(proposta) in obterTabelaAprovarPropostas" :key="proposta.id">              
                  <td>{{proposta.id}}</td>
                  <td>{{proposta.tipo_criador}}</td>
                  <td>{{proposta.nome_criador}}</td>
                  <td>{{proposta.tipo_proposta}}</td>
                  <td><a href="">Ver detalhes</a></td>
                  <td><button @click="aprovarUtilizador(proposta.id)">Aprovar</button><button @click="negarUtilizador(proposta.id)">Negar</button></td>
                </tr>
              </table>
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
    SideBar,
  },
  data() {
    return {
      select: "utilizadores",
    };
  },
  computed: {
    obterTabelaAprovarUsers() {
      return this.$store.getters.obterTabelaAprovarUsers;
    },
    obterTabelaAprovarPropostas() {
      return this.$store.getters.obterTabelaAprovarPropostas;
    }
  },
  methods: {
    aprovarUtilizador(id) {
      this.$store.dispatch("aprovarUtilizador", id);
    },
    negarUtilizador(id) {
      this.$store.dispatch("negarUtilizador", id);
    },
  },
};
</script>


