

// =================================== FUNCOES =============================================== //


// acao >> Verifica os campos obrigatorios de emite alerta
// parametros >> formulario
// retorno >> boolean

export function validarFormulario(formulario) {
  
    const blockinput = formulario.querySelectorAll('.blockinput');
    
  
    for (const iblockinput of blockinput) {
  
      const camposObrigatorios = iblockinput.querySelector('.required');
  
      const valorCampo = camposObrigatorios.value.trim();

      const msgalert = iblockinput.querySelector('p');

      if( msgalert.textContent === 'Campo Obrigatório' && msgalert.style.color === 'rgba(255, 0, 0, 0.5)' ) 
      { msgalert.classList.add('hidden'); }
  
      if (valorCampo === '') {
  
        msgalert.textContent = 'Campo Obrigatório';
        msgalert.style.color = 'rgba(255, 0, 0, 0.5)';
        msgalert.classList.remove('hidden');
  
        camposObrigatorios.focus();
  
        return false; // Impede o envio do formulário
  
      }
  
    }
  
    return true; // Permite o envio do formulário se todos os campos obrigatórios estiverem preenchidos
  
  }

  
// acao >> zerar os inputs do formulario
// parametros >> formulario
  
export function zerarValoresDoFormulario(formulario) {
    
    const elementosDeEntrada = formulario.querySelectorAll('input'||'textarea');
    const alertas = formulario.querySelectorAll('.clsalertinput');
  
    elementosDeEntrada.forEach(elemento => {
      if (elemento.type === 'checkbox') {elemento.checked = false} 
      else {elemento.value = ''}
    });
  
    alertas.forEach(alerta => {
      alerta.classList.add('hidden');
    });
  
  
  }