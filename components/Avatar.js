
 // ================================== IMPORTAR FUNCOES ================================================ //

 import * as funcoes_perfil from '../functions/perfil.js'


// ================================== COMPONENTES ================================================ //


// == Componente de avatar 01 == //

class avatar01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

<div id="btnimgProfile" class="block shrink-0 cursor-pointer relative ">

        <span class="sr-only">Profile</span>

        <img
            alt="user"
            src="https://i.ibb.co/TvvbPRZ/Image.png"
            class="h-10 w-10 rounded-full object-cover"
        />

        <div id="navProfile" class="p-2 hidden w-52 drop-shadow-xl rounded-xl bg-white absolute right-0 translate-y-4 z-50">

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Perfil
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Meus favoritos
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Meus pedidos
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Trocar senha
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Meu endereço
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-700"
            role="menuitem"
            >
            Sair
            </a>

        </div>

</div>
            
            
  <!-- Codigo -->
          
  
        `;


      // Dropdown menu perfil do navbar
            
      btnimgProfile.addEventListener('click',  funcoes_perfil.controlarDropdownPerfil  );

    }
  }
  
  customElements.define("avatar-01", avatar01);

// == Componente de avatar 02 == //

class avatar02 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<a href="#" class="relative  w-7 flex items-center group/favorito mx-auto">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="h-8 w-8 max-lg:h-7 max-lg:w-7 max-md:h-6 max-md:w-6 hover:scale-[1.02] hover:stroke-teal-600 stroke-gray-600 fill-none "
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>

  <div class="absolute p-4 opacity-[0.9] bg-white text-teal-600 rounded-2xl whitespace-nowrap hidden text-xs -bottom-14 -right-10 lg:group-hover/favorito:flex shadow">
    Meus Favoritos
  </div>

</a>
          
          
<!-- Codigo -->
        

      `;


  }
}

customElements.define("avatar-02", avatar02);
  
  


  


  
  
  
  
  
  
  
  
  
  