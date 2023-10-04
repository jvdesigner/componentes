
// =================================== IMPORTAR FUNCOES =============================================== //

import * as funcoes_firebase from './firebase.js'

import * as funcoes_dadosAleatorios from './dadosAleatorios.js'

import * as funcoes_loading from './loading.js'


// =================================== FUNCOES =============================================== //


// remover filhos do componente
function removerFilhosComponente(elementoPai){

  const elementosFilhos = elementoPai.children;

  
  for (let i = elementosFilhos.length - 1; i >= 0; i--) {
      const elementoFilho = elementosFilhos[i];
      elementoPai.removeChild(elementoFilho);
  }



}

// Função para Cadastrar produto
async function cadastrarProduto(nProdutos){

    //gerar lista de imagens
    let varListaUrlImagem;
    await funcoes_dadosAleatorios.gerarImagensUnsplash('organic foods', nProdutos).then(urls => {varListaUrlImagem = urls});

    for (let i = 0; i < nProdutos; i++) {
  
      // dados do produto
      const objProduto = { 

        imagem            : varListaUrlImagem[i] , 
        nome              : 'Produto '+i ,
        categoria         : 'Categoria '+i, 
        preco             :  funcoes_dadosAleatorios.getRandomDecimal(1.0, 20.0), 
        medida            : 'kg', 
        peso              : funcoes_dadosAleatorios.getRandomInt(1, 5) , 
        classificacao     : 5 , 
        descricao         : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        
      };

      // cadastrar produto
      await funcoes_firebase.adicionarDocumento( funcoes_firebase.colProdutos , objProduto )

    }

    //retorno
    console.log('Produtos cadastrados!!')

}

// funcao para definir inicial e final com base na pagina

function pagInicialFinal(npag){

  const nCards = 8
  const nInicial = ( nCards * npag ) - nCards
  let nFinal = ( nCards * npag ) - 1

  const totalElementos = parseInt(localStorage.getItem('totalProdutos'));

  if( nFinal>totalElementos ){ 

    const diferenca = nFinal-totalElementos

    nFinal = nFinal - diferenca -1


   }

  console.log('pagina: '+npag)
  console.log( 'Inicial: ' + nInicial )
  console.log( 'Final: ' + nFinal )

  return [nInicial,nFinal]

}


// Função para consultar produtos
async function atualizarGaleriaProdutos(npag){

  funcoes_loading.mostrarLoading

  //elemento pai
  const elementoPai = document.getElementById('galeriaProdutos');

  //zerar pai
  removerFilhosComponente(elementoPai);

  //numero da pagina
  const indices = pagInicialFinal(npag)

  // retornar documentos
  const col = await funcoes_firebase.colProdutos
  const documentos = await funcoes_firebase.consultarBase( col , indices[0] , indices[1] )
  
  documentos.forEach((doc) => {

    //dados produto
    let idProduto = doc.id
    let dados = doc.data()
    console.log(idProduto)

    // adicionar elementos da galeria
    const elementoFilho = document.createElement('div');
    elementoFilho.innerHTML=`
    
    <cards-05 
        idProduto=${idProduto}
        srcimagem=${dados.imagem}
        nomeProduto="${dados.nome}"
        pesoProduto=${dados.peso}
        medidaProduto="${dados.medida}"
        precoProduto=${dados.preco}
        numeroEstrelas=${dados.classificacao}
        >
    </cards-05>
    
    
    `;

    elementoPai.appendChild(elementoFilho);
  
  
  });

  funcoes_firebase.totalProdutos().then((result)=>{ localStorage.setItem('totalProdutos', result); })

  //console.log( localStorage.getItem('totalProdutos') )

  funcoes_loading.ocultarLoading

}


