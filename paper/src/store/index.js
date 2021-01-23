import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    estados: [
      {id_estado: 0, estado: "Em análise"},
      {id_estado: 1, estado: "Aprovado"},
      {id_estado: 2, estado: "Banido"}
    ],
    tipo_utilizadores: [ 
      {id: 0, tipo: "Docente"},
      {id: 1, tipo: "Estudante"},
      {id: 2, tipo: "Entidade Externa"}
    ],
    tipo_propostas: [
      {id_tipo: 0, proposta: "Projeto"},
      {id_tipo: 1, proposta: "Estágio"}
    ],
    utilizadores: localStorage.getItem('utilizadores') ? JSON.parse(localStorage.getItem('utilizadores')) : [
      { 
        id_utilizador: 0,
        id_estado: 0,
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
      }
    ],
    agenda: {
      id_utilizador: 0,
      id_convidado: 0,
      data: "",
      hora: "",
      detalhes: "",
    },
    propostas: localStorage.getItem('propostas') ? JSON.parse(localStorage.getItem('propostas')) : [
      {
        id_proposta: 0,
        id_estado: 0,
        motivo: "",
        id_criador: 0,
        id_docente: 0,
        id_tipo: 0,
        titulo: "Paper",
        objetivos: "",
        planos: "",
        resultados: "",
        perfil: "",
        dados: "",
        recursos: "",
        data_hora: "",
        ano_letivo: ""
      }
    ],
    empresas: localStorage.getItem('empresas') ? JSON.parse(localStorage.getItem('empresas')) : [
      {
        id_empresa: 0,
        nome: "Pepega",
        correio: "",
        morada: "",
        website: ""
      }
    ],
    estagios: localStorage.getItem('estagios') ? JSON.parse(localStorage.getItem('estagios')) : [
      {
        id_proposta: 0,
        id_empresa: 0,
        nome_tutor: "Jorge Cunha",
        contacto_tutor: "",
        cargo_tutor: "",
        correio_tutor: ""
      }
    ],
    inscricoes: localStorage.getItem('inscricoes') ? JSON.parse(localStorage.getItem('inscricoes')) : [ 
      {
        id_inscricao: 0,
        id_utilizador: 0,
        id_proposta: 0,
        id_estado: 0,
        preferencia: 1,
        ano_letivo: ""
      }
    ],
    prazos: [
      {
        id_prazo: 0,
        ano_letivo: "",
        prazo: "",
        data_hora: ""
      }
    ],
    notificacoes: localStorage.getItem('notificacoes') ? JSON.parse(localStorage.getItem('notificacoes')) : 
    [
      {
        id_notificacao: 0,
        id_utilizador: 0,
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
    obterUtilizadorAutenticado: (state) => state.utilizadores.find(u => u.id_utilizador == state.utilizadorAutenticado),
    ativoUtilizadorAutenticado: (state) => (state.utilizadorAutenticado === "" ? false : true),
    obterTipoUtilizadores: (state) => state.tipo_utilizadores.map((tipo_utilizador) => ({
      value: tipo_utilizador.id,
      text: tipo_utilizador.tipo
    })).filter(c => c.value > 0),
    proximoIDUtilizador: (state) =>  {
      return state.utilizadores.length > 0 ?
      state.utilizadores[state.utilizadores.length - 1].id_utilizador + 1
      : 0;
    },
    obterTipoUtilizadorePorId: (state) => (id) => {
      return state.tipo_utilizadores.find(tu => id == tu.id).tipo
    },
    obterTabelaAprovarUsers: (state, getters) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (utilizador.id_estado == 0) {
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
    obterTabelaAprovarPropostas: (state, getters) => {
      const tabela = [];
      state.propostas.forEach(proposta => {
        if (proposta.id_estado == 0) {
          const criador = state.utilizadores.find(u => proposta.id_criador == u.id_utilizador);
          const dados = {
            id: proposta.id_proposta,
            tipo_criador: criador != undefined ? getters.obterTipoUtilizadorePorId(criador.id_tipo) : "N/A",
            nome_criador: criador != undefined ? criador.nome + " " + criador.apelido : "N/A",
            tipo_proposta: state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta
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
    })).filter(n => n.id_utilizador == state.utilizadorAutenticado),
    obterTabelaUsers: (state, getters) => (tipo) => {
      const tabela = [];
      state.utilizadores.forEach(utilizador => {
        if (getters.obterTipoUtilizadorePorId(utilizador.id_tipo) == tipo && utilizador.id_estado !== 0) {
          const dados = {
            id: utilizador.id_utilizador,
            nome: utilizador.nome + " " + utilizador.apelido,
            correio: utilizador.correio,
            complementar: tipo == 'Estudante' ? utilizador.numero_estudante :
            tipo == 'Docente' ? utilizador.cca : utilizador.nome_empresa,
            id_estado: utilizador.id_estado,
            cca: utilizador.cca
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaInscricoes: (state) => {
      const tabela = [];
      state.inscricoes.forEach(inscricao => {
        if (inscricao.id_estado == 0) {
          const inscrito = state.utilizadores.find(u => inscricao.id_utilizador == u.id_utilizador);
          const proposta = state.propostas.find(p => inscricao.id_proposta == p.id_proposta);
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: inscricao.id_proposta,
            nome_inscrito: inscrito.nome + " " + inscrito.apelido,
            tipo_proposta: tipo_proposta,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---"
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaPropostasCriadas: (state) => {
      const tabela = [];
      state.propostas.forEach(proposta => {
        if (proposta.id_criador == state.utilizadorAutenticado) {
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: proposta.id_proposta,
            tipo: tipo_proposta,
            titulo: proposta.titulo,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---",
            estado: state.estados.find(e => proposta.id_estado == e.id_estado).estado
          }
          tabela.push(dados);
        }
      });
      return tabela;
    },
    obterTabelaPropostasInscritas: (state) => {
      const tabela = [];
      state.inscricoes.forEach(inscricao => {
        if (inscricao.id_utilizador == state.utilizadorAutenticado) {
          const proposta = state.propostas.find(p => inscricao.id_proposta == p.id_proposta);
          const tipo_proposta = state.tipo_propostas.find(t => proposta.id_tipo == t.id_tipo).proposta;
          const estagio = tipo_proposta == 'Estágio' ?
            state.estagios.find(est => est.id_proposta == proposta.id_proposta) : null;
          const dados = {
            id: inscricao.id_inscricao,
            ordem: inscricao.preferencia,
            tipo: tipo_proposta,
            titulo: proposta.titulo,
            entidade: estagio != null ?
              state.empresas.find(emp => emp.id_empresa == estagio.id_empresa).nome : "---",
            tutor: estagio != null ? estagio.nome_tutor : "---",
            estado: state.estados.find(e => inscricao.id_estado == e.id_estado).estado
          }
          tabela.push(dados);
        }
      });
      return tabela;
    }
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
    },
    APROVARUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 1;
        }
        return utilizador;
      })
    },
    NEGARUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.filter(utilizador =>
        utilizador.id_utilizador != payload);
    },
    APROVARPROPOSTA(state, payload) {
      state.propostas = state.propostas.map(proposta => {
        if (proposta.id_proposta == payload) {
          proposta.id_estado = 1;
        }
        return proposta;
      })
    },
    NEGARPROPOSTA(state, payload) {
      state.propostas = state.propostas.filter(proposta =>
        proposta.id_proposta != payload);
    },
    BANIRUTILIZADOR(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 2;
        }
        return utilizador;
      })
    },
    REVERTERBAN(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.id_estado = 1;
        }
        return utilizador;
      })
    },
    ADCIONARCCA(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.cca = true;
        }
        return utilizador;
      })
    },
    REMOVERCCA(state, payload) {
      state.utilizadores = state.utilizadores.map(utilizador => {
        if (utilizador.id_utilizador == payload) {
          utilizador.cca = false;
        }
        return utilizador;
      })
    },
    APROVARINSCRICAO(state, payload) {
      state.inscricoes = state.inscricoes.map(inscricao => {
        if (inscricao.id_inscricao == payload) {
          inscricao.id_estado = 1;
        }
        return inscricao;
      })
    },
    NEGARINSCRICAO(state, payload) {
      state.inscricoes = state.inscricoes.filter(inscricao =>
        inscricao.id_inscricao != payload);
    }
  },
  actions: {
    autenticacao(context, payload) {
      const utilizador = context.state.utilizadores.find(
        (utilizador) => utilizador.correio === payload.correio && utilizador.passe === payload.passe).id_utilizador;
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
    },
    aprovarUtilizador(context, payload) {
      context.commit('APROVARUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    negarUtilizador(context, payload) {
      context.commit('NEGARUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    aprovarProposta(context, payload) {
      context.commit('APROVARPROPOSTA', payload);
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
    },
    negarProposta(context, payload) {
      context.commit('NEGARPROPOSTA', payload);
      localStorage.setItem('propostas', JSON.stringify(context.state.propostas));
    },
    banirUtilizador(context, payload) {
      context.commit('BANIRUTILIZADOR', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    reverterBan(context, payload) {
      context.commit('REVERTERBAN', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    adicionarCCA(context, payload) {
      context.commit('ADCIONARCCA', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    removerCCA(context, payload) {
      context.commit('REMOVERCCA', payload);
      localStorage.setItem('utilizadores', JSON.stringify(context.state.utilizadores));
    },
    aprovarInscricao(context, payload) {
      context.commit('APROVARINSCRICAO', payload);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    },
    negarInscricao(context, payload) {
      context.commit('NEGARINSCRICAO', payload);
      localStorage.setItem('inscricoes', JSON.stringify(context.state.inscricoes));
    }
  }
});
