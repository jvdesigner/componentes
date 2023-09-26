

// == Importar Componentes == //



import * as compNavbar from './components/Navbar.js'

import * as compHero from './components/Hero.js'

import * as compSection from './components/Section.js'

import * as compCarousel from './components/Carousel.js'

import * as compCards from './components/Cards.js'




// ================================================================================== //


// == Importar Componentes == //


import * as funcaoLoading from './funcoes/loading.js'



// ================================================================================== //




// == AO CARREGAR A PÁGINA == //


window.addEventListener('DOMContentLoaded', funcaoLoading.mostrarLoading() )


window.addEventListener('load', funcaoLoading.ocultarLoading() )



// ================================================================================== //







