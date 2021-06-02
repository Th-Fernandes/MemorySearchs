const header =  document.getElementById('header');
header.innerHTML = `   
<nav>
  <a href="./index.html">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg"
      alt="Retornar para a página inicial" />
  </a>

  <button onclick="changeTheme.dark()">
    <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/theme_light_dark_icon_137104.png" alt="Alterar tema">
  </button>
  <a href="#" onclick="options.selecioned()">
    <img src="https://static.thenounproject.com/png/644753-200.png" alt="menu de navegação">
  </a>
</nav>


<h1>Memory Searchs</h1>
<p>A sua plataforma de pesquisas mais confiável do mercado.</p>



<div class="options" id="options">
  <a href="#" onclick="Modal.open()">Criar sua conta / Login</a>
  <a href="./MScoins.html">Formulários preenchidos</a>
  <a href="./MScoins.html">Trocar MS coins por dinheiro</a>
  <a href="./index.html"> Voltar para a Home </a>
</div>  
`

header = {
  addClass() {
    document
    .querySelector('#header')
    .classList
    .add('.cabecalho-principal')
  }
}