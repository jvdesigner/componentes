


// == Componente de form login == //

class formlogin extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->

  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
        

  <section id="objFormLogin" class="bg-white h-screen w-screen fixed top-0 z-50 hidden animate__animated  animate__fadeInUp">

  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative">

    <div class="absolute top-4  left-4 mx-auto max-sm:hidden flex items-center gap-2 cursor-pointer text-gray-600 hover:scale-105 hover:text-teal-600">
      
    <div id="fecharFormLogin" class="flex gap-2">  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 "><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    </svg>voltar
    </div>

    </div>
    
    <svg id="fecharFormLogin2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" 
    class="w-14 h-14 text-gray-700 fill-white hover:fill-red-300 hover:scale-105 cursor-pointer absolute -bottom-20 max-sm:flex hidden"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>


      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">

          <img class="mx-auto" src="https://i.ibb.co/qxDhcrC/image-6.png" alt="logo">
              
      </a>
      <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl ">
                  Entre na sua conta
              </h1>

              <form class="space-y-4 md:space-y-6" action="post">

                  <div class="mb-6">

                      <label for="txtEmailLogin" class="block mb-2 text-sm font-medium text-gray-500 0 ">Email</label>

                      <input type="email" id="txtEmailLogin" class=" bg-gray-50 border border-gray-500 text-teal-500  placeholder-gray-700 text-sm rounded-lg focus:scale-105 focus:outline-teal-600 block w-full p-2.5" placeholder="usuario@email.com"> 

                      <p class="hidden mt-2 text-sm text-gray-600 ">Email válido</p>

                  </div>

                  <div class="mb-6">

                      <label for="txtSenhaLogin" class="block mb-2 text-sm font-medium text-gray-500 ">Senha</label>

                      <input type="email" id="txtSenhaLogin" class="bg-gray-50 border border-gray-500 text-teal-500  placeholder-gray-600 text-sm rounded-lg focus:scale-105 focus:outline-teal-600 block w-full p-2.5" placeholder="••••••••">  

                      <p class="hidden text-sm text-gray-600 mt-2"> Sua senha deve conter no mínimo 6 caracteres incluindo números, letras maíusculas e minúsculas</p>
 
                      
                  </div>

                  <div class="flex items-center justify-between">

                      <div class="flex items-start">

                          <div class="flex items-center h-5">

                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " requigray="">

                          </div>

                          <div class="ml-3 text-sm">

                            <label for="remember" class="text-gray-500 ">Lembrar de mim</label>

                          </div>

                      </div>

                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline hover:text-teal-600">Esqueceu a senha?</a>

                  </div>

                  <button type="submit" class="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-105 ">Entrar</button>

                  <p class="text-sm font-light text-gray-500 ">

                      Não tem conta ainda? <a href="#" class="font-medium text-primary-600 hover:underline hover:text-teal-600 ">Cadastrar</a>

                  </p>

              </form>

          </div>
      </div>

  </div>

</section>
  
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("form-login", formlogin);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  