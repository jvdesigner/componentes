
// -- Import components -- //

//<tooltip-darkmode></tooltip-darkmode> --darkmode


// -- Logo -- //

const imglogo = "https://i.ibb.co/kSJXPj1/logo.png";
const txtlogo = "Sol Nascente";

// -- Cores -- //

const cor01 ="teal";

// ---------------------

// -- COMPONENTS -- //

// ---------------------


// -- Block Default header navigation  --//

class blockDefaultHeaderNavigation extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
          
      

<header class="">

    <nav class="bg-white/95 drop-shadow-md border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">

        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <a href="index.html" class="flex items-center">

                <img src="${imglogo}" class="mr-3 h-9 sm:h-9" alt="Flowbite Logo" />

                <span class="max-sm:hidden self-center text-xl font-semibold whitespace-nowrap dark:text-white hover:text-${cor01}-600">${txtlogo}</span>
            </a>

            <div class="flex items-center lg:order-2">
     
                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Entrar</a>

                <a href="#" class="text-white bg-${cor01}-700 hover:bg-${cor01}-800 focus:ring-4 focus:ring-${cor01}-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-${cor01}-600 dark:hover:bg-${cor01}-700 focus:outline-none dark:focus:ring-${cor01}-800">Cadastrar</a>

                

                <!-- user -->

                <button type="button" class="hidden mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">

                <span class="sr-only">Open user menu</span>

                <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="user photo">

              </button>

              <!-- Dropdown menu -->

              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">

                <div class="px-4 py-3">

                  <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>

                  <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>

                </div>

                <ul class="py-2" aria-labelledby="user-menu-button">

                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>

                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>

                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>

                  <li>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>

                </ul>

              </div>



                <!-- user -->
                

                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

                    <span class="sr-only">Open main menu</span>

                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                </button>

            </div>

            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">

                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-${cor01}-700 lg:bg-transparent lg:text-${cor01}-700 lg:p-0 dark:text-white" aria-current="page">Início</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${cor01}-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${cor01}-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Produtos</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-${cor01}-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Suporte</a>
                    </li>

              
                    
                </ul>

          

            </div>

        </div>

    </nav>

</header>





          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("blockdefaultheader-navigation", blockDefaultHeaderNavigation);









