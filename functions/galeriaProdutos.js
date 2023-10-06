

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
const app = initializeApp(firebaseConfig2);

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
const categorias2 = ["Fruits", "Vegetables", "Vegetables", "cheese"];

// medida de produtos
const medidas = ["kg","L","unid","g"]

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
let totalCards
if (window.innerWidth < 768) {
  totalCards = 9
} else {
  totalCards = 8
}


//total de produtos
let totalProdutos 

// pagina selecionada
localStorage.setItem('paginaGaleriaProdutos',1)
let nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))

//componente categoria
const compCategoriaProdutos = document.getElementById('compCategoriaProdutos')


//componente galeria
const galeriaProdutos = document.getElementById('galeriaProdutos')

//componente pesquisa
const formsearchproduto = document.getElementById('formsearchproduto')
const campoBusca = formsearchproduto.querySelector('input')
const btnBuscarProduto = document.getElementById('btnBuscarProduto')


// =================================== FUNCOES =============================================== //


// Função para Cadastrar produto
// Parametro >> numero de produtos
async function cadastrarProduto(nProdutos){

    //gerar lista de imagens
    let varListaUrlImagem;
    

    // criar objeto de produtos   
    for (let i = 0; i < nProdutos; i++) {

      
      const vCategoria = funcoes_dadosAleatorios.itemAleatorio(categorias)
      const vCategoria2 = categorias2[categorias.indexOf(vCategoria)]


      //pegar foto
      await funcoes_dadosAleatorios.gerarImagensUnsplash(vCategoria2, 1).then(urls => {varListaUrlImagem = urls});
  
      // dados do produto
      const objProduto = { 

        imagem            : varListaUrlImagem[0] , 
        nome              : vCategoria + ' ' + i ,
        categoria         :  vCategoria,
        preco             :  funcoes_dadosAleatorios.getRandomDecimal(1.0, 20.0), 
        medida            : funcoes_dadosAleatorios.itemAleatorio(medidas),
        peso              : funcoes_dadosAleatorios.getRandomInt(1, 10) , 
        classificacao     : 0 , //funcoes_dadosAleatorios.getRandomInt(1, 5)
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

  //zerar galeria
  funcoes_dadosAleatorios.removerFilhosComponente(galeriaProdutos)

  //total de produtos
  await totalDocumentos(q).then((result)=>{ 
    totalProdutos = result;
  //  console.log('Total produtos: '+result)  
  })

  //verificar se existem produtos cadastrados
  if( totalProdutos === 0 || !totalProdutos ){
    
    const elementoGaleriaVazia = document.createElement('div')
    
    elementoGaleriaVazia.innerHTML=`  
    
    <div id="compGaleriaVazia" class="absolute translate-y-40 h-full w-full flex flex-col items-center justify-center  text-teal-600 text-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>Galeria vazia</div>
    
    `

    galeriaProdutos.appendChild(elementoGaleriaVazia)
  
    console.log('galeria vazia')
    //ocultar filtro de categoria e paginacao e pesquisa
    compCategoriaProdutos.classList.remove('flex');
    compCategoriaProdutos.classList.add('hidden');
    componenteTabProdutos.classList.remove('flex');
    componenteTabProdutos.classList.add('hidden');

    return
  }

  //mostrar carregando
  funcoes_loading.mostrarLoading()

  //calcular indices de busca
  nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))
  const indiceInicial = ( totalCards * nSelecionado) - totalCards
  const indiceFinal = ( totalCards * nSelecionado) - 1

  //console.log('indiceInicial: '+indiceInicial)
  //console.log('indiceFinal: '+indiceFinal)

  //pegar o bloco na base de dados
  const querySnapshot = await getDocs(q);
  const documentos = await querySnapshot.docs.slice(indiceInicial, indiceFinal+1); 

  //percorrer documentos
  documentos.forEach((doc)=>{

    const idProduto = doc.id
    const dadosProduto = doc.data()

    //console.log(doc.id)

    const novoElemento = document.createElement('div');

    novoElemento.innerHTML=`

    <cards-05
      idProduto="${idProduto}"
      nomeProduto="${dadosProduto.nome}"
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

  //mostrar filtro de categoria e paginacao e pesquisa
  compCategoriaProdutos.classList.remove('hidden');
  compCategoriaProdutos.classList.add('flex');
  componenteTabProdutos.classList.remove('hidden');
  componenteTabProdutos.classList.add('flex');
  formsearchproduto.classList.remove('hidden');
  formsearchproduto.classList.add('flex');
  

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
  //console.log('numeroTabs: '+numeroTabs)
  //console.log('paginasTotais: '+paginasTotais)

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

// =================================== BUSCA =============================================== //

// funcao para adicionar evento de busca
function adicionarEventoBusca(){

  campoBusca.value = ''

  btnBuscarProduto.addEventListener('click',()=>{

    const txtBusca = campoBusca.value

    if(txtBusca===' '||txtBusca===''||!txtBusca){;return}

    const txtMaiuscula = txtBusca.charAt(0).toUpperCase() + txtBusca.slice(1)

    q = query(col, where("nome", ">=",txtMaiuscula), where("nome", "<", txtMaiuscula + "z"));

      //zerar pagina
      localStorage.setItem('paginaGaleriaProdutos',1)
      nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))

    consultarProdutos()

  })

  campoBusca.addEventListener('input',()=>{

    if(campoBusca.value===' '||campoBusca.value===''||!campoBusca.value){

      q=query(col,orderBy('nome'));

      //zerar pagina
      localStorage.setItem('paginaGaleriaProdutos',1)
      nSelecionado = parseInt(localStorage.getItem('paginaGaleriaProdutos'||1))

    consultarProdutos()



    }

    

  })

}


// =================================== EXECUTAR =============================================== //



// cadastrar produtos
//await cadastrarProduto(20)


//eventos
colocarEventosPaginacao()
adcionarEventoCategorias()
adicionarEventoBusca()

// consultar base
let q=query(col,orderBy('nome'));
consultarProdutos()

//alerta
//funcoes_loading.criarAlerta02('Atenção','Falha em atualizar a galeria','red')






















