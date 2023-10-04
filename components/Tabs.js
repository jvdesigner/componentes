


// =================================== COMPONENTES =============================================== //

  // == Componente de tabs 01 == //

  class tabs01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        
  <div class="flex justify-center gap-1 text-xs font-medium pb-2 mx-auto mt-10 max-md:mt-0 max-md:mb-28 mb-20 scale-110 max-md:scale-100">
  <li
      class="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 hover:-translate-y-1"
    >
      <span class="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
  </li>

  <li
      class="cursor-pointer block h-8 w-8 rounded border  border-gray-100 bg-teal-600 hover:-translate-y-1 text-center leading-8 text-white"
    >
      1
   
  </li>

  <li
    class="cursor-pointer block h-8 w-8 rounded border border-gray-100 hover:-translate-y-1 bg-white text-center leading-8 text-gray-900"
  >
    2
  </li>

  <li
      class="cursor-pointer block h-8 w-8 rounded border border-gray-100 hover:-translate-y-1 bg-white text-center leading-8 text-gray-900"
    >
      3

  </li>

  <li
      class="cursor-pointer block h-8 w-8 rounded border border-gray-100 hover:-translate-y-1 bg-white text-center leading-8 text-gray-900"
    >
      4

  </li>

  <li
      class="cursor-pointer inline-flex h-8 w-8 items-center justify-center hover:-translate-y-1 rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span class="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
  
  </li>
</div>
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("tabs-01", tabs01);
  
  