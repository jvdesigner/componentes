// =================================== IMPORTAR FUNCOES =============================================== //


import * as funcoes_login from '../functions/login.js'

import * as funcoes_formulario from '../functions/formulario.js'

import * as funcoes_loading from '../functions/loading.js'



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
          <input autocomplete="off" type="text" id="simple-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none focus:border-teal-600" placeholder="Pesquisar">
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
          action="https://formsubmit.co/nogueirajva@gmail.com" method="POST"
        >

            <div class="mb-6 blockinput">

                <label 
                  for="txtEmailContato" 
                  class="block mb-2 text-sm font-medium text-gray-500 "
                  >Email
                </label>

                <input 
                  autocomplete="off" 
                  name="Email"
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
                  name="Assunto" 
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
                  name="Mensagem"  
                  autocomplete="off"
                  maxlength="500" 
                  id="txtMensagemContato"
                  rows="4" 
                  class="required resize-none bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5 mb-4" 
                  placeholder="Escreva aqui"
                ></textarea>

                <p class="hidden mt-2 text-sm text-gray-600">Campo Obrigatório</p>

            </div>

            <input type="hidden" name="_next" value="https://jvdesigner.github.io/ecommerce/html/suporte.html">


      
            <button 
              id="btnenviarcontato" 
              type="submit" 
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

      btnenviarcontato.addEventListener('click', ()=>{ 
        
        const resposta = funcoes_formulario.validarFormulario(formsuporte) 

        if(resposta){

           funcoes_loading.criarAlerta02('Email enviado!','Recebemos seu email e logo iremos retornar','green')


        }
      
      
      });

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

       <p id="alertainputclassificacao" class="hidden mb-4 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

    </div>
    
    <button 
        id="btnenviarcomentario"
        type="button"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800">
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

      

      

  }
}

customElements.define("form-comentario", formcomentario);


// == Componente de form informaçoes pessoais == //

class forminfopessoais extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<form id="FormInfo" class=" w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-2xl  p-6 space-y-4 md:space-y-6 sm:p-8 animate__fadeIn animate__animated animate__fast-1s">

     <h1 class=" text-xl max-lg:text-lg font-bold leading-tight tracking-tight text-teal-600">
                  Informações Pessoais
      </h1>

    <div class="grid gap-4 max-lg:gap-0 mb-4 sm:grid-cols-2">

        <div class="mb-6 blockinput">

              <label for="txtNomeCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Nome</label>

              <input autocomplete="off" type="text" id="txtNomeCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Nome"> 

              <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

        </div>

        <div class="mb-6 blockinput">

              <label for="txtSobrenomeCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Sobrenome</label>

              <input autocomplete="off" type="text" id="txtSobrenomeCliente" maxlength="200" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="sobrenome"> 

              <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

        </div>

        <div class="mb-6 blockinput">

              <label for="txtEmailCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Email</label>

              <input autocomplete="off" type="email" id="txtEmailCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="cliente@email.com"> 

              <p id="alertainputemailcliente" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Email válido</p>

        </div>

        <div class="mb-6 blockinput">

              <label for="txtdddCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Celular</label>

              <div class="flex gap-1">

              <div class=" blockinput relative">
              <input autocomplete="off" type="text" id="txtdddCliente" maxlength="2" class="required bg-gray-50 border border-gray-500 text-gray-500 max-w-[40px] items-center  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="21">
              <p id="alertdddCliente" class="hidden mt-2 text-sm text-gray-600 clsalertinput absolute">Formato inválido</p>
              </div>
              
              <div class=" blockinput">
              <input autocomplete="off" type="text" id="txtCelularCliente" maxlength="10" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="98876-0990"> 
              <p id="alertCelularCliente" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Formato inválido</p>
              </div>

              </div>

              

        </div>

      
    </div>


      <button type="button" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] hidden">
          Prosseguir
      </button>


