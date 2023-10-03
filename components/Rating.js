
 // ================================== IMPORTAR FUNCOES ================================================ //


 import * as funcoes_produtos from "../functions/produtos.js";

 import * as funcoes_formulario from "../functions/formulario.js";



// =================================== COMPONENTES =============================================== //


// == Componente de rating 01 == //

class rating01 extends HTMLElement {
    constructor() {
      super();


      const nEstrelas = this.getAttribute('nEstrelas')||'5';
      const porcentagem = this.getAttribute('porcentagem')||'70';
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <!-- estrelas -->
  <div class="flex items-center justify-center mt-4 w-full">

      <a href="#" class="text-sm font-medium text-gray-600  hover:underline">${nEstrelas} </a>

      <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded ">
          <div class="h-5 bg-teal-600 rounded" style="width: ${porcentagem}%"></div>
      </div>

      <span class="text-sm font-medium text-gray-500 ">${porcentagem}%</span>

  </div>
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
customElements.define("rating-01", rating01);


// == Componente de rating 02 == //

class rating02 extends HTMLElement {
    constructor() {
      super();


      const nEstrelas = this.getAttribute('nEstrelas')||'5';
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <div id="classificaoProduto" class=" flex items-center justify-center mb-6 w-full">

      
     <p class="ml-2 text-4xl font-medium text-teal-600 mr-2">${nEstrelas}</p>

     <div class="grupoEstrelas flex items-center">

      <svg class="w-6 h-6  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>

      <svg class="w-6 h-6  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>

      <svg class="w-6 h-6  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>

      <svg class="w-6 h-6  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>

      <svg class="w-6 h-6  mr-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>

      </div>
      
  </div>
  
            
            
  <!-- Codigo -->
          
  
        `;

        // Chama a função preencherEstrelas com o número de estrelas
        funcoes_produtos.preencherEstrelas(nEstrelas,this);


    }
  }
  
customElements.define("rating-02", rating02);



// == Componente de rating 03 == //

class rating03 extends HTMLElement {
    constructor() {
      super();

  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <!-- resumo classificacao -->
  <section class="w-full ">

    <rating-02 nEstrelas="4"></rating-02>

    <rating-01 nEstrelas="5" porcentagem="70" ></rating-01>
    <rating-01 nEstrelas="4" porcentagem="50" ></rating-01>
    <rating-01 nEstrelas="3" porcentagem="20" ></rating-01>
    <rating-01 nEstrelas="2" porcentagem="10" ></rating-01>
    <rating-01 nEstrelas="1" porcentagem="5" ></rating-01>

  </section>
  
            
            
  <!-- Codigo -->
          
  
        `;



    }
  }
  
customElements.define("rating-03", rating03);


// == Componente de rating 04 == //

class rating04 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <div class="flex items-center space-x-1 cursor-pointer">

    <svg class="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>

    <svg class="w-6 h-6 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>


    <svg class="w-6 h-6 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  

    <svg class="w-6 h-6 text-gray-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>


    <svg class="w-6 h-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>


</div>

 
            
            
  <!-- Codigo -->
          
  
        `;

        funcoes_formulario.preencherEstrelasClassificacao(this)

    }
  }
  
customElements.define("rating-04", rating04);