<template>
  <div>
    <SideBar />
    <h1>Gestão Propostas</h1>
    <div>
      <h3>Propostas criadas pelo utilizador</h3>
      <table>
        <tr>
          <th>Tipo</th>
          <th>Título</th>
          <th>Entidade acolhedora</th>
          <th>Tutor</th>
          <th>Estado</th>
          <th>Detalhes</th>
          <th>Ações</th>
        </tr>
          <tr v-for="(proposta) in obterTabelaPropostasCriadas" :key="proposta.id">              
            <td>{{proposta.tipo}}</td>
            <td>{{proposta.titulo}}</td>
            <td>{{proposta.entidade}}</td>
            <td>{{proposta.tutor}}</td>
            <td>{{proposta.estado}}</td>
            <td><a href="">Ver detalhes</a></td>
            <td><button @click="removerProposta(proposta.id)">Remover</button></td>
          </tr>
      </table>
    </div>
    <div>
      <h3>Propostas inscritas pelo utilizador</h3>
      <table>
        <tr>
          <th>Preferência</th>
          <th>Tipo</th>
          <th>Título</th>
          <th>Entidade acolhedora</th>
          <th>Tutor</th>
          <th>Estado</th>
          <th>Ações</th>
        </tr>
          <tr v-for="(proposta) in obterTabelaPropostasInscritas" :key="proposta.ordem">
            <td>{{proposta.ordem}}</td>
            <td>{{proposta.tipo}}</td>
            <td>{{proposta.titulo}}</td>
            <td>{{proposta.entidade}}</td>
            <td>{{proposta.tutor}}</td>
            <td>{{proposta.estado}}</td>
            <td>
              <button @click="aumentarOrdem(proposta.id)" :disabled="proposta.ordem == 1">^</button>
              <button @click="diminuirOrdem(proposta.id)" :disabled="proposta.ordem == obterTabelaPropostasInscritas.length">v</button>
              <button @click="removerInscricao(proposta.id)">Remover</button>
            </td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: {
    SideBar
  },
  computed: {
    obterTabelaPropostasCriadas() {
      return this.$store.getters.obterTabelaPropostasCriadas;
    },
    obterTabelaPropostasInscritas() {
      return this.$store.getters.obterTabelaPropostasInscritas;
    }
  },
  methods: {
    removerProposta(id) {
      this.$store.dispatch("removerProposta", id)
    },
    removerInscricao(id) {
      this.$store.dispatch("removerInscricao", id)
    },
    aumentarOrdem(id) {
      this.$store.dispatch("aumentarOrdem", id)
    },
    diminuirOrdem(id) {
      this.$store.dispatch("diminuirOrdem", id)
    }
  }
};
</script>
