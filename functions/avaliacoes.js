

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

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
          deleteDoc    ,
          updateDoc    ,
          doc
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
const col = collection(db, "avaliacoes")



// =================================== IMPORTAR FUNCOES =============================================== //



import * as funcoes_dadosAleatorios from './dadosAleatorios.js'

import * as funcoes_produtos from './produtos.js'

import * as funcoes_loading from './loading.js'

import * as funcoes_formulario from './formulario.js'

import * as funcoes_data from './data.js'




// =================================== FUNCOES =============================================== //


// Função para Cadastrar avaliacoes
// Parametro >> numero de avaliacoes
async function cadastraravaliacoes(navaliacoes){

    //retornar lista de id de produtos
    const listaidProdutos =  await retornarIdProdutos(navaliacoes)

    

    // criar objeto de avaliacoes   
    for (let i = 0; i < navaliacoes; i++) {
        
      // dados do produto
      const objavaliacao = { 

        idProduto         :listaidProdutos[i],
        data               : funcoes_dadosAleatorios.gerarDataAleatoriaMinima() , 
        classificacao     : funcoes_dadosAleatorios.getRandomInt(1, 5) , 
        comentario         : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        
      };

      //cadastrar produto
      try{ await addDoc( col , objavaliacao )} catch(error){console.log(error.message);break}

    }

    //retorno
    //console.log(navaliacoes + ' Avaliacoes cadastrados!!')

}

// funcao para retornar lista de id de produtos
// parametro >> numero de produtos
// retorno >> lista de ids
async function retornarIdProdutos(navaliacoes) {


    let q = query(collection(db, "produto"),orderBy('nome'), limit(navaliacoes));
  
    let listaIdProdutos = [];
  
    const querySnapshot = await getDocs(q);
  
    // Percorrer documentos.
    querySnapshot.forEach((doc) => {
      listaIdProdutos.push(doc.id);
    });
  
    return listaIdProdutos;
  }

// funcao para retornar total de documentos
// parametros >> colecao
// retorno >> total
async function totalDocumentos(colecao){
    
    const querySnapshot = await getDocs(colecao);
  
    return querySnapshot.size;
  
  }

// funcao para calcular porcentagem de classificacao
async function calculcarPorcentagemClassificacao(){

    //funcao para atualizar comentarios
    apresentarAvaliacoes()

    //componente percentual estrela
    const compPercentualEstrelas = document.querySelectorAll('.compPercentualEstrelas')

    //recuperar id do localstorage
    const objproduto = JSON.parse(localStorage.getItem('localobjProduto'))

    // id do prduto
    const idProduto = objproduto['id']

    // retornar query
    let q = query(col, where('idProduto','==',idProduto) );

    // documentos da query
    const querySnapshot = await getDocs(q);

    // total de documentos
    const totalAvaliacoes = querySnapshot.size

    //verificar se tem comentario
    if (totalAvaliacoes===0){

        //percorrer grafico
        compPercentualEstrelas.forEach((element)=>{

            element.querySelector('.graficobarra').style.width ="0%"
            element.querySelector('span').textContent = "0%"

        })
        return
    }


    //iniciar variavel lista de percentuais
    const objClassificacaoProduto = []

    //percorrer avaliacoes e colocar na lista
    querySnapshot.forEach((doc)=>{ objClassificacaoProduto.push(doc.data())})

    // colocar total de avaliações no elemento
    document.getElementById('totalAvaliacoes').textContent = 'Avaliações ('+ totalAvaliacoes + ')'

    // retornar os percentuais
    const objpercentual = calcularPercentuaisDeClassificacao(objClassificacaoProduto)

    calcularMediaDeClassificacao(objClassificacaoProduto,idProduto)

    let i = 5;
    let porcentagem
    //percorrer grafico
    compPercentualEstrelas.forEach((element)=>{
      
      if(!objpercentual[i]){ porcentagem = '0'}else{ porcentagem = objpercentual[i]}
        element.querySelector('.graficobarra').style.width = porcentagem +"%"
        element.querySelector('span').textContent = porcentagem +"%"
        i--
    })

    /*console.log('objClassificacaoProduto: '+objClassificacaoProduto)
    console.log("objpercentual: "+objpercentual)
    console.log('total documentos: '+ totalAvaliacoes)
    console.log('objpercentual: '+idProduto)
    console.log('totalAvaliacoes: '+totalAvaliacoes)*/


}

//funcao para calculcar o percentual das classificacoes
function calcularPercentuaisDeClassificacao(avaliacoes) {
    // Inicializa um objeto para contar as avaliações de cada classificação
    const classificacoesContagem = {};
  
    // Percorre as avaliações e conta quantas têm cada classificação
    for (let i = 0; i < avaliacoes.length; i++) {
      const classificacao = avaliacoes[i].classificacao;
        //console.log(classificacao)
      // Verifica se a classificação já existe no objeto
      if (classificacoesContagem[classificacao]) {
        classificacoesContagem[classificacao]++;
      } else {
        // Se a classificação não existe, inicialize-a com 1
        classificacoesContagem[classificacao] = 1;
      }
    }
  
    // Calcula o total de avaliações
    const totalAvaliacoes = avaliacoes.length;
  
    // Calcula os percentuais de cada classificação
    const percentuais = {};
    for (const classificacao in classificacoesContagem) {
      const contagem = classificacoesContagem[classificacao];
      const percentual = (contagem / totalAvaliacoes) * 100;
      percentuais[classificacao] = percentual.toFixed(0); // Arredonda para duas casas decimais
      //console.log(percentual)
    }
    
    return percentuais;
    
  }

