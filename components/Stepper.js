


// =================================== COMPONENTES =============================================== //


// == Componente de stepper 01 == //

class stepper01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

<ol id="compStepper" class="flex items-center w-full sm:max-w-2xl">

  <li class="flex w-full items-center text-teal-600  after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-4 after:inline-block cursor-pointer ">

      <div id="divFormInfo" class="flex items-center justify-center w-20 h-10 bg-teal-500 rounded-full lg:h-12 lg:w-16 shadow hover:scale-[1.2] hover:shadow relative group/informacoes">

          <svg class="w-4 h-4 text-white lg:w-6 lg:h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
          </svg>

          <p class="absolute -bottom-4 text-[10px] max-md:text-[8px] w-32 text-center group-hover/informacoes:block hidden animate__fadeInDown animate__animated animate__fast-1s">Informações Pessoais</p>

      </div>

  </li>

  <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-4 after:inline-block cursor-pointer">

      <div id="divFormendereco" class="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-12 lg:w-12  shrink-0 hover:scale-[1.2] hover:shadow relative group/endereco">

          <svg class="w-4 h-4 text-teal-600 lg:w-6 lg:h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
              <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>

          </svg>

          <p class="absolute -bottom-4 text-[10px] max-md:text-[8px] w-32 text-center text-teal-600 group-hover/endereco:block hidden animate__fadeInDown animate__animated animate__fast-1s">Endereço</p>

      </div>

  </li>

  <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-white after:border-4 after:inline-block cursor-pointer relative group/resumo">

      <div id="divFormresumo" class="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-12 lg:w-12  shrink-0 hover:scale-[1.2] hover:shadow">

          <svg class="w-4 h-4 text-teal-600 lg:w-6 lg:h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
          </svg>

          <p class="absolute -bottom-4 text-[10px] max-md:text-[8px] w-32 text-center text-teal-600 group-hover/resumo:block hidden animate__fadeInDown animate__animated animate__fast-1s">Resumo</p>

      </div>

      

  </li>

  <li class="flex items-center cursor-pointer ">
    
      <div id="divFormpagamento" class="flex items-center justify-center w-10 h-10 bg-white rounded-full lg:h-12 lg:w-12 shrink-0 hover:scale-[1.2] hover:shadow relative group/pagamento">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-teal-600 lg:w-6 lg:h-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
        </svg>

        <p class="absolute -bottom-4 text-[10px] max-md:text-[8px] w-32 text-center text-teal-600 group-hover/pagamento:block hidden animate__fadeInDown animate__animated animate__fast-1s">Pagamento</p>


      </div>

  </li>

</ol>

  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
customElements.define("stepper-01", stepper01);