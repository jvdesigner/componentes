


// == Componente de hero 01 == //

class hero01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

<section
  
  class="relative h-screen opacity-80 bg-fixed bg-[url(https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)] bg-cover bg-center bg-no-repeat relative"
>
 <div class="absolute top-0 left-0 h-full w-full bg-black/30"></div>

  <div
    class="absolute inset-0  "
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right backdrop-blur-sm bg-white/80 p-10 rounded-lg drop-shadow-lg">
      <h1 class="text-3xl text-gray-900 font-extrabold sm:text-5xl">
        Sua alimentação 

        <strong class="block font-extrabold text-teal-700">
          faz parte de você
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed">
      Faça Escolhas Conscientes para Nutrir Seu Corpo e o Planeta
      </p>

      <div class="mt-8 flex flex-col gap-4 justify-evenly text-center">
        <a
          href="#"
          class="w-full hover:scale-105 block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
        >
          Começar
        </a>

        <a
          href="#sectioncategorias"
          class="w-full  hover:scale-105 block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
        >
          Saiba mais
        </a>
      </div>
    </div>
  </div>
</section>
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("hero-01", hero01);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  