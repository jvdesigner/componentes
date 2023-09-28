

//== funcoes == //

// -- mostrar senha

function toggleVisibility(idinputSenha, idiconmostrarsenha, idiconocultarsenha) {
  const inputSenha = document.getElementById(idinputSenha);
  const iconMostrarSenha = document.getElementById(idiconmostrarsenha);
  const iconOcultarSenha = document.getElementById(idiconocultarsenha);

  iconMostrarSenha.addEventListener('click', () => {
    inputSenha.type = 'text'; // Torna a senha visível
    iconMostrarSenha.style.display = 'none'; // Oculta o ícone de mostrar senha
    iconOcultarSenha.style.display = 'block'; // Exibe o ícone de ocultar senha
  });

  iconOcultarSenha.addEventListener('click', () => {
    inputSenha.type = 'password'; // Oculta a senha
    iconMostrarSenha.style.display = 'block'; // Exibe o ícone de mostrar senha
    iconOcultarSenha.style.display = 'none'; // Oculta o ícone de ocultar senha
  });
}

// --------------

// -- validar email 

function validarEmail(idinputEmail,idalertainputemail) {
  const emailInput = document.getElementById(idinputEmail);
  const emailMessage = document.getElementById(idalertainputemail);

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === '') {
      emailMessage.classList.add('hidden'); // Oculta a mensagem
    }

    else if (emailPattern.test(email)) {
      emailMessage.textContent = 'Email válido';
      emailMessage.style.color = 'rgba(77, 192, 181, 0.8)';
      emailMessage.classList.remove('hidden');
    } else {
      emailMessage.textContent = 'Email inválido';
      emailMessage.style.color = 'rgba(255, 0, 0, 0.5)';
      emailMessage.classList.remove('hidden');
    }
  });
}

// --------------

// Validar senha

function validarSenha(idinputEmail,idalertainputemail) {
  const emailInput = document.getElementById(idinputEmail);
  const emailMessage = document.getElementById(idalertainputemail);

  emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const emailPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (email === '') {
      emailMessage.classList.add('hidden'); // Oculta a mensagem
    }

    else if (emailPattern.test(email)) {
      emailMessage.textContent = 'Senha válida';
      emailMessage.style.color = 'rgba(77, 192, 181, 0.8)';
      emailMessage.classList.remove('hidden');
    } else {
      emailMessage.textContent = 'Sua senha deve conter no mínimo 6 caracteres incluindo números, letras maíusculas e minúsculas';
      emailMessage.style.color = 'rgba(255, 0, 0, 0.5)';
      emailMessage.classList.remove('hidden');
    }
  });
}

// -------------

// Campos obrigatorios

function validarFormulario(formulario) {
  
  const blockinput = formulario.querySelectorAll('.blockinput');
  

  for (const iblockinput of blockinput) {

    const camposObrigatorios = iblockinput.querySelector('.required');

    const valorCampo = camposObrigatorios.value.trim();

    if (valorCampo === '') {

      const msgalert = iblockinput.querySelector('p');
      msgalert.textContent = 'Campo Obrigatório';
      msgalert.style.color = 'rgba(255, 0, 0, 0.5)';
      msgalert.classList.remove('hidden');

      camposObrigatorios.focus();

      return false; // Impede o envio do formulário

    }

  }

  return true; // Permite o envio do formulário se todos os campos obrigatórios estiverem preenchidos

}


// ===============================================================================



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
        

  <section id="objFormLogin" class="bg-white h-screen w-screen hidden fixed top-0 z-50  animate__animated  animate__fadeInUp">

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
      <div class="w-full backdrop-blur-sm bg-white rounded-lg drop-shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-teal-600 md:text-2xl ">
                  Entre na sua conta
              </h1>

              <form id="formlogin" class="space-y-4 md:space-y-6">

                  <div class="mb-6 blockinput">

                      <label for="txtEmailLogin" class="block mb-2 text-sm font-medium text-gray-500 0 ">Email</label>

                      <input autocomplete="off" type="email" id="txtEmailLogin" maxlength="100" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="usuario@email.com"> 

                      <p id="alertainputemail" class="hidden mt-2 text-sm text-gray-600 ">Email válido</p>

                  </div>

                  <div class="mb-6 blockinput">

                      <label for="txtSenhaLogin" class="block mb-2 text-sm font-medium text-gray-500 ">Senha</label>

                      <div class="relative flex items-center ">
                      <input autocomplete="off" maxlength="12" type="password" id="txtSenhaLogin" class="required bg-gray-50 border border-gray-500 text-gray-500  placeholder-gray-300 text-sm rounded-lg focus:scale-105 block w-full p-2.5" placeholder="••••••••">
                      <svg id="iconmostrarSenha" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <svg id="iconocultarSenha" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-6 h-6 absolute right-4 text-gray-500 hover:text-teal-600 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>

                      </div>  

                      <p id="alertainputsenha" class="hidden text-sm text-gray-600 mt-2"> </p>
 
                      
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

                      <a href="#" class="text-sm font-medium text-gray-500 hover:underline hover:text-teal-600">Esqueceu a senha?</a>

                  </div>

                  <button id="btnentrar" type="button" class="w-full text-white bg-teal-600 hover:bg-teal-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:scale-105 hover:scale-105 ">Entrar</button>

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

        toggleVisibility('txtSenhaLogin', 'iconmostrarSenha', 'iconocultarSenha');

        validarEmail('txtEmailLogin','alertainputemail');

        validarSenha('txtSenhaLogin','alertainputsenha');

        const btnentrar = document.getElementById('btnentrar');

        const formlogin = document.getElementById('formlogin');
        
        btnentrar.addEventListener('click',()=>{ validarFormulario(formlogin) })

    }
  }
  
  customElements.define("form-login", formlogin);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  