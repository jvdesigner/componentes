

 // ================================== IMPORTAR FUNCOES ================================================ //


 import * as funcoes_carrinho from "../functions/carrinho.js";
 



 // ================================== COMPONENTES ================================================ //

 
// == Componente de alert 01 == //

class alert01 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `


    
          
  
<!-- Codigo -->
      
<div id="successModal" tabindex="-1" aria-hidden="true" class="bg-white/60  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 hidden justify-center items-center w-screen h-screen ">

<div class="relative p-4 w-full max-w-md h-full md:h-auto max-lg:flex max-lg:items-center max-lg:justify-center">

    <div class="relative p-4 text-center bg-white rounded-lg drop-shadow-lg sm:p-5 space-y-6 scale-[1.5] max-lg:scale-100">

        <button type="button" class="hidden text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="successModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
        </button>

        

        <img class="w-20 h-20 mx-auto" src="https://ouch-cdn2.icons8.com/x5xJdYp55m1pPi2QfIQLiYrBaqKNkPo_h3GigEMOfcE/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDgv/MjBlYTBiYjItZDk3/Yy00ZjA1LWI2ZmUt/NGRiNjA3YTk3OWYx/LnBuZw.png" alt="">
    

        <p class="mb-4 text-lg font-semibold text-teal-600">Email enviado com sucesso!</p>

        <button data-modal-toggle="successModal" type="button" class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-700">
            Continue
        </button>

    </div>

</div>

</div>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("alert-01", alert01);



// == Componente de alert 02 == //

class alert02 extends HTMLElement {
    constructor() {
      super();

      const cor = this.getAttribute('cor') || 'green';
      const titulo = this.getAttribute('titulo') || 'Email enviado com sucesso!';
      const mensagem = this.getAttribute('mensagem') || 'Recebemos seu email e entraremos em contato em breve.';

      const tipo = this.getAttribute('tipo') || 'alert';

      let svg01
      let svg02

      if( tipo == 'alert' ){ svg02='flex' }else{  svg02='hidden' }
      if( tipo !== 'alert' ){ svg01='flex' }else{  svg01='hidden' }

  
      this.innerHTML = `

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      
            
    
  <!-- Codigo -->
        
  <div id="compAlert" class="bg-white/60 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen h-screen max-lg:px-8 ">

  <div role="alert" class="max-w-sm scale-110 max-lg:scale-100 rounded-xl border border-gray-100 drop-shadow-xl bg-white p-4 animate__animated  animate__zoomIn">
    
    <div class="flex items-start gap-4">
  
      <span class="text-${cor}-600">
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6 fill-none ${svg01}"
        >
          <path
            stroke-linecap="round"
      
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-none ${svg02}">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>

  
      </span>
  
      <div class="flex-1 space-y-4 mb-4">
        <strong id="tituloAlert" class="block font-medium text-${cor}-600"> ${titulo} </strong>
  
        <p id="textoAlert" class="mt-1 text-sm text-gray-700">
        ${mensagem}
        </p>
      </div>
  
      <button id="btnFecharalert" class="text-gray-500 transition hover:text-gray-600">
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
  
  </div>
  
            
  <!-- Codigo -->
          
  
        `;


    }
  }
  
  customElements.define("alert-02", alert02);


// == Componente de alert 03 == //

class alert03 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    
          
  
<!-- Codigo -->
      
<div class="bg-white/60 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen h-screen max-lg:px-8 ">

<div role="alert" class="rounded-xl border shadow border-gray-100 bg-white p-4 animate__animated  animate__zoomIn">
  
  <div class="flex items-start gap-4">

    <span class="text-red-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

    </span>

    <div class="flex-1">
      <strong class="block font-medium text-gray-900"> Limpar o carrinho </strong>

      <p class="mt-1 text-sm text-gray-700">
        Deseja realmente limpar o carrinho?
      </p>

      <div class="mt-4 flex gap-2">
        <div
          
          class="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700 cursor-pointer clsfecharLimparCarrinho"
        >
          <span class="text-sm"> Cancelar </span>

          
        </div>

        <button
          id="btnLimparCarrinho"
          class="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-gray-50"
        >
          <span class="text-sm">Limpar</span>
        </button>
      </div>
    </div>

    <button class="clsfecharLimparCarrinho text-gray-500 transition hover:text-gray-600">
      <span class="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  
  </div>

</div>

        </div>
          
<!-- Codigo -->
        

      `;

      // fechar modal de limpar carrinho
      const btnFecharCarrinho = this.querySelectorAll('.clsfecharLimparCarrinho');

      btnFecharCarrinho.forEach((btn) => {
        btn.addEventListener('click',()=>{ this.style.display="none" })
      });

      // limpar carrinho
      const btnLimparCarrinho = this.querySelector('#btnLimparCarrinho')

      btnLimparCarrinho.addEventListener('click',()=>{ funcoes_carrinho.limparCarrinho() ; this.style.display="none" })






  }
}

customElements.define("alert-03", alert03);
      

      
      