// função para apresentar tabs da galeria de produtos
function mostrarTabGaleriaProdutos() {

  //localstorage pag selecionada
  localStorage.setItem('pagselecionadaProdutos','1')

  // elementos
  const componenteTabProdutos = document.getElementById('componenteTabProdutos');
  const objProximapagina = document.getElementById('proximaPagina');
  const objAnteriorpagina = document.getElementById('anteriorPagina');
  const objliPagina = document.querySelectorAll('.liPagina');
  const npag = objliPagina.length;

  // páginas
  const totalElementos = localStorage.getItem('totalProdutos');
  const totalporpag = 8;
  const totalPag = Math.ceil(parseFloat(totalElementos / totalporpag));

  // retornar se estiver vazio
  if (totalElementos==0) { componenteTabProdutos.style.display='none';return }

  console.log('Total produtos ' + totalElementos);
  console.log('Total por pagina ' + totalporpag);
  console.log('Total paginas ' + totalPag);
  console.log('Total paginas obj ' + npag);

  // mostrar setas
  if( totalPag > 4 ){

    objProximapagina.classList.remove('hidden')
    objAnteriorpagina.classList.remove('hidden')

    objProximapagina.classList.add('inline-flex')
    objAnteriorpagina.classList.add('inline-flex')

  }

  // apresentar as tabs
  for (let i = 0; i < npag; i++) {

    if(i==npag){break}

    const obj = objliPagina[i];

    obj.classList.add('block');

    obj.classList.remove('hidden');

    obj.textContent = i + 1;

    const nAtualizado = parseInt(obj.textContent);

    obj.addEventListener('click',()=>{ atualizarGaleriaProdutos(parseInt(obj.textContent)) })

    obj.addEventListener('click',()=>{ 

      altercorTab(objliPagina,obj)
      
     })

    //console.log(i);

    //console.log(obj)
  }

  // aumentar paginas
  objProximapagina.addEventListener('click',()=>{

    //alterar cor tab
    altercorTab2(objliPagina)

    const ultimoFilhoTexto = objliPagina[npag-1]

    for (let i = 0; i < totalPag; i++) {

      let limite = parseInt( ultimoFilhoTexto.textContent)

      if(limite==totalPag || i == totalPag){break}

  
      const obj = objliPagina[i];

      if(!obj){break}

      const nAtualizado = parseInt(obj.textContent) + 1
  
      obj.textContent = nAtualizado;

  
    }


  })

  // Diminuir páginas
  objAnteriorpagina.addEventListener('click', () => {

    //alterar cor tab
    altercorTab2(objliPagina)

    objliPagina.forEach((obj)=>{

      

      if( parseInt(obj.textContent)>1 && objliPagina[3].textContent !== '4' ){

        obj.textContent =  parseInt(obj.textContent) - 1

      }


    })

 

});



}

// função para alterar a cor da tab selecionada
function altercorTab(objliPagina,obj){

  const nLi = obj.textContent

  localStorage.setItem('pagselecionadaProdutos',nLi)


      objliPagina.forEach((li) => {
        if(li.textContent!==nLi)
        {li.classList.remove('bg-teal-600');
        li.classList.add('bg-white');
        li.classList.remove('text-white')
        li.classList.add('text-gray-900')}
        else{
          li.classList.remove('bg-white');
          li.classList.add('bg-teal-600')
          li.classList.remove('text-gray-900')
          li.classList.add('text-white')
        }
      })

}

// função para continuar a cor da tab selecionada
function altercorTab2(objliPagina){

  const nLi = localStorage.getItem('pagselecionadaProdutos')


      objliPagina.forEach((li) => {
        if(li.textContent!==nLi)
        {li.classList.remove('bg-teal-600');
        li.classList.add('bg-white');
        li.classList.remove('text-white')
        li.classList.add('text-gray-900')}
        else{
          li.classList.remove('bg-white');
          li.classList.add('bg-teal-600')
          li.classList.remove('text-gray-900')
          li.classList.add('text-white')
        }
      })

}






// =================================== EXECUTAR =============================================== //



//await cadastrarProduto(8)

await atualizarGaleriaProdutos(1)

mostrarTabGaleriaProdutos()









