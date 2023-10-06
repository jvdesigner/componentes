
 // ================================== IMPORTAR FUNCOES ================================================ //


import * as funcoes_produtos from "../functions/produtos.js";

import * as funcoes_carrinho from "../functions/carrinho.js";

import * as funcoes_data from "../functions/data.js";



// ================================== COMPONENTES ================================================ //


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

    
      <h3 class="mt-0.5 text-lg text-gray-900">
        ${txtTitulo}
      </h3>

      <div class="block text-xs text-gray-500">
      ${txtqnt} unid
    </div>
  

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


  // == Componente de cards 02 == //

  class cards02 extends HTMLElement {
    constructor() {
      super();
  
      const srcimagem = this.getAttribute('srcimagem') || 'https://i.ibb.co/StwXZqq/Image.png';
    const nomeProduto = this.getAttribute('nomeProduto') || 'Produto';
    const precoProduto = this.getAttribute('precoProduto') || '0,00';
    const medidaProduto = this.getAttribute('medidaProduto') || 'kg';
    const pesoProduto = this.getAttribute('pesoProduto') || 0;
    const idProduto = this.getAttribute('idProduto') || 1;
    const numeroEstrelas = this.getAttribute('numeroEstrelas') || 5;
    const descricaoProduto = this.getAttribute('descricaoProduto') || 
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.';
    const CategoriaProduto = this.getAttribute('CategoriaProduto') || 'Categoria';

    // dados do produto em obj
    const objProduto = { id:idProduto , imagem:srcimagem , nome:nomeProduto , preco:precoProduto, medida:medidaProduto, peso:pesoProduto , classificacao:numeroEstrelas , descricao:descricaoProduto , categoria:CategoriaProduto};

      let preenchimentoFavorito="";

      // Preencher o icone de favoritos de estiver na lista de favoritos
      if (funcoes_produtos.isProdutoFavorito(idProduto)) { preenchimentoFavorito = "fill-teal-600"} 

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<div class="group relative block overflow-hidden rounded-lg w-full mx-auto">
  <button
    class="absolute end-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-8 w-8 hover:scale-105 clsfavoritos stroke-teal-600 ${preenchimentoFavorito}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>
  
  <div class="relative blockimagem">
  <img
    src="${srcimagem}"
    alt=""
    class="imagemProduto h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  /><skeleton-image class="h-full w-full absolute top-0 skeleton"></skeleton-image>
  </div>

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

    <p class="mt-1.5 text-lg text-gray-600">${pesoProduto} ${medidaProduto}</p>

    <p class="mt-4 text-2xl text-gray-700 font-semibold">R$ ${precoProduto}</p>

    <div class="mt-10">
      <button
        class="btnadicionarCarrinho flex justify-center gap-4 w-full rounded text-white bg-teal-600 p-4 text-base font-medium transition hover:scale-[1.02]"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11" fill="none">
  <path d="M0.482422 0.929688H1.31645C1.83412 0.929688 2.24155 1.37546 2.19841 1.88834L1.80057 6.66243C1.78504 6.84739 1.80809 7.03355 1.86827 7.20913C1.92845 7.38471 2.02444 7.54587 2.15016 7.68241C2.27589 7.81895 2.4286 7.92788 2.59863 8.00231C2.76865 8.07675 2.95229 8.11505 3.13789 8.11479H8.24272C8.93295 8.11479 9.5369 7.54919 9.58963 6.86375L9.84847 3.2688C9.90599 2.47312 9.30203 1.82603 8.50156 1.82603H2.31345M3.83771 3.80565H9.58963M7.31283 10.5162C7.47173 10.5162 7.62413 10.4531 7.7365 10.3407C7.84886 10.2284 7.91199 10.076 7.91199 9.91706C7.91199 9.75816 7.84886 9.60576 7.7365 9.49339C7.62413 9.38103 7.47173 9.3179 7.31283 9.3179C7.15392 9.3179 7.00152 9.38103 6.88916 9.49339C6.77679 9.60576 6.71367 9.75816 6.71367 9.91706C6.71367 10.076 6.77679 10.2284 6.88916 10.3407C7.00152 10.4531 7.15392 10.5162 7.31283 10.5162ZM3.47821 10.5162C3.63712 10.5162 3.78952 10.4531 3.90188 10.3407C4.01425 10.2284 4.07737 10.076 4.07737 9.91706C4.07737 9.75816 4.01425 9.60576 3.90188 9.49339C3.78952 9.38103 3.63712 9.3179 3.47821 9.3179C3.31931 9.3179 3.16691 9.38103 3.05454 9.49339C2.94218 9.60576 2.87906 9.75816 2.87906 9.91706C2.87906 10.076 2.94218 10.2284 3.05454 10.3407C3.16691 10.4531 3.31931 10.5162 3.47821 10.5162Z" stroke="white" stroke-width="0.71899" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        Adicionar
      </button>
    </div>
  </div>
</div>
          
          
<!-- Codigo -->
        

      `;

     // Chama a função preencherEstrelas com o número de estrelas
     funcoes_produtos.preencherEstrelas(numeroEstrelas,this);

     // Chama funcao para adicionar/remover o produto a lista de favoritos
     const colFavoritos = this.querySelector('.clsfavoritos')
     
     colFavoritos.addEventListener('click', ()=> { 

      funcoes_produtos.gerenciarProdutoFavorito(idProduto);

      if (funcoes_produtos.isProdutoFavorito(idProduto)) { colFavoritos.classList.add("fill-teal-600")} 
      else{ colFavoritos.classList.remove("fill-teal-600")}

    }) 

     // Adicionar ao localstorage as informacoes do Produto selecionado
    this.querySelector('.imagemProduto').addEventListener('click',()=>{

      localStorage.setItem('localobjProduto', JSON.stringify(objProduto));
  
      window.location.href = "../html/detalhesProduto.html";
  
      });

      // Adicionar produto ao carrinho
    this.querySelector('.btnadicionarCarrinho').addEventListener('click', ()=>{ 
      funcoes_carrinho.adicionarCarrinho(objProduto,'adicionar') ;
     funcoes_carrinho.dropdownCarrinhoNavbar()
   });

   //controlar esqueleton imagem
   const blockimagem = this.querySelector('.blockimagem')
   const imagem = blockimagem.querySelector('img')
   const esqueleto = blockimagem.querySelector('.skeleton')

   imagem.addEventListener('load',()=>{ esqueleto.classList.remove('flex');esqueleto.classList.add('hidden') })



    }
  
  }
  
customElements.define("cards-02", cards02);



 // == Componente de cards 03 == //

 class cards03 extends HTMLElement {
  constructor() {
    super();

    const srcimagem = this.getAttribute('srcimagem') || 'https://i.ibb.co/TvvbPRZ/Image.png';
    const nomeCliente = this.getAttribute('nomeCliente') || 'Cliente';
    const textoCliente = this.getAttribute('textoCliente') || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempore sit, dolorum reprehenderit adipisci et ullam unde vero quae possimus, iure sed obcaecati repudiandae impedit praesentium velit quaerat cum modi?';

    const numeroEstrelas = this.getAttribute('numeroEstrelas') || 5;

  this.innerHTML = `
  
        

<!-- Codigo -->
    

<div class="rounded-lg bg-white p-6 drop-shadow-lg sm:p-8">

        <div class="flex items-center gap-4">

          <img
            alt="cliente"
            src="${srcimagem}"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>

            <div class="flex justify-center gap-0.5 text-teal-500 grupoEstrelas">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p class="mt-0.5 text-lg font-medium text-gray-900">${nomeCliente}</p>
          </div>
        </div>

        <p class="mt-6 text-gray-700" style="min-height:120px">
         ${textoCliente}
        </p>
      </div>

        
        
<!-- Codigo -->
      

    `;

    // Chama a função preencherEstrelas com o número de estrelas
    funcoes_produtos.preencherEstrelas(numeroEstrelas,this);
   
  }

}

customElements.define("cards-03", cards03);
  

// == Componente de cards 04 == //

class cards04 extends HTMLElement {
  constructor() {
    super();

    const srcimagem = this.getAttribute('srcimagem')||'https://i.ibb.co/StwXZqq/Image.png';
    const txtTitulo = this.getAttribute('txtTitulo')||'Titulo';
    const txtTexto = this.getAttribute('txtTexto')||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandaedolores, possimus pariatur animi temporibus nesciunt praesentium dolore.';
    

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<div class="p-0 max-w-lg ">
<div class="group relative block h-64 sm:h-80 lg:h-96 cursor-pointer ">
  <span class=" absolute inset-0 border-2 border-dashed border-teal-200 rounded-2xl drop-shadow-md"></span>

  <div
    class="relative flex h-full transform items-end border-2  hover:drop-shadow-xl bg-white/70 rounded-2xl transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 "
  >
    <div
      class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 flex flex-col items-center  h-full justify-center mx-auto"
    >
      <img class="w-[80%] max-md:w-[60%] max-h-[200px]" src="${srcimagem}" alt="">

      <h2 class="mt-4 text-lg text-teal-600 max-md:text-base font-medium">${txtTitulo}</h2>
    </div>

    <div
      class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 class="mt-4 text-xl font-medium sm:text-2xl text-teal-600">${txtTitulo}</h3>

      <p class="mt-4 text-sm sm:text-base">
      ${txtTexto}
      </p>

      <p class="mt-8 font-bold invisible">Read more</p>
    </div>
  </div>
</div>
</div>
          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("cards-04", cards04);
  
  
  
// == Componente de cards 05 == //

class cards05 extends HTMLElement {
  constructor() {
    super();

    // variaveis do produto
    const srcimagem = this.getAttribute('srcimagem') || 'https://i.ibb.co/StwXZqq/Image.png';
    const nomeProduto = this.getAttribute('nomeProduto') || 'Produto';
    const precoProduto = this.getAttribute('precoProduto') || '0,00';
    const medidaProduto = this.getAttribute('medidaProduto') || 'kg';
    const pesoProduto = this.getAttribute('pesoProduto') || 0;
    const idProduto = this.getAttribute('idProduto') || 1;
    const numeroEstrelas = this.getAttribute('numeroEstrelas') || 5;
    const descricaoProduto = this.getAttribute('descricaoProduto') || 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.';
    const CategoriaProduto = this.getAttribute('CategoriaProduto') || 'Categoria';

    // dados do produto em obj
    const objProduto = { id:idProduto , imagem:srcimagem , nome:nomeProduto , preco:precoProduto, medida:medidaProduto, peso:pesoProduto , classificacao:numeroEstrelas , descricao:descricaoProduto , categoria:CategoriaProduto};

    // variavel preenchimento do icone de favorito
    let preenchimentoFavorito="";

    // Preencher o icone de favoritos de estiver na lista de favoritos
    if (funcoes_produtos.isProdutoFavorito(idProduto)) { preenchimentoFavorito = "fill-teal-600"} 

  this.innerHTML = `
  
        

<!-- Codigo -->
    

<div class="group relative block overflow-hidden rounded-lg w-[100%] max-md:w-full mx-auto cursor-pointer scale-[0.9] max-md:scale-100 hover:scale-[0.92] max-md:hover:scale-[1.02] hover:-translate-y-2 hover:drop-shadow-xl">

<button
  class="absolute end-4 top-4 max-md:top-2 max-md:right-2 z-10 rounded-full bg-white/90 p-1.5 max-md:p-0.5 text-gray-900 transition hover:text-gray-900/75"
>
  <span class="sr-only">Wishlist</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-8 w-8 max-lg:h-7 max-lg:w-7 max-md:h-5 max-md:w-5 hover:scale-105 clsfavoritos stroke-teal-600 ${preenchimentoFavorito}"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
</button>

<div class="relative blockimagem">
<img
  src="${srcimagem}"
  alt=""
  class="h-64 max-2xl:h-48 max-xl:h-48 max-lg:h-44 max-md:h-36 max-sm:h-28 w-full object-cover transition duration-500 group-hover:scale-105 imagemProduto"
/><skeleton-image class="h-full w-full absolute top-0 skeleton"></skeleton-image>
</div>


<div class="relative border border-gray-100 bg-white p-6 max-md:p-2">
  
  <!-- estrelas -->

  <div class="flex gap-0.5 grupoEstrelas ">
                <svg
                  class="h-5 w-5 max-md:h-3 max-md:w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 max-md:h-3 max-md:w-3" 
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 max-md:h-3 max-md:w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 max-md:h-3 max-md:w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 max-md:h-3 max-md:w-3"
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

  <h3 class="mt-1.5 text-xl max-lg:text-xl max-md:text-sm font-medium text-gray-900">${nomeProduto}</h3>

  <p class="mt-0.5 text-sm max-lg:text-base max-md:text-xs text-gray-600">${pesoProduto} ${medidaProduto}</p>

  <p class="mt-3 text-x max-lg:text-xl max-md:text-base text-gray-700 font-semibold">R$ ${precoProduto}</p>

  <p class="hidden mt-3 text-x max-lg:text-xl max-md:text-base text-gray-700 font-semibold">${idProduto}</p>

  <div class="mt-6 max-md:mt-4">

    <button
      class="flex justify-center gap-4 max-md:gap-2 w-full rounded text-white bg-teal-600 p-4 max-md:p-2 text-base max-md:text-xs font-medium transition hover:scale-[1.02] btnadicionarCarrinho"
    >
    <svg class="max-md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11" fill="none">
<path d="M0.482422 0.929688H1.31645C1.83412 0.929688 2.24155 1.37546 2.19841 1.88834L1.80057 6.66243C1.78504 6.84739 1.80809 7.03355 1.86827 7.20913C1.92845 7.38471 2.02444 7.54587 2.15016 7.68241C2.27589 7.81895 2.4286 7.92788 2.59863 8.00231C2.76865 8.07675 2.95229 8.11505 3.13789 8.11479H8.24272C8.93295 8.11479 9.5369 7.54919 9.58963 6.86375L9.84847 3.2688C9.90599 2.47312 9.30203 1.82603 8.50156 1.82603H2.31345M3.83771 3.80565H9.58963M7.31283 10.5162C7.47173 10.5162 7.62413 10.4531 7.7365 10.3407C7.84886 10.2284 7.91199 10.076 7.91199 9.91706C7.91199 9.75816 7.84886 9.60576 7.7365 9.49339C7.62413 9.38103 7.47173 9.3179 7.31283 9.3179C7.15392 9.3179 7.00152 9.38103 6.88916 9.49339C6.77679 9.60576 6.71367 9.75816 6.71367 9.91706C6.71367 10.076 6.77679 10.2284 6.88916 10.3407C7.00152 10.4531 7.15392 10.5162 7.31283 10.5162ZM3.47821 10.5162C3.63712 10.5162 3.78952 10.4531 3.90188 10.3407C4.01425 10.2284 4.07737 10.076 4.07737 9.91706C4.07737 9.75816 4.01425 9.60576 3.90188 9.49339C3.78952 9.38103 3.63712 9.3179 3.47821 9.3179C3.31931 9.3179 3.16691 9.38103 3.05454 9.49339C2.94218 9.60576 2.87906 9.75816 2.87906 9.91706C2.87906 10.076 2.94218 10.2284 3.05454 10.3407C3.16691 10.4531 3.31931 10.5162 3.47821 10.5162Z" stroke="white" stroke-width="0.71899" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      Adicionar
    </button>
  </div>
</div>
</div>
        
        
<!-- Codigo -->
      

    `;

    // Chama a função preencherEstrelas com o número de estrelas
  funcoes_produtos.preencherEstrelas(numeroEstrelas,this);

    // Chama funcao para adicionar/remover o produto a lista de favoritos
     const colFavoritos = this.querySelector('.clsfavoritos')
     
     colFavoritos.addEventListener('click', ()=> { 

      funcoes_produtos.gerenciarProdutoFavorito(idProduto);
      
      if (funcoes_produtos.isProdutoFavorito(idProduto)) { colFavoritos.classList.add("fill-teal-600")} 
      else{ colFavoritos.classList.remove("fill-teal-600")}

    }) 

    // Adicionar ao localstorage as informacoes do Produto selecionado
    this.querySelector('.imagemProduto').addEventListener('click',()=>{

      localStorage.setItem('localobjProduto', JSON.stringify(objProduto));

      window.location.href = "../html/detalhesProduto.html";

    });

    // Adicionar produto ao carrinho
    this.querySelector('.btnadicionarCarrinho').addEventListener('click', ()=>{ 
       funcoes_carrinho.adicionarCarrinho(objProduto,'adicionar') ;
      funcoes_carrinho.dropdownCarrinhoNavbar()
    });

    //controlar esqueleton imagem
    const blockimagem = this.querySelector('.blockimagem')
    const imagem = blockimagem.querySelector('img')
    const esqueleto = blockimagem.querySelector('.skeleton')

    imagem.addEventListener('load',()=>{ esqueleto.classList.remove('flex');esqueleto.classList.add('hidden') })

  }

  



  

}

customElements.define("cards-05", cards05);



// == Componente de cards 06 == //

class cards06 extends HTMLElement {
  constructor() {
    super();

    // recupera do localstorage os dados do produto
    const localobjProduto = JSON.parse(localStorage.getItem("localobjProduto"));

    const srcimagem = this.getAttribute('srcimagem') || localobjProduto['imagem'];
    const nomeProduto = this.getAttribute('nomeProduto') || localobjProduto['nome'];
    const precoProduto = this.getAttribute('precoProduto') || parseFloat( localobjProduto['preco'] );
    const medidaProduto = this.getAttribute('medidaProduto') || localobjProduto['medida'];
    const pesoProduto = this.getAttribute('pesoProduto') || parseInt( localobjProduto['peso'] );
    const idProduto = this.getAttribute('idProduto') ||  localobjProduto['id'] ;
    const numeroEstrelas = this.getAttribute('numeroEstrelas') || parseInt( localobjProduto['classificacao'] );
    const descricaoProduto = this.getAttribute('descricaoProduto') || localobjProduto['descricao'];
    const categoriaProduto = this.getAttribute('categoriaProduto') || localobjProduto['categoria'];

    let preenchimentoFavorito="";

    // Preencher o icone de favoritos de estiver na lista de favoritos
  if (funcoes_produtos.isProdutoFavorito(idProduto)) { preenchimentoFavorito = "fill-teal-600"}

  this.innerHTML = `
  
        

<!-- Codigo -->
    

<div class="flex max-md:flex-col md:gap-24">


<div class="relative">

<button
class="absolute end-4 top-4 max-md:top-2 max-md:right-2 z-10 rounded-full bg-white/90 p-1.5 max-md:p-0.5 text-gray-900 transition hover:text-gray-900/75"
>
<span class="sr-only">Wishlist</span>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="h-8 w-8 max-lg:h-7 max-lg:w-7 max-md:h-5 max-md:w-5 hover:scale-105 clsfavoritos stroke-teal-600 ${preenchimentoFavorito}"
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
class="w-full object-cover rounded-2xl max-w-xs max-h-[200px] md:max-w-sm md:max-h-[400px] md:min-h-[400px]"
/>

</div>

<div class="mt-3 flex justify-between text-sm">

<div>
  
<div class="flex items-center justify-between">
  <h3
    class="text-gray-900 text-xl max-md:text-lg mb-2"
  >
  ${nomeProduto}
  </h3>

  
  <div class="flex gap-0.5 grupoEstrelas ">

          <svg
            class="h-5 w-5 max-md:h-3 max-md:w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>

          <svg
            class="h-5 w-5 max-md:h-3 max-md:w-3" 
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>

          <svg
            class="h-5 w-5 max-md:h-3 max-md:w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>

          <svg
            class="h-5 w-5 max-md:h-3 max-md:w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>

          <svg
            class="h-5 w-5 max-md:h-3 max-md:w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        </div>


  <p class="text-gray-900 text-xl max-md:text-lg font-semibold">R$ ${precoProduto}</p>

  <p id="txtdescricao" tooltip="clique" class="mt-1.5 max-w-[45ch] text-base max-md:text-xs text-gray-500 mb-4 line-clamp-3 relative cursor-pointer">
    ${descricaoProduto}
  </p>

  <dl class="flex items-center space-x-6 mb-2">
    <div>
        <dt class="mb-2 font-semibold leading-none text-gray-900 ">Categoria</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 ">${categoriaProduto}</dd>
    </div>
    <div>
        <dt class="mb-2 font-semibold leading-none text-gray-900 ">Peso</dt>
        <dd class="mb-4 font-light text-gray-500 sm:mb-5 ">${pesoProduto} ${medidaProduto}</dd>
    </div>
  </dl>

<div class="flex  items-center border border-gray-200 rounded-lg w-full">

    <label for="Quantity" class="ml-4 mr-10 md:mr-16 font-semibold"> Quantidade </label>

    <div class="flex ">
    
    <button
      id="btndiminuir"
      type="button"
      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &minus;
    </button>

    <input
      type="number"
      id="inputqnt" 
      value="1"
      class="h-10 w-full border-transparent text-center "
      disabled
    />

    <button
    id="btnaumentar"
      type="button"
      class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &plus;
    </button>

    </div>

</div>

<div class="mt-10 gap-4 flex max-md:flex-col">

  <button
    id="btnadicionarCarrinho"
    class="flex items-center justify-center gap-4 max-md:gap-2 w-full md:w-1/2 rounded text-white bg-teal-600  p-2 md:p-3 text-base max-md:text-sm font-medium transition hover:scale-[1.02] hover:bg-teal-700"
  >
  <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11" fill="none">
<path d="M0.482422 0.929688H1.31645C1.83412 0.929688 2.24155 1.37546 2.19841 1.88834L1.80057 6.66243C1.78504 6.84739 1.80809 7.03355 1.86827 7.20913C1.92845 7.38471 2.02444 7.54587 2.15016 7.68241C2.27589 7.81895 2.4286 7.92788 2.59863 8.00231C2.76865 8.07675 2.95229 8.11505 3.13789 8.11479H8.24272C8.93295 8.11479 9.5369 7.54919 9.58963 6.86375L9.84847 3.2688C9.90599 2.47312 9.30203 1.82603 8.50156 1.82603H2.31345M3.83771 3.80565H9.58963M7.31283 10.5162C7.47173 10.5162 7.62413 10.4531 7.7365 10.3407C7.84886 10.2284 7.91199 10.076 7.91199 9.91706C7.91199 9.75816 7.84886 9.60576 7.7365 9.49339C7.62413 9.38103 7.47173 9.3179 7.31283 9.3179C7.15392 9.3179 7.00152 9.38103 6.88916 9.49339C6.77679 9.60576 6.71367 9.75816 6.71367 9.91706C6.71367 10.076 6.77679 10.2284 6.88916 10.3407C7.00152 10.4531 7.15392 10.5162 7.31283 10.5162ZM3.47821 10.5162C3.63712 10.5162 3.78952 10.4531 3.90188 10.3407C4.01425 10.2284 4.07737 10.076 4.07737 9.91706C4.07737 9.75816 4.01425 9.60576 3.90188 9.49339C3.78952 9.38103 3.63712 9.3179 3.47821 9.3179C3.31931 9.3179 3.16691 9.38103 3.05454 9.49339C2.94218 9.60576 2.87906 9.75816 2.87906 9.91706C2.87906 10.076 2.94218 10.2284 3.05454 10.3407C3.16691 10.4531 3.31931 10.5162 3.47821 10.5162Z" stroke="white" stroke-width="0.71899" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    Adicionar
  </button>

  <button
    class="flex items-center justify-center gap-4 max-md:gap-2 w-full md:w-1/2 rounded text-teal-600 shadow border bg-white p-2 md:p-3 text-base max-md:text-sm font-medium transition hover:scale-[1.02]  hover:text-teal-500"
  >
  
    Comprar agora
  </button>



</div>

  

</div>


</div>


</div>
        
<!-- Codigo -->
      

    `;

  // Chama a função preencherEstrelas com o número de estrelas
  funcoes_produtos.preencherEstrelas(numeroEstrelas,this);

    // Chama funcao para adicionar/remover o produto a lista de favoritos
    const colFavoritos = this.querySelector('.clsfavoritos')
     
    colFavoritos.addEventListener('click',  ()=> { 

     funcoes_produtos.gerenciarProdutoFavorito(idProduto);
     
     if (funcoes_produtos.isProdutoFavorito(idProduto)) {  colFavoritos.classList.remove("fill-teal-600")} 
     else{ colFavoritos.classList.add("fill-teal-600")}

   }) 


    // Alterar quantidade do input de quantidade do produto

    const btnaumentar = document.getElementById('btnaumentar')
    const btndiminuir = document.getElementById('btndiminuir')
    const inputqnt = document.getElementById('inputqnt')

    btnaumentar.addEventListener('click',()=>{ funcoes_produtos.alterarQuantidade('aumentar',inputqnt) })
    btndiminuir.addEventListener('click',()=>{ funcoes_produtos.alterarQuantidade('diminuir',inputqnt) })

    
    // texto de  descricao do produto
    const txtdescricao = document.getElementById('txtdescricao')

    // funcao para mostrar descricao do produto
    funcoes_produtos.mostrarDescricao(txtdescricao)

    // Adicionar produto ao carrinho
    this.querySelector('#btnadicionarCarrinho').addEventListener('click', ()=>{ 
      funcoes_carrinho.adicionarCarrinho(localobjProduto,'adicionar') ;
     funcoes_carrinho.dropdownCarrinhoNavbar()
   });



  }


  
  

  

  

}

customElements.define("cards-06", cards06);
    
      
  
// == Componente de cards 07 == //

class cards07 extends HTMLElement {
  constructor() {
    super();

    const nEstrelas = this.getAttribute('nEstrelas')||'5';
    const txtTexto = this.getAttribute('txtTexto')||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandaedolores, possimus pariatur animi temporibus nesciunt praesentium dolore.';
    const txtData = this.getAttribute('txtData')||'2022-08-01';

    const txtData2 =  funcoes_data.formatDate(txtData);;


    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<!-- comentarios -->
    <article class="p-6 text-base bg-white/80 rounded-lg outline outline-1 outline-gray-300 shadow hover:scale-[1.02]">

        <footer class="flex justify-between items-center mb-2">
          
            <div class="flex items-center justify-between w-full">
                
                <!-- estrelas -->
                <div class="grupoEstrelas flex items-center">

                    <svg class="w-4 h-4  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>

                    
                </div>

                <!-- data -->
                <p class="text-sm text-gray-600">
                <time pubdate datetime="${txtData}">${txtData2}
                </time>
                </p>

            </div>

        </footer>

        <!-- comentario -->
        <p class="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odio? Itaque maiores reprehenderit ea? Assumenda, perspiciatis cumque facere optio error, illo a, non nulla ullam ipsa et omnis magni veritatis.</p>

    </article>

          
<!-- Codigo -->
        

      `;


    // Chama a função preencherEstrelas com o número de estrelas
    funcoes_produtos.preencherEstrelas(nEstrelas,this);

  }
}

customElements.define("cards-07", cards07);
  
  
  
  