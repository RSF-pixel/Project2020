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
    tipo_utilizadores:[ 
      {id: 1, tipo: "Estudante"},
      {id: 2, tipo: "Entidade Externa"}
    ],
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
      data: "",
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
      data_hora: "",
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
    prazos: {
      id_prazo: 0,
      ano_letivo: "",
      prazo: "",
      data_hora: ""
    },
    notificacoes: {
      id_notificacao: 0,
      id_utilizador: 0,
      id_tema: 0,
      texto: "",
      data_hora: ""
    },
    temas: {
      id_tema: 0,
      tema: ""
    },
    utilizadores: localStorage.getItem('utilizadores')
      ? JSON.parse(localStorage.getItem('utilizadores'))
      : [
        { 
          id_utilizador: 1,
          id_estado: 1,
          nome: "João",
          apelido: "Silva",
          correio: "js@gmail.com",
          passe: "123",
          id_tipo: 1,
          numero_estudante: 1,
          nome_empresa: null,
          correio_empresa: null,
          morada_empresa: null,
          website_empresa: null,
          foto: "https://lh3.googleusercontent.com/-4yFaWmS7-Pg/X_xzGKwqwHI/AAAAAAAAAAY/L78mg1HQzvELjdvv5xiLqZT6keuBmoGSACMICGAYYCw/s83-c/foto_default.png",
          inscricao: null,
          cv: null,
          portfólio: null,
          facebook: null,
          instagram: null,
          github: null,
          discord: null,
          ano: ""
        }],
    utilizadorAutenticado: localStorage.getItem('utilizadorAutenticado') 
      ? JSON.parse(localStorage.getItem('utilizadorAutenticado')) 
      : ""
    },
  getters:{
    obterUtilizadorAutenticado: (state) => state.utilizadorAutenticado,
    ativoUtilizadorAutenticado: (state) => (state.utilizadorAutenticado == "" ? false : true),
    obterTipoUtilizadores: (state) => state.tipo_utilizadores.map((tipo_utilizador) => ({
      value: tipo_utilizador.id,
      text: tipo_utilizador.tipo
    })),
    proximoIDUtilizador: (state) => {
      return state.utilizadores.length > 0 ?
      state.utilizadores[state.utilizadores.length - 1].id_utilizador + 1
      : 1;
    }
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
        if(payload.manter_conectado){
          localStorage.setItem('utilizadorAutenticado', JSON.stringify(utilizador))
          console.log(payload.manter_conectado)
        }
        else{
          sessionStorage.setItem('utilizadorAutenticado', JSON.stringify(utilizador))
        }
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
