


// == Componente de cards 01 == //

class cards01 extends HTMLElement {
    constructor() {
      super();

      const srcimagem = this.getAttribute('srcimagem')||'https://i.ibb.co/StwXZqq/Image.png';
      const txtTitulo = this.getAttribute('txtTitulo')||'Categoria';
      const txtTexto = this.getAttribute('txtTexto')||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandaedolores, possimus pariatur animi temporibus nesciunt praesentium dolore.';
      const txtqnt = this.getAttribute('txtqnt')||'0';
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-[1.01] group/categorias cursor-pointer">
  <img
    alt="Office"
    src="${srcimagem}"
    class="h-48 w-full object-contain p-8 group-hover/categorias:-translate-y-2"
  />

  <div class="backdrop-blur-sm bg-white/60 p-4 sm:p-6">
    <div class="block text-xs text-gray-500">
      ${txtqnt} unid
    </div>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">
        ${txtTitulo}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 group-hover/categorias:line-clamp-none text-gray-500">
      ${txtTexto}
    </p>
  </div>
</article>
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("cards-01", cards01);
  
  
  // ================================================================================== //


  // == Componente de cards 02 == //

  class cards02 extends HTMLElement {
    constructor() {
      super();
  
      const srcimagem = this.getAttribute('srcimagem') || 'https://i.ibb.co/StwXZqq/Image.png';
      const nomeProduto = this.getAttribute('nomeProduto') || 'Produto';
      const precoProduto = this.getAttribute('precoProduto') || '0,00';
  
      const numeroEstrelas = this.getAttribute('numeroEstrelas') || 5;

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<div class="group relative block overflow-hidden rounded-lg w-full mx-auto">
  <button
    class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-8 w-8"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src="${srcimagem}"
    alt=""
    class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div class="relative border border-gray-100 bg-white p-6">
    
    <!-- estrelas -->

    <div class="flex gap-0.5 grupoEstrelas">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <!-- estrelas -->

    <h3 class="mt-4 text-2xl font-medium text-gray-900">${nomeProduto}</h3>

    <p class="mt-1.5 text-xl text-gray-700">R$ ${precoProduto}</p>

    <form class="mt-4">
      <button
        class="block w-full rounded text-white bg-teal-600 p-4 text-base font-medium transition hover:scale-105"
      >
        Adicionar
      </button>
    </form>
  </div>
</div>
          
          
<!-- Codigo -->
        

      `;

     // Chama a função preencherEstrelas com o número de estrelas
     this.preencherEstrelas(numeroEstrelas);
    }
  
    preencherEstrelas(numeroEstrelas) {
      const grupoestrelas = this.querySelector('.grupoEstrelas');
      const estrelas = grupoestrelas.querySelectorAll('svg');
  
      for (let i = 0; i < estrelas.length; i++) {
        if (i < numeroEstrelas) {
          estrelas[i].classList.add('text-yellow-500');
        } else {
          estrelas[i].classList.remove('text-yellow-500');
          estrelas[i].classList.add('text-gray-300');
        }
      }
    }

  }
  
  customElements.define("cards-02", cards02);

  
  
  
  
  


// ================================================================================== //
  
  
  
  
  
  
  
  
  
  