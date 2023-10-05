

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

import * as funcoes_loading from './loading.js'



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
const anteriorPagina = document.querySelector('#anteriorPagina')

// obj proxima pagina
const proximaPagina = document.querySelector('#proximaPagina')

// numero de tabs
const numeroTabs = liPagina.length

//total de paginas
let paginasTotais

//total de cards na galeria
let totalCards = 8

//total de produtos
let totalProdutos 

// pagina selecionada
localStorage.setItem('paginaGaleriaProdutos',1)
let nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))

//componente categoria
const compCategoriaProdutos = document.getElementById('compCategoriaProdutos')

//componente galeria vazia
const constcompGaleriaVazia = document.getElementById('compGaleriaVazia')

//componente galeria
const galeriaProdutos = document.getElementById('galeriaProdutos')


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

// funcao para consultar produtos
async function consultarProdutos(){

  //total de produtos
  await totalDocumentos(q).then((result)=>{ totalProdutos = result;console.log('Total produtos: '+result)  })

  //verificar se existem produtos cadastrados
  if( totalProdutos === 0 || !totalProdutos ){
    constcompGaleriaVazia.classList.remove('hidden');
    constcompGaleriaVazia.classList.add('flex');
    return
  }

  //mostrar carregando
  funcoes_loading.mostrarLoading()

  //zerar galeria
  funcoes_dadosAleatorios.removerFilhosComponente(galeriaProdutos)

  //calcular indices de busca
  nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))
  const indiceInicial = ( totalCards * nSelecionado) - totalCards
  const indiceFinal = ( totalCards * nSelecionado) - 1

  console.log('indiceInicial: '+indiceInicial)
  console.log('indiceFinal: '+indiceFinal)

  //pegar o bloco na base de dados
  const querySnapshot = await getDocs(q);
  const documentos = await querySnapshot.docs.slice(indiceInicial, indiceFinal+1); 

  //percorrer documentos
  documentos.forEach((doc)=>{

    const idProduto = doc.id
    const dadosProduto = doc.data()

    console.log(doc.id)

    const novoElemento = document.createElement('div');

    novoElemento.innerHTML=`

    <cards-05
      idProduto="${idProduto}"
      srcimagem="${dadosProduto.imagem}"
      precoProduto=${dadosProduto.preco}
      medidaProduto="${dadosProduto.medida}"
      pesoProduto=${dadosProduto.peso}
      numeroEstrelas=${dadosProduto.classificacao}
      CategoriaProduto"${dadosProduto.categoria}"
      descricaoProduto"${dadosProduto.descricao}"
    ></cards-05>
    
    `

    galeriaProdutos.appendChild(novoElemento);


  })

  //mostrar filtro de categoria e paginacao
  compCategoriaProdutos.classList.remove('hidden');
  compCategoriaProdutos.classList.add('flex');
  componenteTabProdutos.classList.remove('hidden');
  componenteTabProdutos.classList.add('flex');

  //calcular total de paginas
  paginasTotais = Math.ceil( totalProdutos / totalCards )

  //editar paginas
  let i=1;
  liPagina.forEach((element)=>{  

    if( i > paginasTotais ){ element.classList.remove('flex');element.classList.add('hidden') }
    else{element.classList.remove('hidden');element.classList.add('flex','items-center','justify-center');
    if( nSelecionado === 1 ) {element.textContent = i;}}

    i++


  });

  //editar controle paginacao
  if( paginasTotais <= numeroTabs ){ 
    anteriorPagina.classList.remove('flex') 
    proximaPagina.classList.remove('flex')
    anteriorPagina.classList.add('hidden') 
    proximaPagina.classList.add('hidden')
  }
  else{
    anteriorPagina.classList.remove('hidden') 
    proximaPagina.classList.remove('hidden')
    anteriorPagina.classList.add('flex') 
    proximaPagina.classList.add('flex')
  }
  console.log('numeroTabs: '+numeroTabs)
  console.log('paginasTotais: '+paginasTotais)

  // cor na paginacao
  controlarCorPaginacao()


  //ocultar carregando
  funcoes_loading.ocultarLoading()

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
function controlarCorPaginacao(){

  
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



};

// funcao para colocar evento nos componentes da paginacao
function colocarEventosPaginacao(){

  //adicionar evento nas tabs
  liPagina.forEach((element) => {

      element.addEventListener('click',()=>{
          
          const txtnumeracao = parseInt(element.textContent.trim())

          localStorage.setItem('paginaGaleriaProdutos',txtnumeracao)

          nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))

          controlarCorPaginacao();

          consultarProdutos()

      })
      
  });

  // evento na proxima pagina
  proximaPagina.addEventListener('click',()=>{ 
    adicionarPaginacao();
    controlarCorPaginacao()
    
  })

  // evento na pagina anterior
  anteriorPagina.addEventListener('click',()=>{ 
    subtrairPaginacao();
    controlarCorPaginacao()
  })



}

//funcao para adicionar paginacao
function adicionarPaginacao(){
  

  const ultimoFilho = liPagina[numeroTabs - 1];
  const limite = parseInt( ultimoFilho.textContent.trim() )

  if( limite === paginasTotais){return}

  liPagina.forEach( (element) => {

      element.textContent = parseInt(element.textContent)+1;

  });


}

//funcao para subtrair paginacao
function subtrairPaginacao(){

  const primeiroFilho = liPagina[0];
  const limite = parseInt( primeiroFilho.textContent.trim() )

  if( limite === 1){return}

  liPagina.forEach((element) => {

    element.textContent = parseInt(element.textContent)-1

    
  });


}


// =================================== CATEGORIA =============================================== //

//funcao para adicionar evento nas categorias
function adcionarEventoCategorias(){

  const botoes = compCategoriaProdutos.querySelectorAll('button')

  botoes.forEach((element)=>{
  
        element.addEventListener('click',async ()=>{

          localStorage.setItem('paginaGaleriaProdutos',1)

          const txtCategoria = element.textContent.trim()

          if(txtCategoria=='Todas'){q=query(col,orderBy('nome'))}
          else{q=query(col,where('categoria','==',txtCategoria),orderBy('nome'));}


          consultarProdutos()


      })

})

}


// =================================== EXECUTAR =============================================== //



// cadastrar produtos
//await cadastrarProduto(2)

//eventos
colocarEventosPaginacao()
adcionarEventoCategorias()

// consultar base
let q=query(col);
consultarProdutos()

//alerta
//funcoes_loading.criarAlerta02('Atenção','Falha em atualizar a galeria','red')






















