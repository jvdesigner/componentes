

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
          startAfter   ,
          startAt      ,
          endAt        ,
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
const app = initializeApp(firebaseConfig);

// variavel banco
const db = getFirestore(app);

// variavel colecao
const col = collection(db, "produto")



// =================================== IMPORTAR FUNCOES =============================================== //



import * as funcoes_dadosAleatorios from './dadosAleatorios.js'



// =================================== VARIAVEIS =============================================== //

//categoria de produtos
const categorias = ["Frutas", "Legumes", "Vegetais", "Laticínios"];

// medida de produtos
const medidas = ["kg","L","unid","g","ml"]

//componenete paginacao
const componenteTabProdutos = document.getElementById('componenteTabProdutos')

// objetos de  paginacao >> 4 no total
const liPagina = componenteTabProdutos.querySelectorAll('.liPagina')

// obj pagina anterior
const anteriorPagina = componenteTabProdutos.querySelector('#anteriorPagina')

// obj proxima pagina
const proximaPagina = document.querySelector('#proximaPagina')

// numero de tabs
const numeroTabs = liPagina.length

//total de paginas
let paginasTotais = 10

// pagina selecionada
let nSelecionado = 1


// =================================== FUNCOES =============================================== //


// Função para Cadastrar produto
// Parametro >> numero de produtos
async function cadastrarProduto(nProdutos){

    //gerar lista de imagens
    let varListaUrlImagem;
    await funcoes_dadosAleatorios.gerarImagensUnsplash('organic foods', nProdutos).then(urls => {varListaUrlImagem = urls});

    // criar objeto de produtos   
    for (let i = 0; i < nProdutos; i++) {
  
      // dados do produto
      const objProduto = { 

        imagem            : varListaUrlImagem[i] , 
        nome              : 'Produto ' + i ,
        categoria         :  funcoes_dadosAleatorios.itemAleatorio(categorias),
        preco             :  funcoes_dadosAleatorios.getRandomDecimal(1.0, 20.0), 
        medida            : funcoes_dadosAleatorios.itemAleatorio(medidas),
        peso              : funcoes_dadosAleatorios.getRandomInt(1, 5) , 
        classificacao     : 5 , 
        descricao         : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        
      };

      //cadastrar produto
      try{ await addDoc( col , objProduto )} catch(error){console.log(error.message);break}

    }

    //retorno
    console.log(nProdutos + ' Produtos cadastrados!!')

}


// funcao para retornar total de documentos
// parametros >> colecao
// retorno >> total
async function totalDocumentos(colecao){
    
  const querySnapshot = await getDocs(colecao);

  return querySnapshot.size;

}


// =================================== PAGINACAO =============================================== //

// funcao para controlar cor da tab de paginacao selecionado
function controlarNumercaoPaginacao( nSelecionado ){

  
  //remover cor dos componentes e colocar o selecionado

  liPagina.forEach((element) => {

      const txtnumeracao = parseInt(element.textContent.trim())

      if( txtnumeracao === nSelecionado ){ 

          element.classList.remove('bg-white')
          element.classList.remove('text-gray-900')
          element.classList.add('bg-teal-600')
          element.classList.add('text-white')
       }
       else{
          element.classList.remove('text-white')
          element.classList.add('bg-white')
          element.classList.add('text-gray-900')
       }
      
  });



}

// funcao para colocar evento nos componentes da paginacao
function colocarEventosPaginacao(){

  //adicionar evento nas tabs
  liPagina.forEach((element) => {

      element.addEventListener('click',()=>{
          
          const txtnumeracao = parseInt(element.textContent.trim())

          controlarNumercaoPaginacao( txtnumeracao )

      })
      
  });

  // evento na proxima pagina
  proximaPagina.addEventListener('click',()=>{ 
    adicionarPaginacao();
    
  })

  // evento na pagina anterior
  proximaPagina.addEventListener('click',()=>{ 
    subtrairPaginacao();
  })



}

//funcao para adicionar paginacao
function adicionarPaginacao(){
  

  const ultimoFilho = liPagina[numeroTabs - 1];
  const limite = parseInt( ultimoFilho.textContent.trim() )

  liPagina.forEach( (element) => {

    const numeracao = parseInt(element.textContent)
    
    if( limite <= paginasTotais){element.textContent=numeracao+1}

  });


}

//funcao para subtrair paginacao
function subtrairPaginacao(){

  let txtnumeracao

  liPagina.forEach((element) => {

    txtnumeracao = parseInt(element.textContent.trim())

    if( txtnumeracao === 1){return}

    element.textContent = txtnumeracao - 1

    
  });


}


// =================================== EXECUTAR =============================================== //

// cadastrar produtos
//await cadastrarProduto(2)

// Retornar total de produtos
//totalDocumentos(col).then((result)=>{ console.log( 'Total de Produtos: '+ result) })


// cor na paginacao
controlarNumercaoPaginacao( nSelecionado )

//eventos
colocarEventosPaginacao()




















