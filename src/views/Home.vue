<template>
  <div class="home">
    <h1>Bem vindo ao WebGIS do LAGAS</h1>
    <a href="lagas.unb.br"><img src="../assets/lagas.png" alt="logo do LAGAS"></a>
    <h2>Objetivos:</h2>
    <h4>Essa página vai mostrar a distribuição espacial de todos os trabalhados já publicados por membros do lagas, separados por tipos de publicação.</h4>
    <h4>Introduzir membros, parceiros e colegas do LAGAS à novas possibilidades tecnológicas para a Geografia.</h4>
    <h2>Tecnologias utilizadas:</h2>
    <h4><span>Linguagens</span> - HTML, CSS e JavaScript</h4>
    <h4><span>Frameworks</span> - VueJS</h4>
    <h4><span>Bibliotecas</span> - MapBox GL JS</h4>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
  img {
    max-height: 150px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  
  h1 {
    padding: 20px;
    padding-left: 0;
    text-decoration: underline;
  }
  
  .home {
    text-align: left;
    padding-left: 20px;
  }

  h2 {
    background-color: #50ce8bbd;
    display: inline-block;
    transform: rotate(-4deg);
  }

  span {
    font-size: 1.2em;
  }
</style>