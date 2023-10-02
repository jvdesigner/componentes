

// =================================== COMPONENTES =============================================== //


// == Componente de menu 01 == //

class menu01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->

  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
        

<div id="menu" class=" hidden items-center justify-center  h-screen fixed z-50 top-0 bg-white w-screen animate__animated  animate__fadeInDown">    
      
    <svg id="fecharmenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  absolute top-4 right-4 hover:stroke-teal-500 cursor-pointer">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  
    <ul class="flex flex-col items-center justify-evenly h-full gap-6 text-lg">

        <li class="hover:-translate-y-2  ">

            <a
            class="text-teal-500 transition hover:text-teal-500/75"
            href="/"
            >
            Início
            </a>

        </li>

        <li class="hover:-translate-y-2">

            <a
            class="text-gray-500 transition hover:text-teal-500/75"
            href="/"
            >
            Sobre
            </a>

        </li>

        <li class="hover:-translate-y-2">

            <a
            class="text-gray-500 transition hover:text-teal-500/75"
            href="/"
            >
            Produtos
            </a>

        </li>

        <li class="hover:-translate-y-2">

            <a
            class="text-gray-500 transition hover:text-teal-500/75"
            href="/"
            >
            Suporte
            </a>

        </li>

        <li class="hover:-translate-y-2" >

            <a
            class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:scale-105 "
            href="/"
            >
            Entrar
            </a>

        </li>

        <li class="hover:-translate-y-2" >

            <a
            class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:scale-105"
            href="/"
            >
            Cadastrar
            </a>

        </li>


    </ul>  

</div>
  
            
            
  <!-- Codigo -->
          
  
        `;


        const menu = document.getElementById('menu');
        const fecharmenu = document.getElementById('fecharmenu');
  
          
        iconNavbar.addEventListener('click', ()=> {menu.style.display="flex";document.documentElement.style.overflowY = 'hidden';});
        fecharmenu.addEventListener('click', ()=> {menu.style.display="none";document.documentElement.style.overflowY = 'auto';});

    }
  }
  
customElements.define("menu-01", menu01);
  
  

  
  
  
  
  
  
  
  
  
  