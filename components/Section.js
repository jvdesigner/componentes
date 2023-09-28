




// == Componente de section 01 == //

class section01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        


  <section id="sectioncategorias" class="h-screen ">

  <div class=" px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8  h-full flex flex-col justify-evenly">

    <header class="text-center ">

      <h2 class="text-3xl font-bold text-teal-600 max-sm:text-2xl">
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
        <h2 class="max-md:text-2xl font-bold text-3xl text-teal-600">Promoções da semana</h2>

        <p class="mt-4 text-gray-600 max-md:text-base">
        Descubra nossas promoções imperdíveis da semana e desfrute de sabores incríveis sem pesar no bolso. 
        </p>

        <a
          href="#"
          class="mt-8 hidden rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-400 hover:scale-105"
        >
          Aproveite agora
        </a>

      </div>

      <carousel-02 class="max-md:scale-95"></carousel-02>

    </div>

  </div>

</section>

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-02", section02);


// ================================================================================== //


 // == Componente de section 03 == //

 class section03 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      


<section class="max-w-screen-xl mx-auto h-screen flex items-center justify-center max-lg:flex-col max-lg:justify-evenly p-10">

  <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="max-w-2xl mb-4 text-3xl text-teal-600 font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl ">Por que comprar conosco é uma escolha inteligente?</h1>

            <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Na Sol Nascente, acreditamos que a sua <strong class="text-teal-600">saúde</strong> e <strong class="text-teal-600">bem-estar</strong> são prioridades. É por isso que nos dedicamos a oferecer uma <strong class="text-teal-600">experiência de compra única</strong>, repleta de benefícios que fazem toda a diferença.</p>

  </div>

  <div class="max-w-sm max-md:max-w-xs">

  <carousel-06></carousel-06>
  
  </div>

              

</section>

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-03", section03);


// ================================================================================== //
  
  
  
  
  
  
  
  
  
  