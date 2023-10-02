


// =================================== FUNCOES =============================================== //


// Função para adicionar ou remover um produto da lista de favoritos no localstorage (favoritos) com base na existência do ID
// parametros >> id do produto (valorIdProduto)

export function gerenciarProdutoFavorito(valorIdProduto) {

    let produtosFavoritos = localStorage.getItem("favoritos");
    let listaArray;

    if (produtosFavoritos === null) {
        listaArray = [];
    } else {
        listaArray = JSON.parse(produtosFavoritos);
    }

    const indice = listaArray.indexOf(valorIdProduto);

    if (indice !== -1) {
        // O ID já existe na lista, então remova-o
        listaArray.splice(indice, 1);
    } else {
        // O ID não existe na lista, então adicione-o
        listaArray.push(valorIdProduto);
    }

    // Atualiza a lista no localStorage
    const listaString = JSON.stringify(listaArray);
    localStorage.setItem("favoritos", listaString);
    
    //alert(localStorage.getItem("favoritos"))
}


// Função para verificar se um produto está na lista de favoritos 
// parametros >> id do produto
// retorno >> boolean

export function isProdutoFavorito(valorIdProduto) {
    let produtosFavoritos = localStorage.getItem("favoritos");
    let listaArray;

    if (produtosFavoritos === null) {
        listaArray = [];
    } else {
        listaArray = JSON.parse(produtosFavoritos);
    }

    const indice = listaArray.indexOf(valorIdProduto);

    return indice !== -1; // Retorna true se o ID estiver na lista, caso contrário, retorna false
}


// Função para preencher estrelas dos cards 
// parametros >> numero de estrelas
// retorno >> null

export function preencherEstrelas(numeroEstrelas,card) {

    const grupoestrelas = card.querySelector('.grupoEstrelas');
    const estrelas = grupoestrelas.querySelectorAll('svg');

    for (let i = 0; i < estrelas.length; i++) {
        
      if (i < numeroEstrelas) {
        estrelas[i].classList.add('text-teal-500');
      } else {
        estrelas[i].classList.remove('text-teal-500');
        estrelas[i].classList.add('text-gray-300');
      }

    }

  };


// Função para alterar quantidade do input 
// parametros >> numero de estrelas
// retorno >> null

export function alterarQuantidade(tipo,inputQuantity) {

    const valorAtual = parseInt(inputQuantity.value);
  
    if (!isNaN(valorAtual)) {
      if (tipo === 'aumentar') {
        inputQuantity.value = Math.max(1, valorAtual + 1);
      } else if (tipo === 'diminuir') {
        inputQuantity.value = Math.max(1, valorAtual - 1);
      }
      

    }
  }


// Função para efeito de selecao de tabs das categorias dos produtos na galeria
// parametros >> container dos botoes

export function alterarSelecaoCategoriaProdutos(containerTab){

    const tabs = containerTab.querySelectorAll('button')

        tabs.forEach((tab) => {
          tab.addEventListener('click', () => {
            // Remova a classe 'outline' de todos os botões
            tabs.forEach((otherTab) => {
              otherTab.classList.remove('outline')
              otherTab.classList.remove('outline-teal-600')
            })

            // Adicione a classe 'outline' ao botão atual
            tab.classList.add('outline')
            tab.classList.add('outline-teal-600')
          })
        })

}



