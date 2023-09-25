// -- Cores -- //

const cor01 ="teal";



// ---------------------

// -- COMPONENTS -- //

// ---------------------


// -- Cartões de categoria --//

class cardstipo01 extends HTMLElement {
    constructor() {
      super();

      const srcimagem = this.getAttribute('srcimagem');
      const titulo = this.getAttribute('titulo');
      const texto = this.getAttribute('texto');
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->

        <div class=" group/fru items-center bg-white rounded-lg  sm:flex dark:bg-gray-800 opacity-80 hover:opacity-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer p-4 outline outline-2 outline-gray-200 hover:drop-shadow-${cor01}">

            <div class="p-6 max-md:w-1/2 mx-auto group-hover/fru:-translate-y-4">
                <img class="bg-contain  rounded-lg sm:rounded-none sm:rounded-l-lg" src="${srcimagem}" style="max-height:120px;max-weight:120px">
            </div>

            <div class="p-5">

                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <a href="#">${titulo}</a>
                    
                </h3>

                

                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">${texto}</p>

                
            </div>

            
        
        </div>  

       
  
  
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("cards-categorias", cardstipo01);
  