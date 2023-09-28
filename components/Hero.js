


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
      Faça escolhas conscientes para nutrir seu corpo e o planeta
      </p>

      <div class="mt-8 flex flex-col gap-4 justify-evenly text-center">
        <a
          href="#"
          class="w-full hover:scale-[1.02] block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
        >
          Começar
        </a>

        <a
          href="#sectioncategorias"
          class="w-full  hover:scale-[1.02] block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
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


  // == Componente de hero 02 == //

class hero02 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<section class="h-screen flex items-center">

    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">

        <div class="font-light text-gray-500 sm:text-lg">

            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-teal-600 ">Nossa história</h2>

            <p class="mb-4 font-normal">Desde nossa fundação em 2010, nossa paixão por <strong class="text-teal-600">alimentos orgânicos</strong> e <strong class="text-teal-600">sustentabilidade</strong> tem nos guiado. Começamos com uma pequena horta e a determinação de oferecer produtos saudáveis e de <strong class="text-teal-600">alta qualidade</strong> para nossos clientes.</p>
            <p class="mb-4 font-normal">Ao longo dos anos, crescemos e expandimos nossa oferta, mas nunca perdemos nossa conexão com a </strong>natureza</strong> e a comunidade local.</p>

        </div>

        <div class="max-lg:max-w-lg">

            <carousel-04></carousel-04>

        </div>

    </div>

</section>

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("hero-02", hero02);


// ================================================================================== //


  // == Componente de hero 03 == //

  class hero03 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        
  <section class="h-screen flex items-center">

    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 max-sm:flex-col-reverse max-sm:flex max-sm:gap-8">

        <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="max-w-2xl mb-4 text-3xl text-teal-600 font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl ">Nossa Missão e Compromisso</h1>

            <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">Nossa missão é simples e poderosa: proporcionar uma experiência de <strong class="text-teal-600">alimentação saudável e sustentável para todos</strong>.<br><br> Acreditamos que a escolha de alimentos orgânicos não deve ser um luxo, mas sim um direito.Estamos comprometidos em fornecer <strong class="text-teal-600">alimentos de qualidade</strong> que beneficiem a <strong class="text-teal-600">saúde das pessoas</strong> e o <strong class="text-teal-600">bem-estar do planeta</strong>.</p>

        </div>

        <div class=" lg:mt-0 lg:col-span-5 flex ">

            <carousel-05></carousel-05>

        </div>    

    </div>

</section>
  
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("hero-03", hero03);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  