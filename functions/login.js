


// =================================== FUNCOES =============================================== //


//  Ocultar objetos do formulario de login | cadastro | esqueci minha senha
// Parametros >> formulario de login

export function ocultarobjLoginCadastro(tipoForm){

    const objlogin = document.querySelectorAll('.clsobjformlogin')
    const objcadastro = document.querySelectorAll('.clsobjformcadastro')
    const objesquecisenha = document.querySelectorAll('.clsesquecisenha')
  
   if ( tipoForm == "login" )
  
      { 
  
        objcadastro.forEach(iobjcadastro => {
          iobjcadastro.classList.add('hidden');
        });

        objesquecisenha.forEach(iobjesquecisenha => {
            iobjesquecisenha.classList.add('hidden');
          });
  
        objlogin.forEach(iobjlogin => {
          iobjlogin.classList.remove('hidden');
        });
  
  
      }
  
  else if( tipoForm == "cadastro" )
  
      { 

        objlogin.forEach(iobjlogin => {
            iobjlogin.classList.add('hidden');
          });

          objesquecisenha.forEach(iobjesquecisenha => {
            iobjesquecisenha.classList.add('hidden');
          });
  
        objcadastro.forEach(iobjcadastro => {
          iobjcadastro.classList.remove('hidden');
        });

        
  
        
  
  
      }

      else if( tipoForm == "esqueci" )
  
      { 

        objlogin.forEach(iobjlogin => {
            iobjlogin.classList.add('hidden');
          });

        objesquecisenha.forEach(iobjesquecisenha => {
            iobjesquecisenha.classList.remove('hidden');
          });
  
        
  
  
      }
  
  
  }


//  Mostrar/esconder senha do formulario de login 
// Parametros >> id do input da senha e os ids dos icones


export function toggleVisibility(idinputSenha, idiconmostrarsenha, idiconocultarsenha) {
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

//  Validar input do tipo email
// Parametros >> id do input do email e o id do alerta

export function validarEmail(idinputEmail,idalertainputemail) {

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


//  Validar input de senha
// Parametros >> id do input da senha e o id do alerta

export function validarSenha(idinputSenha,idalertainputemail) {

  const senhaInput = document.getElementById(idinputSenha);
  const senhaMessage = document.getElementById(idalertainputemail);

  senhaInput.addEventListener('input', () => {

    const senha = senhaInput.value;
    const senhaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (senha === '') {
      senhaMessage.classList.add('hidden'); // Oculta a mensagem
    }

    else if (senhaPattern.test(senha)) {
      senhaMessage.textContent = 'Senha válida';
      senhaMessage.style.color = 'rgba(77, 192, 181, 0.8)';
      senhaMessage.classList.remove('hidden');
    } else {
      senhaMessage.textContent = 'Sua senha deve conter no mínimo 6 caracteres incluindo números, letras maíusculas e minúsculas';
      senhaMessage.style.color = 'rgba(255, 0, 0, 0.5)';
      senhaMessage.classList.remove('hidden');
    }
  });
}

//  Validar input de senha confirmada
// Parametros >> id do input da senha , id do input da senha confirmada e o id do alerta

// Validar senha confirmada

export function validarSenhaconfirmada(idinputSenha,idinputSenhaConfirmada,idalertainputConfirmada) {

  const inputSenha = document.getElementById(idinputSenha);
  const inputSenhaConfirmada = document.getElementById(idinputSenhaConfirmada);

  const confirmadaMessage = document.getElementById(idalertainputConfirmada);

  inputSenhaConfirmada.addEventListener('input', () => {

    const senhaValue = inputSenha.value;
    const confirmadaValue = inputSenhaConfirmada.value;
    

    if ( senhaValue !== confirmadaValue ) {

      confirmadaMessage.textContent = 'A senha confirmada está diferente da senha';
      confirmadaMessage.style.color = 'rgba(255, 0, 0, 0.5)';
      confirmadaMessage.classList.remove('hidden');
    }

  });

  inputSenha.addEventListener('input', () => {

    const senhaValue = inputSenha.value;
    const confirmadaValue = inputSenhaConfirmada.value;
    

    if ( ( senhaValue !== confirmadaValue ) && ( confirmadaValue !== '' ) ) {

      confirmadaMessage.textContent = 'A senha confirmada está diferente da senha';
      confirmadaMessage.style.color = 'rgba(255, 0, 0, 0.5)';
      confirmadaMessage.classList.remove('hidden');
    }
    else if( ( senhaValue == confirmadaValue ) && ( confirmadaValue !== '' ) ){

      confirmadaMessage.textContent = 'Senha válida';
      confirmadaMessage.style.color = 'rgba(77, 192, 181, 0.8)';
      confirmadaMessage.classList.remove('hidden');

    }

  });

}