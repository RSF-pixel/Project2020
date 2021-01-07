<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="autenticacao fundo-dd borda-solida borda-w05 borda-70 borda-r10 sombra-caixa">
      <div class="form-container">
        <form>
          <svg id="logo"><g id="paper_lv1" data-name="paper lv1"><path d="M6.93,29V45H0V.71H6.93V3.06a9.67,9.67,0,0,1,1-.85A13,13,0,0,1,10.8.85,13.62,13.62,0,0,1,15.61,0,13.57,13.57,0,0,1,26,4.5,16.26,16.26,0,0,1,30.14,16,16.26,16.26,0,0,1,26,27.58a13.53,13.53,0,0,1-10.36,4.51,14.24,14.24,0,0,1-4.71-.74,10.39,10.39,0,0,1-3.07-1.53ZM9,9.41a9.14,9.14,0,0,0-2.35,6.66A9.19,9.19,0,0,0,9,22.73a7.9,7.9,0,0,0,5.92,2.45,7.87,7.87,0,0,0,5.92-2.45,9.2,9.2,0,0,0,2.37-6.66,9.16,9.16,0,0,0-2.37-6.66A7.87,7.87,0,0,0,14.93,7,7.9,7.9,0,0,0,9,9.41Z" transform="translate(0 0)"/><path id="Caminho_2" data-name="Caminho 2" class="cls-1" d="M58.33,30V27.73a10.8,10.8,0,0,1-1,.81,13.71,13.71,0,0,1-2.9,1.29,14.63,14.63,0,0,1-15.16-3.49,15.15,15.15,0,0,1-4.18-11,15.11,15.11,0,0,1,4.18-11A13.8,13.8,0,0,1,49.64,0a14.2,14.2,0,0,1,4.71.74,10.93,10.93,0,0,1,3,1.43l.91.73V.68h6.93V30Zm-2.08-8.3A8.54,8.54,0,0,0,58.6,15.3a8.54,8.54,0,0,0-2.35-6.36,8.68,8.68,0,0,0-11.86,0A8.5,8.5,0,0,0,42,15.3a8.54,8.54,0,0,0,2.35,6.36A8.68,8.68,0,0,0,56.25,21.66Z" transform="translate(0 0)"/><path id="Caminho_3" data-name="Caminho 3" class="cls-1" d="M80.73,29V45H73.8V.71h6.93V3.06a8.68,8.68,0,0,1,1-.85A13,13,0,0,1,84.6.85,14.16,14.16,0,0,1,99.77,4.5,16.31,16.31,0,0,1,104,16a16.31,16.31,0,0,1-4.17,11.54,13.56,13.56,0,0,1-10.36,4.51,14.2,14.2,0,0,1-4.71-.74,10.31,10.31,0,0,1-3.1-1.53ZM82.81,9.41a9.14,9.14,0,0,0-2.35,6.66,9.14,9.14,0,0,0,2.35,6.66,8.38,8.38,0,0,0,11.85,0A9.19,9.19,0,0,0,97,16.07a9.19,9.19,0,0,0-2.36-6.66A8.38,8.38,0,0,0,82.81,9.41Z" transform="translate(0 0)"/><path id="Caminho_4" data-name="Caminho 4" class="cls-1" d="M140.5,15.05,118,19.38a8,8,0,0,0,3.16,3.38A8.65,8.65,0,0,0,125.68,24a8.13,8.13,0,0,0,4-1,6.34,6.34,0,0,0,2.36-2l.67-.95,6.05,3.11c-.08.18-.24.45-.43.78a13.47,13.47,0,0,1-1.45,1.82,15.09,15.09,0,0,1-2.52,2.27,14.49,14.49,0,0,1-3.78,1.82,15.62,15.62,0,0,1-5.08.82,14.9,14.9,0,0,1-15.47-15.31,14.87,14.87,0,0,1,4.38-10.91,15.51,15.51,0,0,1,21.6-.12A15.08,15.08,0,0,1,140.5,15.05Zm-15.22-8.4a8,8,0,0,0-8.22,7.48l15.55-3A7.46,7.46,0,0,0,125.28,6.65Z" transform="translate(0 0)"/><path id="Caminho_5" data-name="Caminho 5" class="cls-1" d="M160,6.58c-2.92,0-5.07.6-6.45,1.82s-2.08,3.35-2.09,6.43V30h-6.93V.68h6.93V2.92C153.39,1,156.23,0,160,0Z" transform="translate(0 0)"/></g></svg>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5" for="correio-eletronico">Correio eletrónico</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="text" id="" name="correio-eletronico"><br>
          <label class="d-flex justify-content-start cor-20 fonte-14 mukta-m sem-margens margem-l5 margem-t7" for="palavra-passe">Palavra-passe</label>
          <input class="cor-60 fundo-fa fonte-12 opensans-l borda-r5 sem-margens" type="password" id="" name="palavra-passe">
          <div class="ver-helper d-flex justify-content-end sem-margens">
          <svg id="ver" xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"/></svg>
          </div>
          <label class="checkbox-content d-flex justify-content-start align-items-center cursor-pointer cor-20 fonte-10 mukta-r sem-margens margem-h15">
            <input class="checkbox" type="checkbox" id=""> Manter conectado
            <span class="marcado sem-margens"></span>
          </label>
          <button class="botao-autenticacao-registo fundo-aa borda-r5 cor-20 fonte-16 mukta-sb cursor-pointer" type="submit" id="">Entrar</button>
        </form>
        <div class="separador d-flex justify-content-start">
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
            <span class="texto-separador cor-80 fonte-10 mukta-el sem-margens margem-t7 margem-w5 padding-t8">ou</span>
          <hr class="linha-separador borda-solida borda-aa sem-margens margem-t15">
        </div>
        <p class="registo fonte-12 mukta-l sem-margens"><router-link :to="{name: 'Registar'}" class="">Criar um utilizador</router-link></p>
      </div>
    </div>
  </div>
</template>
<style>
  html, body, #app, .container{
    height: 100%;
  }
  .autenticacao{
    height: 420px;
    width: 320px;
  }
  .form-container{
    width: 240px;
    margin: 0px 40px;
  }
  #logo{fill: #202020; height: 45px; width: 160px; margin: 35px 0px;}
  .linha-separador{width: 110px;}
  .registo a{color: #606060;}
  .registo a:hover{color: #0084c0;}
  .ver-helper{height: 0px;}
  #ver{height: 16px; fill: #aaaaaa; position: relative; bottom: 29px; right: 10px;}
  #ver:hover{fill: #909090;}
</style>
<script>
/*export default{                    // Por fazer e falta dar toggle no ícone de ver a palavra-passe
  name:'Autenticacao',
  data(){
      return{
        correio_eletrónico: '',
        palavra_passe: ''
      }
  },
  methods:{
    autenticacao(){
      try {
        this.$store.dispatch("autenticacao", this.$data)
        this.$router.push({name: "Home"});
      }
      catch(error){
        alert(error)                                     
      }
    }
  }
}*/
</script>