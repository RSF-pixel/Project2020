import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: "",
    logged_user: 0,
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
    utilizadores: {
      id_utilizador: 0,
      id_estado: 0,
      nome: "",
      apelido: "",
      correio: "",
      passe: "",
      id_tipo: 0,
      complementar: "",
      foto: "",
      cv: "",
      portfolio: "",
      facebook: "",
      instagram: "",
      github: "",
      discord: "",
      ano_letivo: ""
    },
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
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    
  }
});
