// =================================== IMPORTAR FUNCOES =============================================== //


import * as funcoes_login from '../functions/login.js'

import * as funcoes_formulario from '../functions/formulario.js'



// =================================== COMPONENTES =============================================== //



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
        

  <section id="objFormLogin" class="bg-white h-screen w-screen hidden fixed top-0 z-50  bgpadrao opacity:1">

  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative animate__animated  animate__fadeInUp">

    <div class="absolute top-4  left-4 mx-auto max-sm:hidden flex items-center gap-2 cursor-pointer text-gray-600 hover:scale-105 hover:text-teal-600">
      
    <div id="fecharFormLogin" class="flex gap-2">  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 "><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>Fechar
    </div>

    </div>
    
    <svg id="fecharFormLogin2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" 
    class="w-14 h-14 text-gray-700 fill-white hover:fill-red-300 hover:scale-105 cursor-pointer absolute -bottom-20 max-sm:flex hidden"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>


      <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">

          <img class="mx-auto" src="https://i.ibb.co/qxDhcrC/image-6.png" alt="logo">
              
      </div>

      <div class="w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">

          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

              <h1 class="clsobjformlogin text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl ">
                  Entre na sua conta
              </h1>
              <h1 class="clsobjformcadastro text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl ">
                  Cadastre uma conta
              </h1>
              <h1 class="clsesquecisenha text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl">
                  Esqueci minha senha
              </h1>

              <form id="formlogin" class="space-y-4 md:space-y-6" autocomplete="off">

                  <div class="mb-6 blockinput">

                      <label for="txtEmailLogin" class="block mb-2 text-sm font-medium text-gray-500 0 ">Email</label>

                      <input autocomplete="off" type="email" id="txtEmailLogin" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="usuario@email.com"> 

                      <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Email válido</p>

                  </div>

                  <div class="mb-6 blockinput clsobjformlogin clsobjformcadastro">

                      <label for="txtSenhaLogin" class="block mb-2 text-sm font-medium text-gray-500 ">Senha</label>

                      <div class="relative flex items-center ">
                      <input autocomplete="off" maxlength="12" type="password" id="txtSenhaLogin" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="••••••••">
                      <svg id="iconmostrarSenha" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-none w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <svg id="iconocultarSenha" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-none hidden w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>

                      </div>  

                      <p id="alertainputsenha" class="hidden text-sm text-gray-600 mt-2 clsalertinput"> </p>
 
                      
                  </div>
                  <div class="mb-6 blockinput clsobjformcadastro">

                      <label for="txtSenhaLogin2" class="block mb-2 text-sm font-medium text-gray-500 ">Confirmar</label>

                      <div class="relative flex items-center ">
                      <input autocomplete="off" maxlength="12" type="password" id="txtSenhaLogin2" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="••••••••">
                      <svg id="iconmostrarSenha2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-none w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <svg id="iconocultarSenha2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-none hidden w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>

                      </div>  

                      <p id="alertainputsenha2" class="hidden text-sm text-gray-600 mt-2 clsalertinput"> </p>
 
                      
                  </div>

                  <div class="flex items-center justify-between clsobjformlogin">

                      <div class="flex items-start">

                          <div class="flex items-center h-5">

                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " requigray="">

                          </div>

                          <div class="ml-3 text-sm">

                            <label for="remember" class="text-gray-500 ">Lembrar de mim</label>

                          </div>

                      </div>

                      <span id="txtesquecisenha" class="cursor-pointer text-sm font-medium text-gray-500 hover:underline hover:text-teal-600">Esqueceu a senha?</span>

                  </div>

                  <button id="btnentrar" type="button" class="clsobjformlogin w-full text-white bg-teal-600 hover:bg-teal-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:scale-[1.02] hover:scale-[1.02] ">Entrar</button>
                  <button id="btnformcadastro" type="button" class="clsobjformcadastro w-full text-white bg-teal-600 hover:bg-teal-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:scale-[1.02] hover:scale-[1.02] ">Cadastrar</button>
                  <button id="btnformesquecisenha" type="button" class="clsesquecisenha w-full text-white bg-teal-600 hover:bg-teal-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:scale-[1.02] hover:scale-[1.02] ">Enviar</button>

                  <p class="text-sm font-light text-gray-500 clsobjformlogin">

                      Não tem conta ainda? <span id="alterarCadastrar" class="cursor-pointer font-medium text-primary-600 hover:underline hover:text-teal-600 ">Cadastrar</span>

                  </p>
                  <p class="text-sm font-light text-gray-500 clsobjformcadastro clsesquecisenha">

                      Já tem uma conta? <span id="alterarEntrar" class="cursor-pointer font-medium text-primary-600 hover:underline hover:text-teal-600 ">Entrar</span>

                  </p>

              </form>

          </div>
      </div>

  </div>

