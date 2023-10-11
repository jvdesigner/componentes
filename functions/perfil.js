
import * as funcoes_loading from './loading.js'


 // ================================== FUNCOES ================================================ //

 // Dropdown menu perfil

export function controlarDropdownPerfil(){

    const navProfile = document.getElementById('navProfile');
    const btnimgProfile = document.getElementById('btnimgProfile');
        
    if(navProfile.style.display=="block")
        {navProfile.style.display="none"}
    else
        {navProfile.style.display="block"}

}


// funcao para verificar se tem favoritos e emitir alerta
export async function verificarFavoritos(){

    const listaFavoritos = localStorage.getItem('favoritos')
    const listaConvertida = JSON.parse(listaFavoritos);

    if(!listaConvertida||listaConvertida.length === 0){

        funcoes_loading.criarAlerta02('Favoritos Vazio!','Sua lista de favoritos está vazia','red','alert')
        
    }
    else{ window.location.href='https://jvdesigner.github.io/ecommerce/html/favoritos.html' }



}



