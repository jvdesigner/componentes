


// =================================== COMPONENTES =============================================== //


// == Componente de navbar 01 == //

class navbar01 extends HTMLElement {
  constructor() {
    super();

    const telainicio = this.getAttribute('telainicio')||'gray';
    const telasobre = this.getAttribute('telasobre')||'gray';
    const telaprodutos = this.getAttribute('telaprodutos')||'gray';
    const telasuporte = this.getAttribute('telasuporte')||'gray';
    const telafavoritos = this.getAttribute('telafavoritos')||'gray';


    this.innerHTML = `
    
          
  
<!-- Codigo -->

<menu-01></menu-01>

<header class="bg-white/95 fixed top-0 z-40 w-full">

  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

    <div class="flex h-16 items-center justify-between">

      <div class="md:flex md:items-center md:gap-12">

        <a class="block text-teal-600" href="index.html">

        <img class="" src="https://i.ibb.co/qxDhcrC/image-6.png" alt="">
        <img class="w-32 hidden" src="https://i.ibb.co/QbGgZMs/image.png" alt="">

          
        
        </a>

      </div>

      <div class="hidden md:block">

        <nav aria-label="Global">

          <ul class="flex items-center gap-6 text-sm">

            <li class="hover:-translate-y-0.5">
              <a
                class="text-${telainicio}-500 transition hover:text-teal-600"
                href="../index.html"
              >
                Início
              </a>
            </li>

            <li class="hover:-translate-y-0.5">
              <a
                class="text-${telasobre}-500 transition hover:text-teal-600"
                href="/html/sobre.html"
              >
                Sobre
              </a>
            </li>

            <li class="hover:-translate-y-0.5">
              <a
                class="text-${telaprodutos}-500 transition hover:text-teal-600"
                href="/html/produtos.html"
              >
                Produtos
              </a>
            </li>

            <li class="hover:-translate-y-0.5">
              <a
                class="text-${telasuporte}-500 transition hover:text-teal-600"
                href="/html/suporte.html"
              >
                Suporte
              </a>
            </li>

            
          </ul>
        </nav>

      </div>

      <div class="flex items-center gap-4 max-md:scale-95">
        <div class="flex gap-4 hidden">

          <div
          id="btnEntrar"
            class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:scale-105 cursor-pointer"
            
          >
            Entrar
          </div>

          <div class="flex">
            <div
            id="btnCadastrar"
              class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:scale-105 cursor-pointer"
              
            >
              Cadastrar
            </div>

          </div>
        </div>

        <div class="hidden">
          <button
            id="iconNavbar"
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-8">

          <cart-01></cart-01>
          <avatar-01 class="hidden"></avatar-01>
          <avatar-02 cor=${telafavoritos}></avatar-02>
          
        </div>

      </div>
    </div>
  </div>
</header>
  
  

          
          
<!-- Codigo -->
        

      `;

    
  } 

}

customElements.define("navbar-01", navbar01);



// == Componente de navbar 02 == //

class navbar02 extends HTMLElement {
  constructor() {
    super();

    const telainicio = this.getAttribute('telainicio')||'gray';
    const telasobre = this.getAttribute('telasobre')||'gray';
    const telaprodutos = this.getAttribute('telaprodutos')||'gray';
    const telasuporte = this.getAttribute('telasuporte')||'gray';


    this.innerHTML = `
    
          
  
<!-- Codigo -->

<div class="z-40 fixed hidden max-md:block w-full bottom-0 bg-white/95 outline outline-1 outline-gray-300 rounded-md shadow-md">

    <ul class="flex justify-around -mb-px text-sm font-medium text-center text-gray-500 ">
       
        <li class="mr-2">

            <a href="../index.html" class="flex flex-col gap-2 items-center justify-center p-4 text-${telainicio}-600  rounded-t-lg active hover:text-teal-600/60 group" aria-current="page">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>Início
            </a>

        </li>

        <li class="mr-2">

            <a href="/html/sobre.html" class="flex flex-col gap-2 items-center justify-center p-4 text-${telasobre}-600 rounded-t-lg hover:text-teal-600/60  group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>Sobre
            </a>

        </li>


        <li class="mr-2">

            <a href="/html/produtos.html" class="flex flex-col gap-2 items-center justify-center p-4 text-${telaprodutos}-600 rounded-t-lg hover:text-teal-600/60 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-none"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>Produtos

            </a>

        </li>

        <li class="mr-2">

            <a href="/html/suporte.html" class="flex flex-col gap-2 items-center justify-center text-${telasuporte}-600 p-4  rounded-t-lg hover:text-teal-600/60 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-none"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>Suporte
            </a>
            
        </li>
       
    </ul>
</div>
          
          
<!-- Codigo -->
        

      `;
    
  }
}

customElements.define("navbar-02", navbar02);










