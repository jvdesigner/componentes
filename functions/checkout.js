
// =================================== IMPORTAR FUNCOES =============================================== //

import * as funcoes_formulario from './formulario.js'

// =================================== VARIAVEIS =============================================== //

let resultado = true
let prosseguirPara = 'endereco'

// =================================== NAVEGACAO =============================================== //


// funcao para adicionar evento para controlar as cores
function adicionarEvento() {
    const compStepper = document.getElementById('compStepper');
    const comStepperLi = compStepper.querySelectorAll('li');

    comStepperLi.forEach((element) => {
        const comStepperDiv = element.querySelector('div');
        const comStepperSvg = comStepperDiv.querySelector('svg');

        // Adicionar evento de clique para controlar cores
        comStepperDiv.addEventListener('click',  (event) => {

            

            //resultado = validarFormularios()

            if(!resultado){return}

            let passei = false

            comStepperLi.forEach((elem) => {
                const div = elem.querySelector('div');
                const svg = div.querySelector('svg');

                
        
                if(!resultado){return}

                if(!passei){

                    elem.classList.remove('after:border-white');
                    div.classList.remove('bg-white');
                    svg.classList.remove('text-teal-600');
    
                    elem.classList.add('after:border-teal-500');
                    div.classList.add('bg-teal-500');
                    svg.classList.add('text-white');

                }

                if(passei){

                    elem.classList.add('after:border-white');
                    div.classList.add('bg-white');
                    svg.classList.add('text-teal-600');
    
                    elem.classList.remove('after:border-teal-500');
                    div.classList.remove('bg-teal-500');
                    svg.classList.remove('text-white');

                }

                
                if (div == comStepperDiv) {


                    elem.classList.add('after:border-white');
                    div.classList.remove('bg-white');
                    svg.classList.remove('text-teal-600');

                    elem.classList.remove('after:border-teal-500');
                    div.classList.add('bg-teal-500');
                    svg.classList.add('text-white');

                    passei = true

                }

                
            });
        });

    });
}

function esconderFormularios() {
    const forms = document.querySelectorAll('form');
    forms.forEach(async(form) => {



        form.classList.remove('block');
        form.classList.add('hidden');

    

    });
}

function mostrarFormularios(form) {



        resultado = validarFormularios()

        if(!resultado){return }

        esconderFormularios()

        form.classList.remove('hidden');
        form.classList.add('block');
}

function mostrarFormSelecionado() {
    const divFormInfo = document.getElementById('divFormInfo');
    const divFormendereco = document.getElementById('divFormendereco');
    const divFormresumo = document.getElementById('divFormresumo');
    const divFormpagamento = document.getElementById('divFormpagamento');

    const FormInfo = document.getElementById('FormInfo');
    const formendereco = document.getElementById('formendereco');
    const formresumo = document.getElementById('formresumo');
    const formpagamento = document.getElementById('formpagamento');

    

    divFormInfo.addEventListener('click', () => {
        prosseguirPara = 'informacao'
        mostrarFormularios(FormInfo)
 
       
    });

    divFormendereco.addEventListener('click', () => {
        prosseguirPara = 'endereco'
        mostrarFormularios(formendereco)
  

    });

    divFormresumo.addEventListener('click', () => {
        prosseguirPara = 'resumo'
        mostrarFormularios(formresumo)


       
    });

    divFormpagamento.addEventListener('click', () => {
        prosseguirPara = 'pagamento'
        mostrarFormularios(formpagamento)

        
    });
}


// =================================== FORM =============================================== //

//mensagem de alerta de campo
function alertaCampo(validacao,objalert,mensagem){

    let resultado

    if(validacao){

        //objalert.textContent = mensagem;
        //objalert.style.color = 'rgba(77, 192, 181, 0.8)';
        objalert.classList.add('hidden');
        objalert.classList.remove('flex');
        resultado = true

    }
    else{

        objalert.textContent = mensagem;
        objalert.style.color = 'rgba(255, 0, 0, 0.5)';
        objalert.classList.remove('hidden');
        objalert.classList.add('flex');
        resultado = false

    }

    return resultado



}

