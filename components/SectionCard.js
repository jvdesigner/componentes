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
            
   
<section id="sectioncard" class="bg-white/60 dark:bg-gray-900 h-screen max-md:h-full">

<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">

    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">

        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-${cor01}-600 dark:text-${cor01}">Categorias</h2>

        <p class="font-light text-${cor01}-500 lg:mb-16 sm:text-xl dark:text-${cor01}-800">Conheça nossas categorias</p>

    </div> 

    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">


        <cards-categorias srcimagem="https://ouch-cdn2.icons8.com/VIeIM0UwQRrUjWvRinyHhD2gypfDgNbOnAdF5HpZVLc/rs:fit:368:304/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODE2/L2YxNmQ1ZTg3LTk5/ZGItNDhiNS1hZWNi/LTc1Y2M1M2M1Mjlj/MC5wbmc.png" titulo="Frutas" texto="Aqui você encontrará uma seleção vibrante e fresca de frutas da mais alta qualidade." ></cards-categorias>


        <cards-categorias srcimagem="https://ouch-cdn2.icons8.com/zgyiAAx-9k7cwsVXLlrSwZE6pKTQFtt6nQxG4fHP2MA/rs:fit:368:712/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzA5/LzI3NjAxYTdkLTg2/OWUtNDUxMS05Njhm/LTZlZTJmMjU4ZWY1/MS5wbmc.png" titulo="Legumes" texto="Cultivados sem o uso de pesticidas químicos, esses legumes são colhidos no auge da frescura e sabor." ></cards-categorias>

        <cards-categorias srcimagem="https://ouch-cdn2.icons8.com/YX2bT-QaV-5rGFdO1UYVALA3eVQtz-vJT_HXXbwETWU/rs:fit:368:447/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQw/LzgzN2JhNjgxLTkw/M2YtNDcxZC05YTUy/LTI5ZDJiYmZmN2Rj/NC5wbmc.png" titulo="Vegetais" texto="Cada vegetal é cultivado com cuidado, livre de pesticidas químicos, para proporcionar a você a frescura e o valor nutricional que você merece." ></cards-categorias>


        <cards-categorias srcimagem="https://ouch-cdn2.icons8.com/1O8BC1cTwZdlG_lYzmdcRno5hFeVSfiBLkU2oNIEa2w/rs:fit:368:464/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzMv/YWRmZTU3MmEtMTU3/MS00ODVmLWEyMzkt/OWEzZmZkNzZjOTU2/LnBuZw.png" titulo="Laticínios" texto="Nossos laticínios são a escolha perfeita para aqueles que desejam desfrutar de produtos lácteos de maneira ética e sustentável." ></cards-categorias>


    </div>  

    

</div>

</section>
  
  
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("section-cardcategorias", sectioncardcategorias);
  