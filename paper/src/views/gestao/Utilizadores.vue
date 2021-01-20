<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo">
          <h1>Utilizadores</h1>
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
            <!-- O select já está com a opção do Estudantes já selecionada -->
            <select id="typeSelect" v-model="select">
              <option value="Estudante">Estudantes</option>
              <option value="Docente">Docentes</option>
              <option value="Entidade Externa">Entidades Externas</option>
            </select>
            <table>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Correio eletrónico</th>
                <th v-if="select == 'Estudante'">Número de Estudante</th>
                <th v-else-if="select == 'Docente'">Docente CCA</th>
                <th v-else>Nome da Empresa</th>
                <th>Ações</th>
              </tr>
              <tr v-for="(user) in obterTabelaUsers" :key="user.id">              
                <td>{{user.id}}</td>
                <td>{{user.nome}}</td>
                <td>{{user.correio}}</td>
                <td>{{user.complementar}}</td>
                <td>
                  <template v-if="select == 'Docente'" >
                  <button v-if="obterCCA(user.id)" @click="adicionarCCA(user.id)">Adicionar ao CCA</button>
                  <button v-else @click="removerCCA(user.id)">Remover do CCA</button>
                  </template>
                  <button v-if="!obterBanido(user.id)" @click="banir(user.id)">Banir</button>
                  <button v-else @click="reverter(user.id)">Reverter</button>
                </td>
              </tr> 
            </table>
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
      select: 'Estudante',
    };
  },
  computed: {
    obterTabelaUsers() {
      return this.$store.getters.obterTabelaUsers(this.select);
    }
  },
  methods: {
    obterCCA(id) {
      console.log(id)
      return true;
    },
    obterBanido(id) {
      console.log(id)
      return false;
    },
    adicionarCCA(id) {
      alert("adicionado " + id)
    },
    removerCCA(id) {
      alert("removido " + id)
    },
    banir(id) {
      alert("banido " + id)
    },
    reverter(id) {
      alert("revertido " + id)
    }
  }
};
</script>
