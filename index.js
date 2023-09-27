

// == Importar Componentes == //



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




// ================================================================================== //


// == Funcoes == //


function animationFavoritos(){

    const favoritos = document.querySelectorAll('.clsfavoritos');

    favoritos.forEach((favorito)=>{

        favorito.addEventListener('click',()=>{

        favorito.classList.toggle('fill-teal-500');
        favorito.classList.toggle('stroke-teal-500');


        })

    })




}

animationFavoritos();




// ================================================================================== //





// == Importar Funcoes == //


import * as funcaoLoading from './funcoes/loading.js'




// ================================================================================== //



// == AO CARREGAR A PÁGINA == //


window.addEventListener('load', ()=> {setTimeout(()=>{funcaoLoading.ocultarLoading(),2000})} )



// ================================================================================== //







