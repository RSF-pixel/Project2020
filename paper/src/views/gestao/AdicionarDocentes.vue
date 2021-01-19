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
              <input type="text" id="firstName" v-model="firstName" />
              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />
              <label for="lastName">Apelido </label>
              <input type="text" id="lastName" v-model="lastName" />

              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />
              <label for="email">Correio Eletrónico(institucional) </label>
              <input type="email" id="email" v-model="email" />

              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />

              <label for="password">Palavra-passe </label>
              <input type="password" id="password" v-model="password" />
              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />

              <input type="checkbox" id="ccaCheck" v-model="ccaCheck" />
              <label for="ccaCheck">Membro da CCA </label>

              <!-- FIXME:REMOVE LATER WITH CSS -->
              <br />
              <br />

              <input type="submit" value="Criar o docente" />
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
      firstName: "",
      lastName:"",
      email:"",
      password:"",
      ccaCheck: false,
    }

  },
  methods:{
    //Metodo do registo do docente
    register()
    {
      // FIXME: Pedro eu nao sei se queres fazer uma entidade no state separada para os docentes como fizeste para entidades externas


    }






  }
  
};
</script>
