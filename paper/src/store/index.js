import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estados: [
      {id_estado: 0, estado: "em espera"},
      {id_estado: 1, estado: "aceite"},
    ],
    tipo_utilizadores:[ 
      {id: 0, tipo: "Docente"},
      {id: 1, tipo: "Estudante"},
      {id: 2, tipo: "Entidade Externa"}
    ],
    tipo_proposta: {
      id_tipo: 0,
      proposta: ""
    },
    utilizadores: localStorage.getItem('utilizadores') ? JSON.parse(localStorage.getItem('utilizadores')) :
      [{ 
        id_utilizador: 0,
        id_estado: 1,
        nome: "João",
        apelido: "Silva",
        correio: "js@gmail.com",
        passe: "123",
        id_tipo: 1,
        numero_estudante: 40190158,
        nome_empresa: null,
        cca: false,
        foto: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        inscricao: null,
        cv: null,
        portfolio: null,
        facebook: null,
        instagram: null,
        github: null,
        discord: null,
        ano: "2020/2021"
    }],
    agenda: {
      id_utilizador: 0,
      id_convidado: 0,
      data: "",
      hora: "",
      detalhes: "",
      ano_letivo: ""
    },
    propostas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : {
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
    empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) :
    [{
      id_empresa: 0,
      nome: "",
      correio: "",
      morada: "",
      website: ""
    }],
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
    notificacoes: localStorage.getItem('notificacoes') ? JSON.parse(localStorage.getItem('notificacoes')) : 
    [
      {
        id_notificacao: 0,
        id_utilizador: 1,
        id_tema: 0,
        texto: "O utilizador foi admitido",
        data_hora: "08-04-21 | 15:31"
      }
    ],
    temas: [
      {id_tema: 0, tema: "Inscrição"},
    ],
    utilizadorAutenticado: localStorage.getItem('utilizadorAutenticado') 
      ? JSON.parse(localStorage.getItem('utilizadorAutenticado')) : ""
    },
  getters:{
    obterUtilizadorAutenticado: (state) => state.utilizadorAutenticado,
    ativoUtilizadorAutenticado: (state) => (state.utilizadorAutenticado == "" ? false : true),
    obterTipoUtilizadores: (state) => state.tipo_utilizadores.map((tipo_utilizador) => ({
      value: tipo_utilizador.id,
      text: tipo_utilizador.tipo
    })).filter(c => c.value > 0),
    proximoIDUtilizador: (state) =>  {
      return state.utilizadores.length > 0 ?
      state.utilizadores[state.utilizadores.length - 1].id_utilizador + 1
      : 1;
    },
    obterIdEstado: (state) => (estado) => {
      return state.estados.find(e => estado == e.estado).id_estado
    },
    obterTipoUtilizadorePorId: (state) => (id) => {
      return state.tipo_utilizadores.find(tu => id == tu.id).tipo
    },
    obterTabelaAprovarUsers: (state, getters) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (utilizador.id_estado == getters.obterIdEstado("em espera")) {
          const dados = {
            id: utilizador.id_utilizador,
            tipo: getters.obterTipoUtilizadorePorId(utilizador.id_tipo),
            nome: utilizador.nome + " " + utilizador.apelido,
            correio: utilizador.correio,
            complementar: utilizador.nome_empresa == null ? utilizador.numero_estudante : utilizador.nome_empresa
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaNotificacoes: (state) => state.notificacoes.map((notificacao) => ({
      id: notificacao.id_notificacao,
      id_utilizador: notificacao.id_utilizador,
      data_hora: notificacao.data_hora,
      tema: state.temas.find(t => notificacao.id_tema == t.id_tema).tema,
      texto: notificacao.texto
    })).filter(n => n.id_utilizador == state.utilizadorAutenticado.id_utilizador),
  },
  mutations: {
    AUTENTICADO(state, utilizador){
      state.utilizadorAutenticado = utilizador;
    },
    DESCONECTAR(state){
      state.utilizadorAutenticado = "";
    },
    REGISTADO(state, payload){
      state.utilizadores.push(payload.utilizador);
      if (payload.empresas != null) { state.empresas.push(payload.empresa); }
    },
    EDITARPERFIL(state, payload){
      state.utilizadores = state.utilizadores.map(utilizador => {
        if(utilizador.id_utilizador == payload.id_utilizador){
          utilizador.passe = payload.passe_nova
          utilizador.facebook = payload.link_facebook
          utilizador.github = payload.link_github
          utilizador.instagram = payload.link_instagram
          utilizador.discord = payload.id_discord
          utilizador.portfolio = payload.link_portfolio
        }
        return utilizador;
      })
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
        (utilizador) => utilizador.correio === payload.utilizador.correio || utilizador.numero_estudante === payload.utilizador.numero_estudante)
      if(utilizador == undefined){
        if (payload.empresas != null) {
          const empresa = context.state.empresas.find(
            (empresa) => empresa.nome === payload.empresa.nome)
          payload.empresa = empresa != undefined ? payload.empresa : null;
        }
        context.commit('REGISTADO', payload);
        localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores))
        localStorage.setItem('empresas', JSON.stringify(context.state.empresas))
      } else{
        throw Error("Utilizador inválido")
      }
    },
    desconectar(context){
      context.commit("DESCONECTAR");
      localStorage.removeItem("utilizadorAutenticado");
    },
    editarPerfil(context, payload){
      context.commit('EDITARPERFIL', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    }
  }
});