</section>
  
            
            
  <!-- Codigo -->
          
  
        `;

        // funcao mostrar senha no input
        funcoes_login.toggleVisibility('txtSenhaLogin', 'iconmostrarSenha', 'iconocultarSenha');
        funcoes_login.toggleVisibility('txtSenhaLogin2', 'iconmostrarSenha2', 'iconocultarSenha2');

        // funcao para validar email
        funcoes_login.validarEmail('txtEmailLogin','alertainputemail');

        // funcao para validar senha
        funcoes_login.validarSenha('txtSenhaLogin','alertainputsenha');
        funcoes_login.validarSenha('txtSenhaLogin2','alertainputsenha2');

        // funcao para validar senha confirmada
        funcoes_login.validarSenhaconfirmada('txtSenhaLogin','txtSenhaLogin2','alertainputsenha2');


        // botoes do formulario
        const btnentrar = document.getElementById('btnentrar');
        const btnformcadastro = document.getElementById('btnformcadastro');
        const btnformesquecisenha = document.getElementById('btnformesquecisenha');

        // formulario de login
        const formlogin = document.getElementById('formlogin');
        
        // botao para fechar o formulario
        const fecharFormLogin = document.getElementById('fecharFormLogin')
        const fecharFormLogin2 = document.getElementById('fecharFormLogin2')

        // section do formulario
        const objFormLogin = document.getElementById('objFormLogin')

        // botoes de entrar e cadastro
        const alterarEntrar = document.getElementById('alterarEntrar');
        const alterarCadastrar = document.getElementById('alterarCadastrar');

        // link para esqueci minha senha
        const txtesquecisenha = document.getElementById('txtesquecisenha');

        // adicionar funcao de campos obrigatorios nos botoes
        btnentrar.addEventListener('click',()=>{ funcoes_formulario.validarFormulario(formlogin) });
        btnformcadastro.addEventListener('click',()=>{ funcoes_formulario.validarFormulario(formlogin) });
        btnformesquecisenha.addEventListener('click',()=>{ funcoes_formulario.validarFormulario(formlogin) });

        // adicionar ao evento de clique no botao de entrar
        alterarEntrar.addEventListener('click',()=>{ 
          
          // fechar formulario de cadastro
          funcoes_formulario.zerarValoresDoFormulario(formlogin);
          objFormLogin.style.display="none";
          document.documentElement.style.overflow = 'auto';

          setTimeout(async()=>

          // abrir formulario de login
            {funcoes_login.ocultarobjLoginCadastro("login");
            objFormLogin.style.display="block";
            document.documentElement.style.overflow = 'hidden';}
            
            
            , 200);
        
        });

        // adicionar ao evento de clique no botao de cadastrar
        alterarCadastrar.addEventListener('click',()=>{ 
          
          // fechar formulario de login
          funcoes_formulario.zerarValoresDoFormulario(formlogin);
          objFormLogin.style.display="none";
          document.documentElement.style.overflow = 'auto';

          setTimeout(async()=>

          // abrir formulario de login
            {funcoes_login.ocultarobjLoginCadastro("cadastro");
            objFormLogin.style.display="block";
            document.documentElement.style.overflow = 'hidden';}
            
            
            , 200);
        
        });

        // adicionar ao evento de clique no botao de esqueci minha senha
        txtesquecisenha.addEventListener('click',()=>{ 
          
          // fechar formulario de login
          funcoes_formulario.zerarValoresDoFormulario(formlogin);
          objFormLogin.style.display="none";
          document.documentElement.style.overflow = 'auto';

          setTimeout(async()=>

          // abrir formulario de esqueci
            {funcoes_login.ocultarobjLoginCadastro("esqueci");
            objFormLogin.style.display="block";
            document.documentElement.style.overflow = 'hidden';}
            
            
            , 200);
        
        });

        // fechar formulario de login
        fecharFormLogin.addEventListener('click', ()=> {
          funcoes_formulario.zerarValoresDoFormulario(formlogin);
          objFormLogin.style.display="none";
          document.documentElement.style.overflow = 'auto';
        } );
        
        // fechar formulario de login
        fecharFormLogin2.addEventListener('click', ()=> {
          funcoes_formulario.zerarValoresDoFormulario(formlogin);
          objFormLogin.style.display="none";
          document.documentElement.style.overflow = 'auto';
        } );



    }
  }
  
customElements.define("form-login", formlogin);
  
  
// == Componente de form search == //

class formsearch extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      

<div  class="relative bg-white shadow-md rounded-lg mt-10 w-[80%] max-md:w-full mx-auto">

  <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">

    <div class="w-full ">

      <div class="flex items-center">

        <label for="simple-search" class="sr-only">Pesquisar</label>

        <div class="relative w-full">

          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">

            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />

            </svg>

          </div>

          <div class="flex items-center justify-between gap-2 w-full">
          <input type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none focus:border-teal-600" placeholder="Pesquisar">
          <button id="btnBuscarProduto" class="relative inline-flex items-center justify-center outline outline-1  overflow-hidden px-0.5 text-xs font-medium text-teal-600 rounded-lg group bg-gradient-to-br from-green-400 to-teal-600 group-hover:from-green-400 group-hover:to-teal-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 "><span class="relative px-3 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">Pesquisar</span></button>
          </div>
        </div>

      </div>

    </div>

  </div>

</div>

          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("form-search", formsearch);
  
  

// == Componente de form suporte == //

class formsuporte extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<div class="flex flex-col w-full items-center justify-center px-6  mx-auto  relative h-screen -translate-x-16 max-md:-translate-x-0">

<div class="w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">


    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

        <h1 class=" text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl ">
            Entre em contato
        </h1>
      
        <form 
          id = "formsuporte"
          class="space-y-4 md:space-y-6" 
          autocomplete="off"
        >

            <div class="mb-6 blockinput">

                <label 
                  for="txtEmailContato" 
                  class="block mb-2 text-sm font-medium text-gray-500 "
                  >Email
                </label>

                <input 
                  autocomplete="off" 
                  type="email" 
                  maxlength="100" 
                  id="txtEmailContato" 
                  class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" 
                  placeholder="cliente@email.com"
                > 

                <p id="alertainputemailsuporte" class="hidden mt-2 text-sm text-gray-600">Email válido</p>

            </div>

            <div class="mb-6 blockinput">

                <label 
                  for="txtAssuntoContato" 
                  class="block mb-2 text-sm font-medium text-gray-500 "
                  >Assunto
                </label>

                <input 
                  autocomplete="off" 
                  type="text" 
                  maxlength="100" 
                  id="txtAssuntoContato" 
                  class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" 
                  placeholder="Assunto"
                > 

                <p class="hidden mt-2 text-sm text-gray-600">Campo Obrigatório</p>

            </div>

            <div class="mb-6 blockinput">

                <label 
                  for="txtMensagemContato" 
                  class="block mb-2 text-sm font-medium text-gray-500 "
                  >Mensagem
                </label>

                <textarea 
                  autocomplete="off"
                  maxlength="500" 
                  id="txtMensagemContato"
                  rows="4" 
                  class="required resize-none bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5 mb-4" 
                  placeholder="Escreva aqui"
                ></textarea>

                <p class="hidden mt-2 text-sm text-gray-600">Campo Obrigatório</p>

            </div>


      
            <button 
              id="btnenviarcontato" 
              type="button" 
              class=" w-full  text-white bg-teal-600 hover:bg-teal-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:scale-[1.02] hover:scale-[1.02] "
              >Enviar
            </button>

      
        </form>

        

    </div>

</div>

</div>

          
<!-- Codigo -->
        

      `;

      // funcao para validar email
      funcoes_login.validarEmail('txtEmailContato','alertainputemailsuporte');

      // formulario de suporte
      const formsuporte = document.getElementById('formsuporte')


      // botao para enviar formulario de suporte
      const btnenviarcontato = document.getElementById('btnenviarcontato')

      // validar campos obrigatorio no formulario de suporte

      btnenviarcontato.addEventListener('click',()=>{ funcoes_formulario.validarFormulario(formsuporte) });

  }
}

