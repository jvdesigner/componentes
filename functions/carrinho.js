


 // ================================== IMPORTAR FUNCOES ================================================ //

 import * as funcoes_produtos from "../functions/produtos.js";


// =================================== FUNCOES =============================================== //

// Funcao para mostrar carrinho da navbar

export function dropdownCarrinhoNavbar(){

    const navcart = document.getElementById('navcart');
    const btnnavcart = document.getElementById('btnnavcart');
      
    if(navcart.style.display=="block"){navcart.style.display="none"}
    else{navcart.style.display="block"}

    btnnavcart.classList.toggle('stroke-teal-600')
    

}

// Função para adicionar produto ao carrinho
export function adicionarCarrinho(objProduto,tipo) {

    // Converter a string JSON do carrinho em um objeto
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    // Verificar se o produto já existe no carrinho
    if (carrinho[objProduto.id]) {
        // Se existe, incrementar a quantidade
        if(tipo==='adicionar') {carrinho[objProduto.id].quantidade += 1}
        else{carrinho[objProduto.id].quantidade -= 1}
    } else {
        // Se não existe, adicionar o produto ao carrinho
        objProduto.quantidade = 1; // Inicializa a quantidade com 1
        carrinho[objProduto.id] = objProduto;
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Exibir o carrinho atualizado no console
    //console.log("Carrinho atualizado:", carrinho);

    atualizarCarrinho()
}

// Função para atualizar o carrinho
export function atualizarCarrinho() {

    // galeria do carrinho
    const galeriaItensCarrinho = document.getElementById('galeriaItensCarrinho');
  
    // carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Remove os filhos
    while (galeriaItensCarrinho.firstChild) {
        galeriaItensCarrinho.removeChild(galeriaItensCarrinho.firstChild);
      }

    // retornar se o carrinho estiver vazio
    if (carrinho === null) {
        
        // editar texto no carrinho
    galeriaItensCarrinho.textContent ='Carrinho Vazio';
    galeriaItensCarrinho.classList.remove('text-start')
    galeriaItensCarrinho.classList.add('text-center')

    
        
    return
    
}
  
    // Array para armazenar as informações de imagem, nome, preço e quantidade
    const informacoesProdutos = [];
  
    // Percorre o objeto carrinho
    for (const chave in carrinho) {
      if (carrinho.hasOwnProperty(chave)) {
        const produto = carrinho[chave];
        const { imagem, nome, preco, quantidade } = produto;
        informacoesProdutos.push(produto);
      }
    }
  
    // Exibe as informações dos produtos no console
    //console.log(informacoesProdutos);
  
    
  
    let componenteItensCarrinho;
    let galeriaAtualizada;
  
    informacoesProdutos.forEach(async (informacaoProduto) => {

      componenteItensCarrinho = `
        <itemcart-01
        class=""
          srcimagem="${informacaoProduto.imagem}"
          nomeProduto="${informacaoProduto.nome}"
          precoProduto="${informacaoProduto.preco}"
          qtnProduto="${informacaoProduto.quantidade}"
        ></itemcart-01>
      `;

       galeriaAtualizada = document.createElement('div')

       galeriaAtualizada.classList.add('swiper-slide')

       galeriaAtualizada.innerHTML=componenteItensCarrinho

      
      // Use appendChild para adicionar o componente à galeria
      galeriaItensCarrinho.appendChild(galeriaAtualizada);

        // funcao para alterar a quantidade no carrinho
        funcoes_produtos.alterarQuantidadePai(galeriaAtualizada,informacaoProduto)

        // icone para remover do carrinho
        let iconRemoveitem = galeriaAtualizada.querySelector('.iconRemoveitem')

        iconRemoveitem.addEventListener('click',()=>{

            removerItemDoCarrinho(informacaoProduto.id)

        })

    });

    
    // editar conteudo
    galeriaItensCarrinho.classList.remove('text-center')
    galeriaItensCarrinho.classList.add('text-start')
    

  }


// função para remover um produto do carrinho

export function removerItemDoCarrinho(idParaRemover) {

    // Obtém o carrinho do armazenamento local
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || {};
  
    if (carrinho[idParaRemover]) {
      // Remove o objeto com o ID especificado do carrinho
      delete carrinho[idParaRemover];
  
      // Atualiza o carrinho no armazenamento local após a remoção
      localStorage.setItem('carrinho', JSON.stringify(carrinho));

      // atualizar carrinho
      atualizarCarrinho()
  
      console.log(`Item com ID ${idParaRemover} removido com sucesso do carrinho.`);
    } else {
      console.log(`Item com ID ${idParaRemover} não encontrado no carrinho.`);
    }
  }
  
  
  

  
    


  
  


