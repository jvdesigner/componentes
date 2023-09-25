// animacao

// animate__animated  animate__fadeInLeft animate__slow



// -- Conteudo Hero -- //

const imghero = "https://i.ibb.co/Q7WRnyd/imgHero.png";
const txttitulo = "100% Natural Food";
const txtsubtitulo = "Escolha a melhor maneira para uma vida mais saudável";



// -- Cores -- //

const cor01 ="teal";




// ---------------------

// -- COMPONENTS -- //

// ---------------------


// -- Visual image with heading  --//

class herowithimage extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
          
 
<section class="dark:bg-gray-900 h-screen">

    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-lg:flex max-lg:flex-col-reverse">

        <div class="mr-auto place-self-center lg:col-span-7">

            <p class="max-w-2xl mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-${cor01}-800 text-${cor01}-600">${txttitulo}</p>

            <h1 class="max-w-2xl mb-10 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-${cor01} text-teal-600">${txtsubtitulo}</h1>
            
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-${cor01}-700 hover:bg-${cor01}-800 focus:ring-4 focus:ring-${cor01}-300 dark:focus:ring-${cor01}-900 hover:scale-105">

                Começar

                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>

            <a href="#sectioncard" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:scale-105">
                Saiba mais
            </a> 

        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex max-sm:w-48 max-sm:mx-auto w-96 element-to-float ">
            <img src="${imghero}" alt="imagem hero">
        </div>                
    </div>
</section>



          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("hero-image", herowithimage);