</form>
      

          
<!-- Codigo -->
        

      `;
      

  }
}

customElements.define("form-infopessoais", forminfopessoais);

// == Componente de form endereço == //

class formendereco extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<form id="formendereco" class="hidden w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-2xl  p-6 space-y-4 md:space-y-6 sm:p-8 animate__fadeIn animate__animated animate__fast-1s">

<h1 class=" text-xl max-lg:text-lg font-bold leading-tight tracking-tight text-teal-600">
              Endereço
  </h1>

<div class="grid gap-4 max-md:gap-0 mb-4 sm:grid-cols-2">

    <div class="flex gap-2">

      <div class="mb-6 blockinput">

            <label for="txtCidadeCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Cidade</label>

            <input autocomplete="off" type="text" id="txtCidadeCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Cidade"> 

            <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

      <div class="mb-6 blockinput">

            <label for="txtEstadoCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Estado</label>

            <input autocomplete="off" type="text" id="txtEstadoCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Estado"> 

            <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

    </div>

    <div class="flex gap-2">

      <div class="mb-6 blockinput w-1/3">

            <label for="txtCEPCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">CEP</label>

            <input autocomplete="off" type="text" id="txtCEPCliente" maxlength="9" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="xxxxx-xxx"> 

            <p id="alertatxtCEPCliente" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

      <div class="mb-6 blockinput">

            <label for="txtBairroCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Bairro</label>

            <input autocomplete="off" type="text" id="txtBairroCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Bairro"> 

            <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

     </div>

    <div class="mb-6 blockinput">

          <label for="txtRuaCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Rua</label>

          <input autocomplete="off" type="text" id="txtRuaCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Rua"> 

          <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

    </div>
    
    <div class="flex gap-2">

      <div class="mb-6 blockinput w-1/3">

            <label for="txtNumeroCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Número</label>

            <input autocomplete="off" type="text" id="txtNumeroCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Número"> 

            <p id="alertaNumeroCliente" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

      <div class="mb-6 blockinput">

            <label for="txtComplementoCliente" class="block mb-2 text-sm font-medium text-gray-500 0 ">Complemento</label>

            <input autocomplete="off" type="text" id="txtComplementoCliente" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="Complemento"> 

            <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 clsalertinput">Campo Obrigatório</p>

      </div>

    </div>

  
</div>


  <button type="button" class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-[1.02] hidden">
      Prosseguir
  </button>


</form>
      

          
<!-- Codigo -->
        

      `;
      

  }
}

customElements.define("form-endereco", formendereco);


// == Componente de form resumo == //

class formresumo extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<form id="formresumo" class="hidden w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-2xl  p-6 space-y-4 md:space-y-6 sm:p-8 animate__fadeIn animate__animated animate__fast-1s">

<h1 class=" text-xl max-lg:text-lg font-bold leading-tight tracking-tight text-teal-600">
              Resumo
  </h1>
  

<section class="">

  <div class="mx-auto max-w-screen-xl px-4 py-0  ">


    <div class="mx-auto max-w-3xl">



      <div class="mt-8 ">

        <ul  class="space-y-10 text-center">

          <carousel-09></carousel-09>

          

            

        </ul>

        <div class="mt-8 flex justify-end border-t border-gray-100 pt-8 ">

          <div class="w-full space-y-4">

            <dl class="space-y-0.5 text-sm text-gray-700">

              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd id="subtotalCarrinho2">R$ 0,00</dd>
              </div>

              <div class="flex justify-between">
                <dt>Frete</dt>
                <dd id="Frete">R$ 15,00</dd>
              </div>

              <div class="flex justify-between">
                <dt >Desconto</dt>
                <dd id="descontoCarrinho2">-R$ 0,00</dd>
              </div>

              <div class="flex justify-between !text-base font-medium pt-4">
                <dt>Total</dt>
                <dd id="totalCarrinho2">R$ 0,00</dd>
              </div>

            </dl>

            <div class="hidden justify-end">
              <span
                class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

