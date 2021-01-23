<template>
  <div class="view d-flex">
    <SideBar />
    <div class="area-principal anim-area-principal d-flex">
      <div class="area-conteudo">
        <div
          class="navegador-area-conteudo anim-sombra-area-conteudo d-flex justify-content-between fundo-f4 margem-b20 borda-r5 sombra-area-conteudo"
        >
          <h1>Aprovar Propostas</h1>
          <router-link :to="{ name: 'Aprovar' }"
            ><div><a>Aprovar</a></div></router-link
          >
          |
          <router-link :to="{ name: 'Utilizadores' }"
            ><div><a>Utilizadores</a></div></router-link
          >
          |
          <router-link :to="{ name: 'Inscricoes' }"
            ><div><a>Inscrições</a></div></router-link
          >
          |
          <router-link :to="{ name: 'AdicionarDocentes' }"
            ><div><a>Adicionar Docente</a></div></router-link
          >
        </div>
        <div class="area-conteudo-se-navegador anim-sombra-area-conteudo d-flex justify-content-start fundo-f4 borda-r5 sombra-area-conteudo">
          <div>
            <form @submit.prevent="register">
              <label for="firstName">Nome </label>
              <input type="text" id="firstName" v-model="utilizador.primeiroNome" />
              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />
              <label for="lastName">Apelido </label>
              <input type="text" id="lastName" v-model="utilizador.apelido" />

              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />
              <label for="email">Correio Eletrónico(institucional) </label>
              <input type="email" id="email" v-model="utilizador.correio" />

              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />

              <label for="password">Palavra-passe </label>
              <input type="password" id="password" v-model="utilizador.password" />
              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />

              <input type="checkbox" id="ccaCheck" v-model="utilizador.ccaCheck" />
              <label for="ccaCheck">Membro da CCA </label>

              <br />
              <br />

              <input type="submit" value="Criar o docente" />
              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br>

              <h3>{{this.estado}}</h3>
            </form>
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
  data()
  {
    return{
      estado:"",
      utilizador:{
      primeiroNome: "",
      apelido:"",
      correio:"",
      password:"",
      ccaCheck: false,
      tipo_utilizador: null,
      numero_estudante: null,
      nome_empresa: null,
      correio_empresa: null,
      morada_empresa: null,
      website_empresa: null
      }
    }

  },
  methods:{
    //Metodo do registo do docente
    register()
    {
      let utilizador = {
          id_utilizador: this.$store.getters.proximoIDUtilizador,
          id_estado: 1,
          nome: this.utilizador.primeiroNome,
          apelido: this.utilizador.apelido,
          correio: this.utilizador.correio,
          passe: this.utilizador.password,
          id_tipo: 0,
          numero_estudante: null,
          nome_empresa: null,
          foto: "https://lh3.googleusercontent.com/-4yFaWmS7-Pg/X_xzGKwqwHI/AAAAAAAAAAY/L78mg1HQzvELjdvv5xiLqZT6keuBmoGSACMICGAYYCw/s83-c/foto_default.png",
          inscricao: null,
          cv: null,
          portfolio: null,
          facebook: null,
          instagram: null,
          github: null,
          discord: null,
          ano: ""
        }
        const empresa = this.utilizador.tipo_utilizador == 2 ? {
          nome: this.utilizador.nome_empresa,
          correio: this.utilizador.correio_empresa,
          morada: this.utilizador.morada_empresa,
          website: this.utilizador.website_empresa,
        } : null;
        const dados = {
          utilizador: utilizador,
          empresa: empresa
        }
        try {

          this.$store.dispatch("registo", dados)
          this.estado = "Docente Criado com sucesso"
        }
        catch(error){
          this.estado = "Erro a criar o docente"                                     
        }
    }

  }
  
};
</script>
