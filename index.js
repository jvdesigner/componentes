

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

import * as compTabs from './components/Tabs.js'

import * as compAlert from './components/Alerts.js'



// ===================================== Importar Funcoes ============================================= //


import * as funcoes_login from './functions/login.js'

import * as funcoes_loading from './functions/loading.js'

import * as funcoes_localstorage from './functions/localstorage.js'



// ===================================== ADICIONAR EVENTO ============================================= //


// Icone de favoritos
// Adiciona evento click nos elementos da classe clsfavoritos 
// Acao >> Ao clicar o icone coloca ou tira o preenchimento 


const favoritos = document.querySelectorAll('.clsfavoritos');

favoritos.forEach((favorito)=>{

        favorito.addEventListener('click',()=>{

        favorito.classList.toggle('fill-teal-600');
        


        })

})



// Formulario de Login | cadastro
// Acao >> Abrir o formulario de login
// Adiciona evento click nos botoes de entrar e cadastro para abrir o formulario

const btnEntrar = document.getElementById('btnEntrar')
const btnCadastrar = document.getElementById('btnCadastrar')
const objFormLogin = document.getElementById('objFormLogin')


btnEntrar.addEventListener('click',  ()=> {
  funcoes_login.ocultarobjLoginCadastro("login");
    objFormLogin.style.display="block";
    document.documentElement.style.overflow = 'hidden';
} )

btnCadastrar.addEventListener('click',  ()=> {
  funcoes_login.ocultarobjLoginCadastro("cadastro");
    objFormLogin.style.display="block";
    document.documentElement.style.overflow = 'hidden';
} )


// Janela Atual
// evento >> carregamento completo
// acao >> remover o componente de loading
// Ocultar carregando quando a tela carregar

window.addEventListener('load',()=>{ funcoes_loading.ocultarLoading() })



// ===================================== EXECUTAR ============================================= //



// Mostrar carregando

funcoes_loading.mostrarLoading();

// printar localstorage

//funcoes_localstorage.MostrarDadosLocalstorage();



/* Anotacoes

// =====================================  Cookies | Localstorage | SessionStorage  ============================================= //

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



