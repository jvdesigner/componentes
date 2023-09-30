

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
  
  
  // ================================================================================== //

    // == Componente de alert 01 == //

    class alert02 extends HTMLElement {
        constructor() {
          super();
      
          this.innerHTML = `
          
                
        
      <!-- Codigo -->
            
      <div class="bg-white/60 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen h-screen max-lg:px-8">

      <div role="alert" class="max-w-sm scale-110 max-lg:scale-100 rounded-xl border border-gray-100 drop-shadow-xl bg-white p-4">
        
        <div class="flex items-start gap-4">
      
          <span class="text-green-600">
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 fill-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
      
          </span>
      
          <div class="flex-1">
            <strong class="block font-medium text-green-600"> Email enviado com sucesso! </strong>
      
            <p class="mt-1 text-sm text-gray-700">
              Recebemos seu email e entraremos em contato em breve.
            </p>
          </div>
      
          <button class="text-gray-500 transition hover:text-gray-600">
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
      
      
      // ================================================================================== //