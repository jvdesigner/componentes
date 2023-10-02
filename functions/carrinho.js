

// =================================== FUNCOES =============================================== //

// Funcao para mostrar carrinho da navbar

export function dropdownCarrinhoNavbar(){

    const navcart = document.getElementById('navcart');
    const btnnavcart = document.getElementById('btnnavcart');
      
    if(navcart.style.display=="block"){navcart.style.display="none"}
    else{navcart.style.display="block"}

    btnnavcart.classList.toggle('stroke-teal-600')
    

}

// Funcao para adicionar produto ao carrinho
export function adicionarCarrinho(objProduto){

     

   

}
