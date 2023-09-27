


// == Componente de testimonials 01 == //

class testimonials01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <section class="h-screen">

  <div class="mx-auto flex flex-col gap-14 max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

    <h2
      // class="text-center text-3xl font-bold tracking-tight text-teal-600 sm:text-3xl"
    >
      O que nossos clientes dizem
    </h2>

    <carousel-03></carousel-03>

  </div>

</section>
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("testimonials-01", testimonials01);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  