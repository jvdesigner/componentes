// -- Cores -- //

const cor01 ="teal";



// ---------------------

// -- COMPONENTS -- //

// ---------------------


// -- Cartões de categoria --//

class sectioncardcategorias extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
            
   
<section id="sectioncard" class="bg-white/60 dark:bg-gray-900">

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-${cor01}-600 dark:text-${cor01}">Categorias</h2>

        <p class="font-light text-${cor01}-500 lg:mb-16 sm:text-xl dark:text-${cor01}-800">Conheça nossas categorias</p>

    </div> 

    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

        <div class="items-center bg-white rounded-lg shadow sm:flex dark:bg-gray-800 opacity-80 hover:opacity-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer p-4">

            <div class="p-6 max-md:w-1/2 mx-auto">
                <img class="bg-contain  rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ouch-cdn2.icons8.com/VIeIM0UwQRrUjWvRinyHhD2gypfDgNbOnAdF5HpZVLc/rs:fit:368:304/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODE2/L2YxNmQ1ZTg3LTk5/ZGItNDhiNS1hZWNi/LTc1Y2M1M2M1Mjlj/MC5wbmc.png" alt="Frutas" style="max-height:120px;max-weight:120px">
            </div>

            <div class="p-5">

                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <a href="#">Frutas</a>
                    <span class="text-${cor01}-700 text-sm">13+</span>
                </h3>

                

                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Aqui você encontrará uma seleção vibrante e fresca de frutas da mais alta qualidade.</p>

                
            </div>

            
        
        </div>  

        <div class="items-center bg-white rounded-lg shadow sm:flex dark:bg-gray-800 opacity-80 hover:opacity-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer p-4">

            <div class="p-6 max-md:w-1/2 mx-auto">
                <img class="bg-contain  rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ouch-cdn2.icons8.com/gRaULMUD9pdL5-jlLRDeRa9C9mNUCKpcUfysp5Kh8Eo/rs:fit:368:330/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzky/LzVmYmU5NmFiLWMx/MDAtNDg4ZS1iOWVm/LWJkZTZhOTdlYTYz/My5wbmc.png" alt="Legumes" style="max-height:120px;max-weight:120px">
            </div>

            <div class="p-5">

                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <a href="#">Legumes</a>
                    <span class="text-${cor01}-700 text-sm">13+</span>
                </h3>

                

                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Cultivados sem o uso de pesticidas químicos, esses legumes são colhidos no auge da frescura e sabor.</p>

                
            </div>

            
        
        </div>  

        <div class="items-center bg-white rounded-lg shadow sm:flex dark:bg-gray-800 opacity-80 hover:opacity-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer p-4">

            <div class="p-6 max-md:w-1/2 mx-auto">
                <img class="bg-contain  rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ouch-cdn2.icons8.com/YX2bT-QaV-5rGFdO1UYVALA3eVQtz-vJT_HXXbwETWU/rs:fit:368:447/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzgzN2JhNjgxLTkw/M2YtNDcxZC05YTUy/LTI5ZDJiYmZmN2Rj/NC5wbmc.png" alt="Vegetais" style="max-height:120px;max-weight:120px">
            </div>

            <div class="p-5">

                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <a href="#">Vegetais</a>
                    <span class="text-${cor01}-700 text-sm">5+</span>
                </h3>

                

                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Cultivados sem o uso de pesticidas químicos, esses legumes são colhidos no auge da frescura e sabor.</p>

                
            </div>

            
        
        </div>  

        <div class="items-center bg-white rounded-lg shadow sm:flex dark:bg-gray-800 opacity-80 hover:opacity-100 dark:border-gray-700 hover:scale-105 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer p-4">

            <div class="p-6 max-md:w-1/2 mx-auto">
                <img class="bg-contain  rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://ouch-cdn2.icons8.com/1O8BC1cTwZdlG_lYzmdcRno5hFeVSfiBLkU2oNIEa2w/rs:fit:368:464/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzMv/YWRmZTU3MmEtMTU3/MS00ODVmLWEyMzkt/OWEzZmZkNzZjOTU2/LnBuZw.png" alt="Laticínios" style="max-height:120px;max-weight:120px">
            </div>

            <div class="p-5">

                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
                    <a href="#">Laticínios</a>
                    <span class="text-${cor01}-700 text-sm">4+</span>
                </h3>

                

                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Cultivados sem o uso de pesticidas químicos, esses legumes são colhidos no auge da frescura e sabor.</p>

                
            </div>

            
        
        </div>  

        

    </div>  

    

</div>

</section>
  
  
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("section-cardcategorias", sectioncardcategorias);
  