customElements.define("form-suporte", formsuporte);


// == Componente de form avaliacao == //

class formcomentario extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
      
<!-- formulario de comentario -->
<form id="formcomentario" class="mb-6">

    <div class="blockinput">

        <label for="txtcomentario" class="sr-only">Seu comentário</label>

        <textarea id="txtcomentario" rows="6"
            class="required resize-none p-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none mb-4 rounded-lg rounded-t-lg border border-gray-200"
            placeholder="Escreva o que achou do produto...">
       </textarea>

       <p id="alertainputclassificacao" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

    </div>
    
    <button 
        id="btnenviarcomentario"
        type="button"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 hover:bg-teal-800">
        Comentar
    </button>

</form>
          
<!-- Codigo -->
        

      `;

      // formulario
      const formcomentario = document.getElementById('formcomentario')

      // botao para enviar 
      const btnenviarcomentario = document.getElementById('btnenviarcomentario')

      // campo de comentario
      const txtcomentario = document.getElementById('txtcomentario')

      // zerar
      txtcomentario.value = null

      // validar campos obrigatorio no formulario de suporte

      btnenviarcomentario.addEventListener('click',()=>{ funcoes_formulario.validarFormulario(formcomentario) });

      

  }
}

customElements.define("form-comentario", formcomentario);
    
    
  
  
  
  
  
  