</form>

          
<!-- Codigo -->
        

      `;
      

  }
}

customElements.define("form-resumo", formresumo);


// == Componente de form pagamento == //

class formpagamento extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->

<form id="formpagamento" class="hidden w-full relative backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-2xl  p-6 space-y-4 md:space-y-6 sm:p-8 animate__fadeIn animate__animated animate__fast-1s">

<dl id="modalInfoPagamento" class=" text-gray-900 divide-y space-y-2 w-full divide-gray-200 text-xs outline outline-1 rounded-lg outline-gray-300 p-4 drop-shadow-md bg-white absolute z-50 h-full top-0 left-0 hidden  animate__fadeInUp animate__animated animate__fast-1s">

          <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500  ">Nome</dt>
              <dd class="text-xs font-semibold">Sol Nascente - produtos orgânicos</dd>
          </div>

          <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500  mt-2">CPF</dt>
              <dd class="text-xs font-semibold">***.578.876-**</dd>
          </div>

          <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500  mt-2">Banco</dt>
              <dd class="text-xs font-semibold">MERCADO PAGO</dd>
          </div>

          <div class="flex flex-col pb-3">
              <dt class="mb-1 text-gray-500  mt-2">Dados bancários</dt>
              <dd class="text-xs font-semibold">Agência: 6789</dd>
              <dd class="text-xs font-semibold">Conta: 67897859490303984858</dd>
          </div>

          <svg id="objFecharmodalInfoPagamento" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto rounded-md hover:outline-red-400 hover:stroke-red-400 cursor-pointer fixed right-4 top-0 hover:scale-[1.02]"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>

</dl>

  <h1 class=" text-xl max-lg:text-lg font-bold leading-tight tracking-tight text-teal-600 flex justify-between">
                Pagamento

  <div id="objAbrirmodalInfoPagamento" class="flex items-center p-2  text-sm text-teal-800 rounded-lg bg-blue-50 cursor-pointer hover:scale-[1.02]" role="alert">
        <svg class="flex-shrink-0 inline w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium text-xs">Informações</span>
        </div>
      </div>
  </h1>
    

  <section class=" flex flex-col  items-center gap-4 max-lg:gap-4 ">

    <img class="w-1/2 max-w-[200px]" src="https://i.ibb.co/vcfqsfm/image.png" alt="">

    <p id="txtValorPix" class="font-medium mb-2 text-teal-600">Valor: R$10,00</p>

    <p id="txtExpiracaoPix" class=" mb-2 text-gray-400 text-xs">Expira em 09/10/2023 18:00</p>

      <div class="relative mb-6 flex max-md:flex-col gap-4 w-full max-w-lg  ">

        <div class="flex w-full relative">

        <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>

        </div>

        <input id="txtPix" type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  cursor-text" disabled value="38273824-4648ujd939-ff33333333333333333333-nfufuhrufhurhf" >
        
        </div>

      <button id="btnCopiarPix" type="button" class="px-5 hover:scale-[1.02] justify-center gap-2 py-2.5 text-sm font-medium text-white inline-flex items-center bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br  rounded-lg text-center shadow-lg shadow-teal-500/50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg><p>Copiar</p></button>

      
         
      </div>

  </section>

</form>

          
<!-- Codigo -->
        

      `;

      const objAbrirmodalInfoPagamento = document.getElementById('objAbrirmodalInfoPagamento')
      const objFecharmodalInfoPagamento = document.getElementById('objFecharmodalInfoPagamento')
      const modalInfoPagamento = document.getElementById('modalInfoPagamento')

      objAbrirmodalInfoPagamento.addEventListener('click',()=>{ 
        modalInfoPagamento.classList.remove('hidden')
        modalInfoPagamento.classList.add('block')
       })

       objFecharmodalInfoPagamento.addEventListener('click',()=>{ 
        modalInfoPagamento.classList.remove('block')
        modalInfoPagamento.classList.add('hidden')
       })


      

  }
}

customElements.define("form-pagamento", formpagamento);

    
    
  
  
  
  
  
  