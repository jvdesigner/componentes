
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
            Dados de Acesso
            </a>

            <a
            href="#"
            class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-teal-50 hover:text-gray-700"
            role="menuitem"
            >
            Meus Dados
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
  
  


  


  
  
  
  
  
  
  
  
  
  