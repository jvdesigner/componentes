
// =================================== IMPORTAR FIREBASE =============================================== //



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { 
          getFirestore ,
          collection   , 
          addDoc       ,
          getDocs      ,
          query        , 
          where        ,
          limit        ,
          orderBy      ,
          setDoc,doc,
          deleteDoc
  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";



// =================================== VARIAVEIS FIREBASE =============================================== //

// dados do app
const firebaseConfig = {
  apiKey: "AIzaSyB0uycpyo_NkxKSH4AQi_tnjQ2eJ-e7aAE",
  authDomain: "ecommerceduplicado.firebaseapp.com",
  projectId: "ecommerceduplicado",
  storageBucket: "ecommerceduplicado.appspot.com",
  messagingSenderId: "779797115103",
  appId: "1:779797115103:web:9f4e4ce2f48af9e8f8796a"
};

// dados do app
const firebaseConfig2 = {
  apiKey: "AIzaSyAb9pv_fUvoeYShp3vZbxbT1ur7C7fJUeU",
  authDomain: "ecommerce-ff132.firebaseapp.com",
  projectId: "ecommerce-ff132",
  storageBucket: "ecommerce-ff132.appspot.com",
  messagingSenderId: "991605978710",
  appId: "1:991605978710:web:5a9cd758caccd7426fedf7"
};

// variavel app
const app = initializeApp(firebaseConfig2);

// variavel banco
const db = getFirestore(app);

// variavel colecao
const col = collection(db, "pedidos")



// =================================== IMPORTAR FUNCOES =============================================== //

import * as funcoes_formulario from './formulario.js'
import * as funcoes_data from "../functions/data.js";
import * as funcoes_loading from "../functions/loading.js";

// =================================== VARIAVEIS =============================================== //

let resultado = true
let prosseguirPara = 'endereco'
let objPix
let statusPix
let idPix

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

    //resultado = true;return resultado

    // formulario informacoes pessoais
    const FormInfo = document.getElementById('FormInfo'); 

    // formulario endereco
    const formendereco = document.getElementById('formendereco'); 

    // formulario resumo
    const formresumo = document.getElementById('formresumo'); 

    console.log(prosseguirPara)

    if(!FormInfo.classList.contains('hidden')){ 

        if(prosseguirPara!=='endereco'){resultado=false ;return resultado}

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

        if(prosseguirPara=='pagamento'){resultado=false }
        
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

    else if(prosseguirPara=='pagamento'){
        resultado=criarPagamento();
        if(resultado){setInterval(verificarPagamento, 5000)}
        return resultado
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




// =================================== CARRINHO =============================================== //

// Função para atualizar o carrinho
function atualizarCarrinho() {

    //form
    const formresumo = document.getElementById('formresumo'); 

    // galeria do carrinho
    const galeriaItensCarrinho = formresumo.querySelector('#galeriaItensCarrinho');

   
  
    // retornar do localstorage o carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
  
    // Remove os filhos da galeria
    while (galeriaItensCarrinho.firstChild) {galeriaItensCarrinho.removeChild(galeriaItensCarrinho.firstChild);}
  
    // retornar se o carrinho estiver vazio
    if (carrinho === null || Object.keys(carrinho).length === 0) {
        // editar texto no carrinho na interface
        galeriaItensCarrinho.textContent ='Carrinho Vazio';
        galeriaItensCarrinho.classList.remove('text-start');
        galeriaItensCarrinho.classList.add('text-center');
        //atualizar total no carrinho
        calcularTotalCarrinho()
        return;
    }
  
    // componente da interface
    let componenteItensCarrinho;
    let galeriaAtualizada;
  
    // percorrer objeto carrinho e criar a interface
    for (const chave in carrinho) {
        if (carrinho.hasOwnProperty(chave)) {
            const informacaoProduto = carrinho[chave];
            componenteItensCarrinho = `
                <itemcart-02
                    class=""
                    srcimagem="${informacaoProduto.imagem}"
                    nomeProduto="${informacaoProduto.nome}"
                    idProduto="${informacaoProduto.id}"
                    precoProduto="${informacaoProduto.preco}"
                    qtnProduto="${informacaoProduto.quantidade} ${informacaoProduto.medida}"
                    totalProduto="${(parseInt(informacaoProduto.quantidade)*parseFloat(informacaoProduto.preco.replace(',', '.'))).toFixed(2)}"
                ></itemcart-02>
            `;
  
            galeriaAtualizada = document.createElement('div');
            galeriaAtualizada.classList.add('swiper-slide');
            galeriaAtualizada.innerHTML = componenteItensCarrinho;
  
            // Use appendChild para adicionar o componente à galeria
            galeriaItensCarrinho.appendChild(galeriaAtualizada);
  
            // funcao para alterar a quantidade no carrinho pelo botao de aumentar e diminuir
            // parametros >> componente do carrinho | objeto com os dados do carrinho
            //funcoes_produtos.alterarQuantidadePai(galeriaAtualizada, informacaoProduto);
  
            
  
           
        }
    }
  
    // editar conteudo
    // Verificar se a classe 'text-center' está presente antes de removê-la
    if (galeriaItensCarrinho.classList.contains('text-center')) {galeriaItensCarrinho.classList.remove('text-center')}
  
    // Adicionar a classe 'text-start' se não estiver presente
    if (!galeriaItensCarrinho.classList.contains('text-start')) {galeriaItensCarrinho.classList.add('text-start')}

  
    //atualizar total no carrinho
    calcularTotalCarrinho()
  
  }

// função para calcular total no carrinho
function calcularTotalCarrinho() {

    // elemento de subtotal da interface
    const subtotalCarrinho = document.getElementById('subtotalCarrinho2');
    const descontoCarrinho = document.getElementById('descontoCarrinho2');
    const totalCarrinho = document.getElementById('totalCarrinho2');

    const txtValorPix = document.getElementById('txtValorPix')
  
    // retornar do localstorage o carrinho
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
  
    let subtotal = 0;
  
    for (const chave in carrinho) {
      if (carrinho.hasOwnProperty(chave)) {
        const produto = carrinho[chave];
        const preco = parseFloat(produto.preco.replace(',', '.')); // Converte o preço para um número com ponto decimal
        const quantidade = parseInt(produto.quantidade);
        subtotal += preco * quantidade;
      }
    }
  
  
    const desconto = 0.00; // Você pode ajustar o valor do desconto conforme necessário
    const frete = 0.00;
  
    const total = subtotal - desconto + frete;
  
    subtotalCarrinho.textContent = "R$ " + subtotal.toFixed(2); // Arredonda o subtotal para duas casas decimais e retorna como string
    descontoCarrinho.textContent = "-R$ " + desconto.toFixed(2); // Arredonda o desconto para duas casas decimais e retorna como string
    totalCarrinho.textContent = "R$ " + total.toFixed(2); // Arredonda o total para duas casas decimais e retorna como string

    txtValorPix.textContent = "Valor: R$ " + total.toFixed(2); // Arredonda o total para duas casas decimais e retorna como string


  }

function retornarTotal(){

     // retornar do localstorage o carrinho
     let carrinho = JSON.parse(localStorage.getItem('carrinho'));
  
     let subtotal = 0;
   
     for (const chave in carrinho) {
       if (carrinho.hasOwnProperty(chave)) {
         const produto = carrinho[chave];
         const preco = parseFloat(produto.preco.replace(',', '.')); // Converte o preço para um número com ponto decimal
         const quantidade = parseInt(produto.quantidade);
         subtotal += preco * quantidade;
       }
     }
   
   
     const desconto = 0.00; // Você pode ajustar o valor do desconto conforme necessário
     const frete = 0.00;
   
     const total = subtotal - desconto + frete;
   
     return total.toFixed(2)

}

// =================================== PAGAMENTO =============================================== //

function copiarChavePix() {
    const btnCopiarPix = document.getElementById('btnCopiarPix');
    const btnCopiarPixTXT = btnCopiarPix.querySelector('p');
    const txtPix = document.getElementById('txtPix');
  
    btnCopiarPix.addEventListener('click', async () => {
      try {
        // Cria um novo objeto ClipboardItem com o texto a ser copiado
        const textItem = new ClipboardItem({ "text/plain": new Blob([txtPix.value], { type: "text/plain" }) });
  
        // Copia o objeto ClipboardItem para a área de transferência
        await navigator.clipboard.write([textItem]);
  
        // Exibe uma mensagem de confirmação
        btnCopiarPixTXT.textContent = 'Copiada';
  
        // Aguarda 2 segundos e depois reverte o texto para 'Copiar'
        setTimeout(() => {
            btnCopiarPixTXT.textContent = 'Copiar';
        }, 2000);
      } catch (err) {
        // Se houve algum erro ao copiar o texto
        alert('Ocorreu um erro ao copiar a chave Pix.');
      }
    });
  }

function gerarItens(){

    // Converter carrinho em um objeto
   let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

   //criar lista de itens do carrinho
  let items = []
  Object.values(carrinho).forEach((element) => {
    
    const objProduto= {
      "id": element.id,
      "title": element.nome,
      "description": element.descricao,
      "picture_url": element.imagem,
      "category_id": element.categoria,
      "quantity": element.quantidade,
      "unit_price": element.preco,
      "type": element.categoria,
      "event_date": funcoes_data.obterDataAtual(),
      "category_descriptor": {
        "passenger": {},
        "route": {}
      }
    }

    items.push(objProduto)

    //console.log(items)
    
  });

  return items

}

function gerarInformacoesCliente(){

    const txtNomeCliente = document.getElementById('txtNomeCliente')
    const txtSobrenomeCliente = document.getElementById('txtSobrenomeCliente')
    const txtEmailCliente = document.getElementById('txtEmailCliente')
    const txtdddCliente = document.getElementById('txtdddCliente')
    const txtCelularCliente = document.getElementById('txtCelularCliente')

    const payer01= 

    {
      "first_name": txtNomeCliente.value,
      "last_name": txtSobrenomeCliente.value,
      "phone": {
        "area_code": parseInt(txtdddCliente.value),
        "number": txtCelularCliente.value
      },
      "address": {}
    } 

    const payer02= 
 {
    "entity_type": "individual",
    "type": "customer",
    "email": txtEmailCliente.value
   
  } 

return [payer01,payer02]

}

function gerarEndereco(){

    const Cidade = document.getElementById('txtCidadeCliente')
    const Estado = document.getElementById('txtEstadoCliente')
    const CEP = document.getElementById('txtCEPCliente')
    const Bairro = document.getElementById('txtBairroCliente')
    const Rua = document.getElementById('txtRuaCliente')
    const numero = document.getElementById('txtNumeroCliente')
    const complemento = document.getElementById('txtComplementoCliente')

    const shipments= 

    {
        "receiver_address": {
          "zip_code": CEP.value,
          "state_name": Estado.value,
          "city_name": Cidade.value,
          "street_name": Rua.value+' | comp:'+complemento.value+'| bairro:'+Bairro,
          "street_number": numero.value
        }
      }

      return shipments



}

function gerarObjCriarPagamento(){

    const itens = gerarItens()
    const payer = gerarInformacoesCliente()
    const endereco = gerarEndereco()
    const total = retornarTotal()

    const objCriarPagamento =

    {

        "additional_info": {
      
          "items": itens
          
          ,
      
          "payer": payer[0]
          
          ,
      
          "shipments": endereco
      
        }
        
        ,
      
        "description": "Payment for product",
      
        "payer": payer[1] 
        ,
      
        "payment_method_id": "pix",
        "token": "970bb42c-d23b-4c6c-82cd-ead090b9a53d",
        "transaction_amount": parseFloat(total)

      }

      //console.log(JSON.stringify(objCriarPagamento))

      return objCriarPagamento


}

//<script src="https://sdk.mercadopago.com/js/v2"></script>
//document.getElementById('imgPix').src = 'data:image/jpeg;base64,'+vbase64

async function criarPagamento(){

   informacoesClienteLocal()

    let validacao = true

    const objCriarPix = gerarObjCriarPagamento()

    //console.log(objCriarPix)
    //return

   await  fetch('https://api.mercadopago.com/v1/payments', {
    
      method: 'POST',
    
      headers: {
        'Authorization': 'Bearer APP_USR-6781688030380061-100709-f2faf782b96a6db5775505e795e121fe-501341309',
        'Content-Type': 'application/json',
      },
    
      body: JSON.stringify(objCriarPix),
      
    })
      .then(response => response.json())
      .then(data => { objPix = data; console.log(objPix)})
      .catch(error => {console.error('Error creating payment: ', error);
      funcoes_loading.criarAlerta02('Falha em gerar o pix','Favor falar com o suporte','red','alert');
      validacao = false
    });


    // atualizar imagem pix
    const imgQrCodePix = document.getElementById('imgQrCodePix')
    const txtExpiracaoPix = document.getElementById('txtExpiracaoPix')
    const txtPix = document.getElementById('txtPix')

    statusPix = objPix.status;
    console.log(statusPix); 

    idPix = objPix.id
    console.log(idPix);

    const qrCode = objPix.point_of_interaction.transaction_data.qr_code;
    console.log(qrCode); 

    const qrCodeBase64 = objPix.point_of_interaction.transaction_data.qr_code_base64;
    console.log(qrCodeBase64); 

    const dateOfExpiration = objPix.date_of_expiration;
    console.log(dateOfExpiration); 

    imgQrCodePix.src = 'data:image/png;base64,'+qrCodeBase64

    console.log('imgQrCodePix.scr: '+imgQrCodePix.scr)

    txtExpiracaoPix.textContent = 'Expira em '+funcoes_data.converterdata(dateOfExpiration)

    txtPix.value = qrCode

    gerarPedido()

    return validacao
    
    
    }

async function verificarPagamento(){

    await  fetch('https://api.mercadopago.com/v1/payments/'+idPix, {
    
        method: 'GET',
    
        headers: {
        'Authorization': 'Bearer APP_USR-6781688030380061-100709-f2faf782b96a6db5775505e795e121fe-501341309',
        
        },

        
    })
        .then(response => response.json())
        .then(data => { objPix = data; console.log(objPix)})
        .catch(error => {console.error('Error creating payment: ', error);
        funcoes_loading.criarAlerta02('Falha em recuperar o pix','Favor falar com o suporte','red','alert');
        validacao = false
    });


    statusPix = objPix.status;
    console.log(statusPix); 

    if(statusPix=='approved'){

      // Construa a URL com os parâmetros
      const urlBase = 'https://jvdesigner.github.io/ecommerce/html/envio.html';
      const urlCompleta = `${urlBase}?codigo=${idPix}`;

      window.location.href = urlCompleta;




    }
    else{console.log('status: '+statusPix)}
    
    
    }

async function gerarPedido(){

  const vcliente = JSON.parse(localStorage.getItem('informacoesCliente'))

  const vitens = gerarItens()

  const vdoc = doc(db, "pedidos", ''+idPix)

  try{ await setDoc( vdoc , { cliente:vcliente,itens:vitens,envio:"Aguardando envio"} ) } catch(error){console.log(error.message)}

   

}


        
// =================================== LOCALSTORAGE =============================================== //

function informacoesClienteLocal(){

  const objCliente = 
  {
    nome:document.getElementById('txtNomeCliente').value,
    sobrenome:document.getElementById('txtSobrenomeCliente').value,
    email:document.getElementById('txtEmailCliente').value,
    ddd:document.getElementById('txtdddCliente').value,
    celular:document.getElementById('txtCelularCliente').value,

    cidade:document.getElementById('txtCidadeCliente').value,
    estado:document.getElementById('txtEstadoCliente').value,
    cep:document.getElementById('txtCEPCliente').value,
    bairro:document.getElementById('txtBairroCliente').value,
    rua:document.getElementById('txtRuaCliente').value,
    numero:document.getElementById('txtNumeroCliente').value,
    complemento:document.getElementById('txtComplementoCliente').value


  }

  localStorage.setItem('informacoesCliente',JSON.stringify(objCliente))


}

function retornarinformacoesClienteLocal(){

  const objCliente = JSON.parse(localStorage.getItem('informacoesCliente'))

  if (objCliente === null || Object.keys(objCliente).length === 0) {return}

   
  document.getElementById('txtNomeCliente').value=objCliente.nome
  document.getElementById('txtSobrenomeCliente').value =objCliente.sobrenome
  document.getElementById('txtEmailCliente').value=objCliente.email
  document.getElementById('txtdddCliente').value =objCliente.ddd
  document.getElementById('txtCelularCliente').value=objCliente.celular
  document.getElementById('txtCidadeCliente').value=objCliente.cidade
  document.getElementById('txtEstadoCliente').value=objCliente.estado
  document.getElementById('txtCEPCliente').value=objCliente.cep
  document.getElementById('txtBairroCliente').value=objCliente.bairro
  document.getElementById('txtRuaCliente').value=objCliente.rua
  document.getElementById('txtNumeroCliente').value=objCliente.numero
  document.getElementById('txtComplementoCliente').value=objCliente.complemento


}


// =================================== EXECUTAR =============================================== //

//eventos
mostrarFormSelecionado()
adicionarEvento()
adicionareventoCampoCelular()
atualizarCarrinho()
copiarChavePix()
retornarinformacoesClienteLocal()

