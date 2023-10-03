

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
      else {elemento.value = null}
    });
  
    alertas.forEach(alerta => {
      alerta.classList.add('hidden');
    });
  
  
  }


// Função para adicionar o evento de classificação a um componente
export function preencherEstrelasClassificacao(componenteClassificacao) {

  const estrelas = componenteClassificacao.querySelectorAll('svg');

  let classificacao = 0;

  estrelas.forEach((estrela, indice) => {

    estrela.addEventListener('mouseover', () => {
      // Ao passar o mouse sobre uma estrela, definimos a classificação para o índice + 1
      classificacao = indice + 1;
      // Remove a cor amarela de todas as estrelas
      estrelas.forEach((estrela) => {
        estrela.classList.remove('text-teal-600');
      });
      // Adiciona a cor amarela apenas à estrela atual
      for (let i = 0; i <= indice; i++) {
        estrelas[i].classList.add('text-teal-600');
      }
    });

    estrela.addEventListener('click', () => {
      // Ao clicar em uma estrela, definimos a classificação para o índice + 1
      classificacao = indice + 1;
      // Remove a cor amarela de todas as estrelas
      estrelas.forEach((estrela) => {
        estrela.classList.remove('text-teal-600');
      });
      // Adiciona a cor amarela apenas à estrela atual
      for (let i = 0; i <= indice; i++) {
        estrelas[i].classList.add('text-teal-600');
      }
    });

    estrela.addEventListener('mouseout', () => {
      // Ao retirar o mouse, restauramos a classificação anterior
      // Apenas a estrela clicada deve manter a cor amarela após o clique
      for (let i = 0; i <= classificacao - 1; i++) {
        estrelas[i].classList.add('text-teal-600');
      }
    });
  });
}
