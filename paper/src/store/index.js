import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: "",
    estados: {
      id_estado: 0,
      estado: ""
    },
    tipo_utilizador: {
      id_tipo: 0,
      utilizador: ""
    },
    tipo_proposta: {
      id_tipo: 0,
      proposta: ""
    },
    /*utilizadores: {
      id_utilizador: 0,
      id_estado: 0,
      nome: "",
      apelido: "",
      correio: "",
      passe: "",
      id_tipo: 0,
      numero_estudante: "",
      (Falta aqui pelo menos 4 relativos a empresa)
      foto: "",
      inscricao: "",
      cv: "",
      portfolio: "",
      facebook: "",
      instagram: "",
      github: "",
      discord: "",
      ano_letivo: ""
    },*/
    agenda: {
      id_utilizador: 0,
      id_convidado: 0,
      dia: "",
      hora: "",
      detalhes: "",
      ano_letivo: ""
    },
    propostas: {
      id_proposta: 0,
      id_estado: 0,
      motivo: "",
      id_criador: 0,
      id_docente: 0,
      id_tipo: 0,
      titulo: "",
      objetivos: "",
      planos: "",
      resultados: "",
      perfil: "",
      dados: "",
      recursos: "",
      data: "",
      ano_letivo: ""
    },
    empresas: {
      id_empresa: 0,
      nome: "",
      correio: "",
      morada: "",
      website: ""
    },
    estagios: {
      id_proposta: 0,
      id_empresa: 0,
      nome_tutor: "",
      contacto_tutor: "",
      cargo_tutor: "",
      correio_tutor: ""
    },
    inscricoes: {
      id_utilizador: 0,
      id_proposta: 0,
      id_estado: 0,
      preferencia: 0,
      ano_letivo: ""
    },
    prazo: {
      id_prazo: 0,
      ano_letivo: "",
      prazo: "",
      dia_hora: ""
    },
    utilizadores: localStorage.getItem('utilizadores')
      ? JSON.parse(localStorage.getItem('utilizadores'))
      : [
        {
          nome: "João",
          apelido: "Silva",
          correio: "js@gmail.com",
          passe: "123",
          numero_estudante: 40190100
        }],
    utilizadorAutenticado: localStorage.getItem('utilizadorAutenticado') 
      ? JSON.parse(localStorage.getItem('utilizadorAutenticado')) 
      : ""
  
    },
  getters:{
    obterUtilizadorAutenticado: (state) => state.utilizadorAutenticado,
    ativoUtilizadorAutenticado: (state) => (state.utilizadorAutenticado == "" ? false : true)
  },
  mutations: {
    AUTENTICADO(state, utilizador){
      state.utilizadorAutenticado = utilizador;
    },
    DESCONECTAR(state){
      state.utilizadorAutenticado = "";
    },
    REGISTADO(state, utilizador){
      state.utilizadores.push(utilizador);
    }
  },
  actions: {
    autenticacao(context, payload) {
      const utilizador = context.state.utilizadores.find(
        (utilizador) => utilizador.correio === payload.correio && utilizador.passe === payload.passe)
      if (utilizador != undefined){
        context.commit('AUTENTICADO', utilizador)
        localStorage.setItem('utilizadorAutenticado', JSON.stringify(utilizador))
      }
      else{
        throw Error ('Autenticação falhada, tente novamente.')
      }
    },
    registo(context, payload){
      const utilizador = context.state.utilizadores.find(
        (utilizador) => utilizador.correio === payload.correio || utilizador.numero_estudante === payload.numero_estudante)
      if(utilizador == undefined){
        context.commit('REGISTADO', payload);
        localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores))
      }
      else{
        throw Error("Utilizador inválido")
      }
    },
    desconectar(context){
      context.commit("DESCONECTAR");
      localStorage.removeItem("utilizadorAutenticado");
    }
  },
  modules: {
    
  }
});
