


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
// paramentros >> id do produto
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








