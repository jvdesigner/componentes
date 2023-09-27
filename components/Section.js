




// == Componente de section 01 == //

class section01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        


  <section id="sectioncategorias" class="h-screen ">

  <div class=" px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8  h-full flex flex-col justify-evenly">

    <header class="text-center ">

      <h2 class="text-4xl font-bold text-teal-600 max-sm:text-3xl">
       Categorias
      </h2>

      <p class="max-w-md mx-auto mt-4 text-gray-600">
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



  // == Componente de section 02 == //

class section02 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<section class="h-screen">

  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

    


      <div class="lg:py-24 max-lg:text-center">
        <h2 class="text-3xl font-bold sm:text-4xl text-teal-600">Promoções da semana</h2>

        <p class="mt-4 text-gray-600">
        Descubra nossas promoções imperdíveis da semana e desfrute de sabores incríveis sem pesar no bolso. 
        </p>

        <a
          href="#"
          class="mt-8 hidden rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400 hover:scale-105"
        >
          Aproveite agora
        </a>

      </div>

      <carousel-02></carousel-02>

    </div>

  </div>

</section>

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-02", section02);


// ================================================================================== //
  
  
  
  
  
  
  
  
  
  