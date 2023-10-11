

// =================================== COMPONENTES =============================================== //


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

      <carousel-02 class="max-md:scale-[0.85]"></carousel-02>

    </div>

  </div>

</section>

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-02", section02);



// == Componente de section 03 == //

 class section03 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      


<section class="max-w-screen-xl mx-auto h-screen flex items-center justify-center max-lg:flex-col max-lg:justify-evenly max-md:px-4">

  <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="max-w-2xl mb-4 text-3xl text-teal-600 font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl ">Por que comprar conosco ?</h1>

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



// == Componente de section 04 == //

 class section04 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<section class="h-screen flex flex-col overflow-x-hidden px-28 max-lg:px-0 relative">

<div class=" px-4 mx-auto lg:px-12 w-full mt-10 relative">

  <form-search class="hidden" id="formsearchproduto"></form-search>

  <carousel-07 id="compCategoriaProdutos" class="hidden items-center"></carousel-07>

  <section id="galeriaProdutos" class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-3 gap-0 max-md:gap-x-2 max-md:gap-y-6 px-10 max-md:px-0 pb-20 max-md:pb-10 pt-8 max-md:pt-0 ">
      

  </section>

  <tabs-01></tabs-01>

  

</div>



</section>
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-04", section04);



 // == Componente de section 05 == //

 class section05 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<section class="h-screen w-screen flex justify-evenly items-center max-md:flex-col-reverse max-md:h-full">

    <footer-02 class="max-lg:mb-28"></footer-02>

    <form-suporte class=" w-1/2 max-lg:w-full"></form-suporte>

</section>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-05", section05);


// == Componente de section 06 == //

 class section06 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<section class="h-screen w-screen flex flex-col items-center p-10 justify-center">

    <cards-06></cards-06>

</section>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-06", section06);


// == Componente de section 07 == //

class section07 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<section class="h-screen max-lg:h-full flex max-lg:flex-col items-center max-lg:justify-center max-lg:px-4  py-8 lg:py-16 antialiased max-lg:mb-20">

    <article class="w-full flex-col items-start max-lg:justify-center">

    <div class="flex max-lg:flex-col mb-2 max-lg:gap-4 max-lg:mb-8">

      <rating-03 class=" w-[40%] max-lg:w-full flex items-center flex-col max-lg:mb-10"></rating-03>

    
      <div class=" w-1/2 max-lg:w-full mx-auto ">

          <!-- titulo -->
          <div class="flex flex-col gap-2 mb-4">

            <p class="text-lg lg:text-xl font-bold text-teal-600">Comentário</p>

              <rating-04></rating-04>

          </div>

          <form-comentario></form-comentario>

      </div>

    </div>


      <div class="px-28 max-lg:px-0">
      
        <p id="totalAvaliacoes" class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Avaliações (20)</p>

        <carousel-08></carousel-08>

      </div>

    </article>
    

</section>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-07", section07);


// == Componente de section 08 == //

class section08 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<section class="w-screen h-screen  py-24 pr-6 pl-20 max-lg:pl-4 max-lg:pr-4  ">

      <header class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-10">

          <h2 id="titleFavoritos" class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-teal-600 ">Meus Favoritos</h2>
          
          <p class="font-normal text-gray-500 sm:text-xl ">Aqui estão seus produtos preferidos! 👍</p>

          <div class="hidden translate-y-40 h-full w-full flex flex-col items-center justify-center  text-teal-600 text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>Galeria vazia</div>

      </header> 

      <section id="containerFavoritos" class="flex flex-col gap-10 max-lg:pb-40">
      
        


      </section>
      

</section>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-08", section08);


// == Componente de section 09 == //

class section09 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      
<section class="h-screen w-screen flex flex-col items-center justify-evenly max-lg:px-10">

    <stepper-01 class="flex items-center w-full sm:max-w-2xl"></stepper-01>

    <form-infopessoais  class="flex items-center w-full sm:max-w-2xl translate-y-10 max-lg:translate-y-10"></form-infopessoais>
    <form-endereco   class="flex items-center w-full sm:max-w-2xl"></form-endereco>
    <form-resumo  class="flex items-center w-full sm:max-w-2xl max-lg:-translate-y-4"></form-resumo>
    <form-pagamento  class="flex items-center w-full sm:max-w-2xl -translate-y-10 max-lg:-translate-y-20"></form-pagamento>

    <div class=" sm:max-w-2xl w-full">
      <p class="text-xs text-teal-600">Navegue pelo menu superior e preencha as informações necessárias nos formulários.</p>
    </div>

</section>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("section-09", section09);


// == Componente de section 10 == //

class section10 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      

  <section class="h-screen w-screen flex items-center justify-center max-md:px-6">

  <article
    class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-sm mx-auto drop-shadow-xl "
  >
  <div class="relative blockimagem">
    <img
      id="imagemEnvio"
      alt="Office"
      src="https://ouch-cdn2.icons8.com/ZANB7SWHgBaK-jQZ8ymEq6rqkN8n4zteScpYYJAMZLU/rs:fit:368:381/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMw/L2MzNzU4Njg0LThk/MzctNDRjMC1hMWYz/LWViZGVkNjliMTYw/Yy5wbmc.png"
      class=" w-[60%] p-6 mx-auto "
    /><skeleton-image class="h-full w-full absolute top-0 skeleton"></skeleton-image>
    </div>


    <div class="p-4 sm:p-6">
      <h4 id="codigoPedido" class="text-xs font-medium text-gray-600 mb-2">
          
      </h4>
      <h3 class="text-lg font-medium text-gray-900 mb-2">
          Status de envio
      </h3>
      <div>
        <h2 id="txtstatusEnvio" class="text-base font-medium  ">
         
        </h2>
      
      </div>

      <p class="mt-4 line-clamp-3 font-semibold text-sm/relaxed text-gray-600 mb-6">
        Salve esse link para acompanhar o status do seu pedido
      </p>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 mb-6">
        Ficou com dúvida? Fale com o  
      <a href="https://jvdesigner.github.io/ecommerce/html/suporte.html" class="underline text-teal-600">
        Suporte
      </a>
      </p>

      <a id="linkVoltar" href="../../index.html" class=" underline text-sm text-teal-700">
        Voltar ao Inicio
      </a>

      
    </div>
  </article>

</section>

          
<!-- Codigo -->
        

      `;
      //controlar esqueleton imagem
    const blockimagem = this.querySelector('.blockimagem')
    const imagem = blockimagem.querySelector('img')
    const esqueleto = blockimagem.querySelector('.skeleton')

    imagem.addEventListener('load',()=>{ esqueleto.classList.remove('flex');esqueleto.classList.add('hidden') })
  }
}

customElements.define("section-10", section10);


  
  
  
  
  
  
  
  
  
  