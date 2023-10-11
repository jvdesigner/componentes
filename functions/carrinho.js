


 // ================================== IMPORTAR FUNCOES ================================================ //

 import * as funcoes_produtos from "../functions/produtos.js";
 import * as funcoes_loading from "../functions/loading.js";



// =================================== FUNCOES =============================================== //

// Funcao para mostrar carrinho da navbar

export function dropdownCarrinhoNavbar(){

    const navcart = document.getElementById('navcart');
    const navcart2 = document.getElementById('navcart2');
    const btnnavcart = document.getElementById('btnnavcart');
      
    if(navcart.style.display=="block"){navcart.style.display="none";navcart2.style.display="none"}
    else{navcart.style.display="block";navcart2.style.display="block"}

    btnnavcart.classList.toggle('stroke-teal-600')
    

}

// Função para adicionar produto ao carrinho
export function adicionarCarrinho(objProduto,tipo) {

    // Converter carrinho em um objeto
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    // Verificar se o produto já existe no carrinho
    if (carrinho[objProduto.id]) {
        // Se existe, incrementar a quantidade
        if(tipo==='adicionar') {carrinho[objProduto.id].quantidade += 1}
        else{carrinho[objProduto.id].quantidade -= 1};
        
    } else {
        // Se não existe, adicionar o produto ao carrinho
        objProduto.quantidade = 1; // Inicializa a quantidade com 1
        carrinho[objProduto.id] = objProduto;
        
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // chama a funcao para atualizar a interface do carrinho
    atualizarCarrinho()

 
}

// Função para atualizar o carrinho
export function atualizarCarrinho() {

  // galeria do carrinho
  const galeriaItensCarrinho = document.getElementById('galeriaItensCarrinho');

  // retornar do localstorage o carrinho
  let carrinho = JSON.parse(localStorage.getItem('carrinho'));

  // Remove os filhos da galeria
  while (galeriaItensCarrinho.firstChild) {galeriaItensCarrinho.removeChild(galeriaItensCarrinho.firstChild);}

  // retornar se o carrinho estiver vazio
  if (carrinho === null || Object.keys(carrinho).length === 0) {
      // editar texto no carrinho na interface
      galeriaItensCarrinho.textContent ='Carrinho Vazio';
      galeriaItensCarrinho.classList.remove('text-start');
      galeriaItensCarrinho.classList.add('text-center');
      //atualizar total no carrinho
      calcularTotalCarrinho()
      return;
  }

  // componente da interface
  let componenteItensCarrinho;
  let galeriaAtualizada;

  // percorrer objeto carrinho e criar a interface
  for (const chave in carrinho) {
      if (carrinho.hasOwnProperty(chave)) {
          const informacaoProduto = carrinho[chave];

          componenteItensCarrinho = `
              <itemcart-01
                  class=""
                  srcimagem="${informacaoProduto.imagem}"
                  nomeProduto="${informacaoProduto.nome}"
                  idProduto="${informacaoProduto.id}"
                  precoProduto="${informacaoProduto.preco}"
                  qtnProduto="${informacaoProduto.quantidade}"
                  totalProduto="${(parseInt(informacaoProduto.quantidade)*parseFloat(informacaoProduto.preco.replace(',', '.'))).toFixed(2)}"
              ></itemcart-01>
          `;

          galeriaAtualizada = document.createElement('div');
          galeriaAtualizada.classList.add('swiper-slide');
          galeriaAtualizada.innerHTML = componenteItensCarrinho;

          // Use appendChild para adicionar o componente à galeria
          galeriaItensCarrinho.appendChild(galeriaAtualizada);

          // funcao para alterar a quantidade no carrinho pelo botao de aumentar e diminuir
          // parametros >> componente do carrinho | objeto com os dados do carrinho
          funcoes_produtos.alterarQuantidadePai(galeriaAtualizada, informacaoProduto);

          // icone para remover do carrinho
          let iconRemoveitem = galeriaAtualizada.querySelector('.iconRemoveitem');

          iconRemoveitem.addEventListener('click', () => {
              removerItemDoCarrinho(informacaoProduto.id);
          });
      }
  }

  // editar conteudo
  // Verificar se a classe 'text-center' está presente antes de removê-la
  if (galeriaItensCarrinho.classList.contains('text-center')) {galeriaItensCarrinho.classList.remove('text-center')}

  // Adicionar a classe 'text-start' se não estiver presente
  if (!galeriaItensCarrinho.classList.contains('text-start')) {galeriaItensCarrinho.classList.add('text-start')}

  //atualizar total no carrinho
  calcularTotalCarrinho()

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
  
      
    } else {
      console.log(`Item com ID ${idParaRemover} não encontrado no carrinho.`);
    }
}

// função para calcular total no carrinho
export function calcularTotalCarrinho() {

  // elemento de subtotal da interface
  const subtotalCarrinho = document.getElementById('subtotalCarrinho');
  const descontoCarrinho = document.getElementById('descontoCarrinho');
  const totalCarrinho = document.getElementById('totalCarrinho');

  // retornar do localstorage o carrinho
  let carrinho = JSON.parse(localStorage.getItem('carrinho'));

  let subtotal = 0;

  for (const chave in carrinho) {
    if (carrinho.hasOwnProperty(chave)) {
      const produto = carrinho[chave];
      const preco = parseFloat(produto.preco.replace(',', '.')); // Converte o preço para um número com ponto decimal
      const quantidade = parseInt(produto.quantidade);
      subtotal += preco * quantidade;
    }
  }


  const desconto = 0.00; // Você pode ajustar o valor do desconto conforme necessário

  const total = subtotal - desconto;

  subtotalCarrinho.textContent = "R$ " + subtotal.toFixed(2); // Arredonda o subtotal para duas casas decimais e retorna como string
  descontoCarrinho.textContent = "-R$ " + desconto.toFixed(2); // Arredonda o desconto para duas casas decimais e retorna como string
  totalCarrinho.textContent = "R$ " + total.toFixed(2); // Arredonda o total para duas casas decimais e retorna como string
}

// função para limpar carrinho
export function limparCarrinho(){

  // Salvar o carrinho atualizado no localStorage
  localStorage.setItem("carrinho",'{}');

  // chama a funcao para atualizar a interface do carrinho
  atualizarCarrinho()

}

// função para criar alerta de limpar carrinho
export function alertaLimparCarrinho() {

  // Converter carrinho em um objeto
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

  // retornar se o carrinho estiver vazio
  if (carrinho === null || Object.keys(carrinho).length === 0) {return}

  // Crie um elemento "alert-03"
  const alertaElement = document.createElement('div');

  alertaElement.innerHTML='<alert-03></alert-03>'

  // Adicione o elemento "alert-03" ao corpo do documento
  document.body.appendChild(alertaElement);

}

//funcao ir para checkout
export function irparaCheckout(){

   // Converter carrinho em um objeto
   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

   // retornar se o carrinho estiver vazio
   if (carrinho === null || Object.keys(carrinho).length === 0) {
    funcoes_loading.criarAlerta02('Carrinho vazio','Adicione produtos no carrinho para realizar a compra','red','')
    return
  }



   window.location.href="..https://jvdesigner.github.io/ecommerce/html/checkout.html"

}


  
  
  

  
    


  
  


