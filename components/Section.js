




// == Componente de hero 01 == //

class section01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        


  <section id="sectioncategorias" class="h-screen ">

  <div class=" px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8  h-full flex flex-col justify-evenly">

    <header class="text-center ">

      <h2 class="text-4xl font-bold text-teal-900 max-sm:text-3xl">
       Categorias
      </h2>

      <p class="max-w-md mx-auto mt-4 text-teal-500">
        Conheça nossas categorias
      </p>

    </header>

    <carousel-01></carousel-01>

    
  </div>

</section>
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("section-01", section01);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  