// formularios
function validarFormularios(){

    // formulario informacoes pessoais
    const FormInfo = document.getElementById('FormInfo'); 

    // formulario endereco
    const formendereco = document.getElementById('formendereco'); 

    console.log(prosseguirPara)

    if(!FormInfo.classList.contains('hidden')){ 

        // campo email
        const txtEmailCliente = document.getElementById('txtEmailCliente')
        const emailMessage = document.getElementById('alertainputemailcliente')


        // verificar campos vazios
        resultado =  funcoes_formulario.validarFormulario(FormInfo)

        if(!resultado){return}

        //validar email
        const email = txtEmailCliente.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(email)) {

            alertaCampo(true,emailMessage,'Email válido')
   
        } else {

            alertaCampo(false,emailMessage,'Email inválido')
            resultado = false

        }

        if(!resultado){return}

        //verificar campos de ddd e celular

        //campo ddd
        const txtdddCliente = document.getElementById('txtdddCliente');
        const alertdddCliente = document.getElementById('alertdddCliente')
       
        //campo celular
        const txtcelularCliente = document.getElementById('txtCelularCliente')
        const alertcelularCliente = document.getElementById('alertCelularCliente')

        // Regex para validar o formato "9xxxx-xxxx"
        const regexCelular = /^[1-9]{1}[0-9]{3,4}-[0-9]{4}$/;
        // Regex para validar o DDD (opcional)
        const regexDDD = /^[1-9]{2}$/;

        // verificar DDD

        if (regexDDD.test(txtdddCliente.value)) {

            alertaCampo(true,alertdddCliente,'DDD válido')
   
        } else {

            alertaCampo(false,alertdddCliente,'DDD inválido')
            resultado = false

        }

        if(!resultado){return}

        // verificar celular

        if (regexCelular.test(txtcelularCliente.value)) {

            alertaCampo(true,alertcelularCliente,'Celular válido')
   
        } else {

            alertaCampo(false,alertcelularCliente,'Escreva no formato 9xxxx-xxxx')
            resultado = false

        }


     }

    else if(!formendereco.classList.contains('hidden')){


        if(prosseguirPara=='informacao'){resultado=true ;return resultado}
        
        // campo CEP
        const txtCEPCliente = document.getElementById('txtCEPCliente')
        const alertatxtCEPCliente = document.getElementById('alertatxtCEPCliente')


        // verificar campos vazios
        resultado =  funcoes_formulario.validarFormulario(formendereco)

        if(!resultado){return}

        //validar CEP
        const CEP = txtCEPCliente.value;
        const regexCEP = /^\d{5}-\d{3}$/;

        if (regexCEP.test(CEP)) {

            alertaCampo(true,alertatxtCEPCliente,'CEP válido')
   
        } else {

            alertaCampo(false,alertatxtCEPCliente,'Preencha o CEP no formato xxxxx-xxx')
            resultado = false

        }

        if(!resultado){return}

        //verificar campos de numero do endereco

        //campo numero
        const txtNumeroCliente = document.getElementById('txtNumeroCliente');
        const alertaNumeroCliente = document.getElementById('alertaNumeroCliente')
      
        // Regex para validar o formato do numero
        const regexNumeroEndereco = /^\d+$/;


        // verificar 

        if (regexNumeroEndereco.test(txtNumeroCliente.value)) {

            alertaCampo(true,alertaNumeroCliente,'numero válido')
   
        } else {

            alertaCampo(false,alertaNumeroCliente,'Preencha com numero')
            resultado = false

        }

        if(!resultado){return}

    


     }

     

     return resultado


}

// =================================== ADICIONAR EVENTOS =============================================== //

function adicionareventoCampoCelular(){

// Keyup campo de celular
const celularInput = document.getElementById('txtCelularCliente');

celularInput.addEventListener('keyup', () => {
  // Remove todos os caracteres não numéricos do campo
  const celularValue = celularInput.value.replace(/\D/g, '');

  // Adiciona automaticamente o hífen no formato "9xxxx-xxxx"
  if (celularValue.length >= 5) {
    celularInput.value = celularValue.slice(0, 5) + '-' + celularValue.slice(5);
  }
});
}


// =================================== EXECUTAR =============================================== //

//eventos
mostrarFormSelecionado()
adicionarEvento()
adicionareventoCampoCelular()