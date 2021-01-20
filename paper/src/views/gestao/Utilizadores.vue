<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div
          class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo"
        >
          <h1>Utilizadores</h1>
          <router-link :to="{ name: 'Aprovar' }"
            ><div><a>Aprovar</a></div></router-link
          >
          |
          <router-link :to="{ name: 'Utilizadores' }"
            ><div><a>Utilizadores</a></div></router-link
          >|
          <router-link :to="{ name: 'Inscricoes' }"
            ><div><a>Inscrições</a></div></router-link>
          |
          <router-link :to="{ name: 'AdicionarDocentes' }"
            ><div><a>Adicionar Docente</a></div></router-link>
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
                <td><button @click="aprovarUtilizador(user.id)">Aprovar</button><button @click="negarUtilizador(user.id)">Negar</button></td>
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
  }
};
</script>
