


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