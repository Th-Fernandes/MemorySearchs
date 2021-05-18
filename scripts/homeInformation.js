const informations = {
    click(){
        document.getElementById('aboutUs').innerHTML = `
        
        <div class="text-about">
          <H2>Sobre nós</H2>
          <p>A Memory Searchs nasceu de uma iniciativa de universitários da UFRJ. Fundada em 2017, nosso principal
            objetivo é democratizar e facilitar a coleta de dados de forma segura e confiável</p>
        </div>
  
        <div class="text-about">
          <h2>Nossa missão</h2>
          <p>Nosso principal objetivo é contribuir com o mercado de pesquisa brasileiro, tornando-o o mais transparente
            possível e de fácil acesso para toda a população, indepente da idade.</p>
        </div>
        <div class="text-about">
          <h2>E como fazemos isso?</h2>
          <p>Simples. Fazemos formulários da forma mais simples e entendível possível, com o menor número de ambiguidade
            possível. Aliado a isso, temos nosso sistema de recompensas, onde nossos participantes conseguem trocar seus
            formulários preenchidos por dinheiro real!</p>
  
          <div class="test">
  
            <a href="./generalforms.html">
              <button>
                Comece agora a preencher um de nossos formulários!
              </button>
            </a>
          </div>
        </div>
        `
    }
}