// funcao para calcular a media de classificacao
async function calcularMediaDeClassificacao(avaliacoes,idProduto) {
  let somaClassificacoes = 0; // Variável para somar todas as classificações

  // Percorre as avaliações e soma todas as classificações
  for (let i = 0; i < avaliacoes.length; i++) {
    const classificacao = avaliacoes[i].classificacao;
    somaClassificacoes += classificacao;
  }

  // Calcula o total de avaliações
  const totalAvaliacoes = avaliacoes.length;

  // Calcula a média das classificações
  const mediaClassificacoes = (somaClassificacoes / totalAvaliacoes).toFixed(0);

  //alterar classificacao

  const documento = doc(db, "produto", idProduto);

  // Set the "capital" field of the city 'DC'
  updateDoc(documento, {
    classificacao: mediaClassificacoes
  });

  //console.log('classificacao atualizada')

  document.getElementById('txtclassificaoProduto').textContent = mediaClassificacoes

  // atualiza as estrelas na interface
  funcoes_produtos.preencherEstrelas(mediaClassificacoes,document.getElementById('cardAvaliacao'))
  funcoes_produtos.preencherEstrelas(mediaClassificacoes,document.getElementById('classificaoProduto'))

  
}

// funcao para cadastrar comentario
async function apresentarAvaliacoes(){

  // container avaliacoes
  const paiCardsAvaliacoes = document.getElementById('paiCardsAvaliacoes')

  //zerar container
  funcoes_dadosAleatorios.removerFilhosComponente(paiCardsAvaliacoes)

  //recuperar id do localstorage
  const objproduto = JSON.parse(localStorage.getItem('localobjProduto'))

  // id do prduto
  const idProduto = objproduto['id']

  // retornar query
  let q = query(col, where('idProduto','==',idProduto),orderBy('data','desc') );

  // documentos da query
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc)=>{
    const dados = doc.data()

    const componenteCardComentario = document.createElement('div')
    componenteCardComentario.classList.add('swiper-slide')

    componenteCardComentario.innerHTML=`

    <cards-07
    nEstrelas=${dados.classificacao}
    txtTexto=${dados.comentario}
    txtData=${dados.data}
    ></cards-07>

    `

    paiCardsAvaliacoes.appendChild(componenteCardComentario)

    var swiper7 = new Swiper(".carrossel8", {
  
      slidesPerView: 2.8,

      speed: 2000,

      spaceBetween: 4,

      //grabCursor: true,

      freeMode:true,

      mousewheel: true,

      direction: "vertical",

      breakpoints: {

        300: {
            slidesPerView: 2,
            spaceBetween: 2,
          },

      640: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 2,
      },
      1024: {
        slidesPerView: 2.6,
        spaceBetween: 2,
      },

    },

  
      

    });

  })


}

//funcao para cadastrar uma avaliacao
async function cadastrarAvaliacao(){

  //recuperar id do localstorage
  const objproduto = JSON.parse(localStorage.getItem('localobjProduto'))

  // id do prduto
  const idProduto = objproduto['id']


  // verificar se as estrelas estao preenchidas

  const estrelasFormAvaliacao = document.getElementById('estrelasFormAvaliacao')
  const estrelas = estrelasFormAvaliacao.querySelectorAll('svg')

  let i = 0

  estrelas.forEach((estrela)=>{

    if( estrela.classList.contains('text-teal-600') ){i ++}


  })

  if(i===0){ funcoes_loading.criarAlerta02('Atenção!','Classifique o produto no formulario','red') ; return}
  
  // validar campo de comentario
  // formulario
  const formcomentario = document.getElementById('formcomentario')

  const validacao = funcoes_formulario.validarFormulario(formcomentario)

  if(!validacao){return}

  //cadastrar avaliacao

  const objComentario = {

    idProduto:idProduto,
    data: funcoes_data.obterDataAtual(),
    classificacao: i ,
    comentario:document.getElementById('txtcomentario').value.trim()


  }

  //console.log(objComentario)

  //cadastrar comentario
  try{ 
    await addDoc( col , objComentario ) ;
    funcoes_loading.criarAlerta02('Obrigado!','Recebemos sua classificação!','green');
    zerarFormularioComentario()
  } 
  catch(error){console.log(error.message)}

  
  


}

//  funcao adicionar evento no botao do formulario
function adicionarEventoBotao(){

  //botao formulario
  const btnenviarcomentario = document.getElementById('btnenviarcomentario')

  btnenviarcomentario.addEventListener('click',()=>{ cadastrarAvaliacao() })

}

// zerar formulario comentario
function zerarFormularioComentario(){

  // verificar se as estrelas estao preenchidas

  const estrelasFormAvaliacao = document.getElementById('estrelasFormAvaliacao')
  const estrelas = estrelasFormAvaliacao.querySelectorAll('svg')


  estrelas.forEach((estrela)=>{

    estrela.classList.remove('text-teal-600') 
    estrela.classList.add('text-gray-300') 


  })

  document.getElementById('txtcomentario').value = null



  calculcarPorcentagemClassificacao()

}
  


// =================================== EXECUTAR =============================================== //

// cadastrar avaliacoes
//await cadastraravaliacoes(10)

// calcular porcentagem
calculcarPorcentagemClassificacao()

//adicionar evento
adicionarEventoBotao()