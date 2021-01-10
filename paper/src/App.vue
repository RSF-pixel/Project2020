<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Fundo de todas as páginas */
  html, body, #app, .container-autenticacao-registo, .view{height: 100%; background-color: #e7e7e7; min-height: 700px; min-width: 400px;} 
/* Margens */
  .sem-margens{margin: 0px 0px;}
  .margem-l5{margin-left: 5px;}
  .margem-t7{margin-top: 7px;}
  .margem-t15{margin-top: 15px;}
  .margem-b10{margin-bottom: 10px;}
  .margem-b20{margin-bottom: 20px;}
  .margem-b30{margin-bottom: 30px;}
  .margem-x5{margin: 0px 5px;}
  .margem-x10{margin: 0px 10px;}
  .margem-all50{margin: 50px 50px;}
/* Paddings */
  .padding-t8{padding-top: 8px;}
/* Paleta de cores */
  /* Fundos */
  .fundo-20{background-color: #202020;}
  .fundo-30{background-color: #303030;}
  .fundo-40{background-color: #404040;}
  .fundo-60{background-color: #606060;}
  .fundo-70{background-color: #707070;}
  .fundo-80{background-color: #808080;}
  .fundo-aa{background-color: #aaaaaa;}
  .fundo-b0{background-color: #b0b0b0;}
  .fundo-bb{background-color: #bbbbbb;}
  .fundo-c1{background-color: #c1c1c1;}
  .fundo-cc{background-color: #cccccc;}
  .fundo-d2{background-color: #d2d2d2;}
  .fundo-dd{background-color: #dddddd;}
  .fundo-e3{background-color: #e3e3e3;}
  .fundo-e7{background-color: #e7e7e7;}
  .fundo-ee{background-color: #eeeeee;}
  .fundo-f4{background-color: #f4f4f4;}
  .fundo-fa{background-color: #fafafa;} /* Nova cor */
  .fundo-ff{background-color: #ffffff;}
  .fundo-004666{background-color: #004666;}
  .fundo-0084c0{background-color: #0084c0;}
  .fundo-b4ddf0{background-color: #b4ddf0;}
  .fundo-e4f7ff{background-color: #e4f7ff;}
  .fundo-6eea37{background-color: #6eea37;}
  .fundo-ffb300{background-color: #ffb300;}
  .fundo-e33131{background-color: #e33131;}
  /* Textos e outros */
  .cor-20{color: #202020;}
  .cor-40{color: #404040;}
  .cor-60{color: #606060;}
  .cor-70{color: #707070;}
  .cor-80{color: #808080;}
  .cor-80{color: #8a8a8a;} /* Nova cor */
  .cor-aa{color: #aaaaaa;} 
  .cor-cc{color: #cccccc;}
  .cor-ee{color: #eeeeee;}
  .cor-004666{color: #004666;}
  .cor-3586aa{color: #3586aa;} /* Nova cor */
  .cor-0084c0{color: #0084c0;}
  .cor-e33131{color: #e33131;}
  .cor-ff8a8a{color: #ff8a8a;}
  .cor-ffdcdc{color: #ffdcdc;}

/* Fontes de texto e tamanhos*/
  /* Fontes */
  @font-face {font-family: mukta-extralight; src: url(assets/fonts/Mukta-ExtraLight.ttf);}
  .mukta-el{font-family: mukta-extralight;}
  @font-face {font-family: mukta-light; src: url(assets/fonts/Mukta-Light.ttf);}
  .mukta-l{font-family: mukta-light;}
  @font-face {font-family: mukta-medium; src: url(assets/fonts/Mukta-Medium.ttf);}
  .mukta-m{font-family: mukta-medium;}
  @font-face {font-family: mukta-regular; src: url(assets/fonts/Mukta-Regular.ttf);}
  .mukta-r{font-family: mukta-regular;}
  @font-face {font-family: mukta-semibold; src: url(assets/fonts/Mukta-SemiBold.ttf);}
  .mukta-sb{font-family: mukta-semibold;}
  @font-face {font-family: opensans-light; src: url(assets/fonts/OpenSans-Light.ttf);}
  .opensans-l{font-family: opensans-light;}
  @font-face {font-family: opensans-semibold; src: url(assets/fonts/OpenSans-SemiBold.ttf);}
  .opensans-sb{font-family: opensans-semibold;}
  /* Tamanhos */
  .fonte-10{font-size: 10px;}
  .fonte-12{font-size: 12px;}
  .fonte-14{font-size: 14px;}
  .fonte-16{font-size: 16px;}

/* Bordas */
  /* Estilo */ 
  .borda-solida{border-style: solid;}
  /* Espessura */
  .borda-w05{border-width: 0.5px;}
  /* Cor */
  .borda-20{border-color: #202020;}
  .borda-70{border-color: #707070;}
  .borda-aa{border-color: #aaaaaa;}
  .borda-bb{border-color: #bbbbbb;}
  .borda-004666{border-color: #004666;}
  /* Raio */
  .borda-r10{border-radius: 10px;}
  .borda-r5{border-radius: 5px;}

/* Sombras */
  /* Caixas */
  .sombra-caixa{box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}
  .sombra-area-conteudo{box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);}
  /* Textos */

/* Checkboxes */
  .checkbox{width: 20px; height: 20px;}
  .checkbox-content{display: block; position: relative; padding-left: 25px; user-select: none; height: 20px;}
  .checkbox-content input{position: absolute; opacity: 0; height: 0; width: 0;}
  .marcado {position: absolute; top: 0; left: 0; height: 20px; width: 20px; border: 0.5px solid #aaaaaa; border-radius: 5px; background: #ffffff;}
  .marcado:after{content: ''; position: absolute; display: none;}
  .checkbox-content input:checked ~ .marcado:after{display: block;}
  .checkbox-content .marcado:after{top: 5%; left: 5%; width: 90%; height: 90%; background: #aaaaaa; border-radius: 3px;}
/* Cursores */
  /* Pointer */
  .cursor-pointer{cursor: pointer;}
/* Selects e Caixas Input */
  select{background: url(./assets/selecionar.svg) no-repeat right; appearance: none; background-position-x: 218px;}
  select, input[type=email], input[type=text], input[type=password], input[type=number], input[type=link] {height: 42px; width: 240px; border: 0.5px solid #aaaaaa; outline: none; padding-left: 10px;}
  select:focus, input[type=email]:focus, input[type=text]:focus, input[type=password]:focus, input[type=number]:focus, input[type=link]:focus, select:hover, input[type=email]:hover, input[type=text]:hover, input[type=password]:hover, input[type=number]:hover, input[type=link]:hover{background-color: #ffffff; border: 0.5px solid #0084c0 !important;}
  input::-webkit-outer-spin-button, input::-webkit-inner-spin-button{appearance: none; margin: 0;} /* Remover setas do input[type=number] */
/* Botões */
  /* Para a página de autenticação e de registo */
  .botao-autenticacao-registo{height: 42px; width: 100%; border: none; outline: none;}
  .botao-autenticacao-registo a{color: #202020; text-decoration: none;}
  .botao-autenticacao-registo:focus, .botao-autenticacao-registo:hover{background-color: #0084c0;}
/* Animações/Transições */
  .anim-autenticacao-registo{animation: 1.2s ease-in-out 0s 1 surgimento-ar;}
  @keyframes surgimento-ar{0%{opacity: 0; box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);}100%{opacity:1; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);}}
  .anim-area-principal{animation: 0.6s ease-in-out 0s 1 surgimento-ap;}
  @keyframes surgimento-ap{0%{opacity: 0;}100%{opacity: 1;}}
  /* Área de conteúdo sem navegação */
  .anim-sombra-area-conteudo{animation: 1.2s ease-in-out 0s 1 test;}
  @keyframes test{0%{box-shadow: 2px 2px 2px rgba(0, 0, 0, 0);}50%{box-shadow: 2px 2px 2px rgba(0, 0, 0, 0);}100%{ box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);}}
/* Logo */
  #logo-autenticacao-registo{fill: #202020; height: 45px; width: 160px; margin: 35px 0px;}
  #logo-geral{fill: #cccccc; height: 30px; width: 108px; margin: 20px 0px;}
/* Áreas de conteúdo */
  .area-principal{width: 100%; height: 100vh;} /* Obrigatório */
  /* Se a página não tiver navegação, usar apenas este: */
  .area-conteudo{width: 100%; height: calc(100vh - 110px); margin: 70px 40px 40px 40px;}
  /* Caso tenha, usa-se o anterior mais estes dois: */
  .navegador-area-conteudo{height: 50px;}
  .area-conteudo-se-navegador{height: calc(100% - 70px);}
/* Anti-Bootstrap */
  *{outline: none;}
  button:focus{outline: none;} 
</style>
