

// ===================================== Importar Componentes ============================================= //


import * as compNavbar from './components/Navbar.js'

import * as compHero from './components/Hero.js'

import * as compSection from './components/Section.js'

import * as compCarousel from './components/Carousel.js'

import * as compCards from './components/Cards.js'

import * as compAvatar from './components/Avatar.js'

import * as compMenu from './components/Menu.js'

import * as compTestimonials from './components/Testimonials.js'

import * as compFQA from './components/FQA.js'

import * as compFooter from './components/Footer.js'

import * as compCart from './components/Cart.js'

import * as compForms from './components/Forms.js'



// ===================================== Importar Funcoes ============================================= //


import * as funcaoLoading from './funcoes/loading.js'






// ===================================== Funcoes ============================================= //



// funcao que preenche o icone de meus curtidos


const favoritos = document.querySelectorAll('.clsfavoritos');

favoritos.forEach((favorito)=>{

        favorito.addEventListener('click',()=>{

        favorito.classList.toggle('fill-teal-600');
        


        })

})


// Abrir formulario de login

const btnEntrar = document.getElementById('btnEntrar')
const objFormLogin = document.getElementById('objFormLogin')
const fecharFormLogin = document.getElementById('fecharFormLogin')
const fecharFormLogin2 = document.getElementById('fecharFormLogin2')


btnEntrar.addEventListener('click', ()=> {objFormLogin.style.display="block";document.documentElement.style.overflow = 'hidden';} )

fecharFormLogin.addEventListener('click', ()=> {objFormLogin.style.display="none";document.documentElement.style.overflow = 'auto';} )
fecharFormLogin2.addEventListener('click', ()=> {objFormLogin.style.display="none";document.documentElement.style.overflow = 'auto';} )







// ===================================== AO CARREGAR A PÁGINA ============================================= //


window.addEventListener('load', ()=> {setTimeout(()=>{funcaoLoading.ocultarLoading(),2000})} )






// ===================================== localStorage ============================================= //


// -- funcoes

// Função para calcular o tamanho total do armazenamento localStorage

function calcularTamanhoLocalStorage() {

    let tamanhoTotal = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const valor = localStorage.getItem(chave);
        tamanhoTotal += chave.length + valor.length;
    }

    // Converta para megabytes (opcional)
    const tamanhoMB = (tamanhoTotal / (1024 * 1024)).toFixed(2);

    console.log(`Tamanho do localStorage: ${tamanhoMB} MB`);

}

// Use a função para obter o tamanho total
//calcularTamanhoLocalStorage();

// -- objetos no armazenamento

// Lista de produtos favoritos 
//alert(localStorage.getItem("favoritos"))

//limpar localstorage
//localStorage.clear(); 












// ===================================== RASCUNHO ============================================= //




/* 

>> Cookies << 

. Cookies são pequenos pedaços de dados que podem ser armazenados no navegador do usuário. 
. Eles têm um tamanho limitado (geralmente alguns kilobytes) e podem ser lidos tanto no lado do cliente quanto no servidor. 
. Você pode usar JavaScript para criar, ler e excluir cookies. 

-- codigo --

document.cookie = "nome=João; expires=Thu, 01 Jan 2023 00:00:00 UTC; path=/";



>> localStorage << 

. O localStorage é um objeto de armazenamento de valor-chave (key-value) persistente que permite armazenar dados no navegador com um limite maior de armazenamento em comparação com cookies (geralmente vários megabytes). 
. Ele é fácil de usar e os dados são mantidos mesmo após o fechamento do navegador. 

-- codigo --

// Para definir um valor
localStorage.setItem("nome", "João");

// Para recuperar um valor
const nome = localStorage.getItem("nome");

// Para remover um valor
localStorage.removeItem("nome");

// Remove todos os itens
localStorage.clear(); 


>> sessionStorage << 

. O sessionStorage é semelhante ao localStorage, mas os dados são armazenados apenas para a duração da sessão do navegador. 
. Isso significa que os dados são perdidos quando o navegador é fechado.

-- codigo --

// Para definir um valor
sessionStorage.setItem("nome", "Maria");

// Para recuperar um valor
const nome = sessionStorage.getItem("nome");

// Para remover um valor
sessionStorage.removeItem("nome");

// Remove todos os itens
sessionStorage.clear(); 


*/



