

// =================================== IMPORTAR FUNCOES =============================================== //

import * as funcoes_loading from './loading.js'


// =================================== FUNCOES =============================================== //

// funcao para verificar se tem favoritos e emitir alerta
export async function verificarFavoritos(){

    const listaFavoritos = localStorage.getItem('favoritos')

    if(!listaFavoritos){

        funcoes_loading.criarAlerta02('Favoritos Vazio!','Sua lista de favoritos está vazia','red','alert')
        
    }
    else{ window.location.href='/html/favoritos.html' }



}




// =================================== EXECUTAR =============================================== //