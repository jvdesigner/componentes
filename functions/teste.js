
// =================================== IMPORTAR FUNCOES =============================================== //

import * as funcoes_firebase from './firebase.js'

// =================================== FUNCOES =============================================== //


// Gerar lista url de imagem do unsplash

// parametros >> palavra chave de busca (query) | quantidade de imagens (qnt) 
// retorno >> lista de urls de imagens

async function gerarImagensUnsplash(query,qnt){

    const accessKey = 'KZXsNk7aIHTNmmHMIrRddV1_UQK2pwapVQJi4jMoaMQ'
  
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&query=${query}&count=${qnt}`;
    let urls = [];
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
  
      if (Array.isArray(data)) {
        // Verifique se a resposta é uma matriz de fotos
        urls = data.map(photo => photo.urls.full);
      } else {
        // Caso contrário, a resposta única é tratada como uma única URL
        urls = [data.urls.thumb];
      }
  
      return urls;
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
      return [];
    }
}
  
// Gerar numero inteiro aleatorio
// Paramentros >> numero minimo (min) e maximo (max)
// Retorno >> numero inteiro

function getRandomInt(min, max) {
    // Use Math.floor() para arredondar para baixo e Math.random() para gerar um número decimal aleatório entre 0 e 1.
    // Multiplique pelo intervalo desejado (max - min + 1) e adicione o mínimo (min) para obter um número inteiro aleatório no intervalo.
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// Gerar numero decimal aleatorio
// Paramentros >> numero minimo (min) e maximo (max)
// Retorno >> numero decimal
  
  function getRandomDecimal(min, max) {
    // Gere um número decimal aleatório entre min e max.
    const randomDecimal = Math.random() * (max - min) + min;
    
    // Use toFixed(2) para arredondar para 2 casas decimais.
    return parseFloat(randomDecimal.toFixed(2));
  }

// Gerar ID
// Paramentros >> quantidade de caracteres (length)
// Retorno >> id

function generateRandomUID(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';

    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uid += characters.charAt(randomIndex);
    }

    return uid;
}

// Gerar cards galeria de produtos com dados aleatórios
// Parametro >> quantidade de cards da galeria
async function gerarCardsProdutos(nCards){

    let varIdProduto;
    let varImgProduto;
    let varListaUrlImagem;
    let varnomeProduto;
    let varPesoProduto;
    let varMedidaProduto;
    let varPrecoProduto;
    let varEstrelaProduto;
    let vardescricaoProduto;
    let varCategoriaProduto;

    // remover elementos da galeria

    const elementoPai = document.getElementById('galeriaProdutos');

    const elementosFilhos = elementoPai.children;

    
    for (let i = elementosFilhos.length - 1; i >= 0; i--) {
        const elementoFilho = elementosFilhos[i];
        elementoPai.removeChild(elementoFilho);
    }

    // Gerar lista de imagens

    await gerarImagensUnsplash('organic foods', nCards).then(urls => {varListaUrlImagem = urls});

    for (let i = 0; i < nCards; i++) {

        varIdProduto = generateRandomUID(16) ;

        varImgProduto = varListaUrlImagem[i] ;

        varnomeProduto = 'Produto ' + i;

        varPesoProduto = getRandomInt(1, 10);

        varMedidaProduto = 'kg';

        varPrecoProduto = getRandomDecimal(1.0, 20.0);

        varEstrelaProduto = getRandomInt(1, 5);

        varCategoriaProduto = 'categoria x';

        vardescricaoProduto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.';

        // adicionar elementos da galeria

        const elementoFilho = document.createElement('div');

        elementoFilho.innerHTML=`
        
        <cards-05 
            idProduto=${varIdProduto}
            srcimagem=${varImgProduto}
            nomeProduto=${varnomeProduto}
            pesoProduto=${varPesoProduto}
            medidaProduto="kg"
            precoProduto=${varPrecoProduto}
            numeroEstrelas=${varEstrelaProduto}
            >
        </cards-05>
        
        
        `;

        elementoPai.appendChild(elementoFilho);

        
        

    }

    



}

//window.addEventListener('load',()=>{ gerarCardsProdutos(8) })

// Função para Cadastrar produto
async function cadastrarProduto(nProdutos){

    //gerar lista de imagens
    let varListaUrlImagem;
    await gerarImagensUnsplash('organic foods', nProdutos).then(urls => {varListaUrlImagem = urls});

    for (let i = 0; i < nProdutos; i++) {
  
      // dados do produto
      const objProduto = { 

        imagem            : varListaUrlImagem[i] , 
        nome              : 'Produto'+i ,
        categoria         : 'Categoria'+i, 
        preco             :  getRandomDecimal(1.0, 20.0), 
        medida            : 'kg', 
        peso              : getRandomInt(1, 5) , 
        classificacao     : 5 , 
        descricao         : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,quia soluta quisquam voluptatem nemo.Lorem ipsum dolor sit amet consectetur adipisicing elit.' 
        
      };

      // cadastrar produto
      await funcoes_firebase.adicionarDocumento( funcoes_firebase.colProdutos , objProduto )

    }

    //retorno
    console.log('Produtos cadastrados!!')

}

//cadastrarProduto(10)

// Função para consultar produtos
async function atualizarGaleriaProdutos(){

  //elemento pai
  const elementoPai = document.getElementById('galeriaProdutos');

  //zerar pai
  removerFilhosComponente(elementoPai);

  // retornar documentos
  const q = await funcoes_firebase.queryProduto01
  const documentos = await funcoes_firebase.consultarBase( q )
  
  documentos.forEach((doc) => {

    //dados produto
    let idProduto = doc.id
    let dados = doc.data()

    // adicionar elementos da galeria
    const elementoFilho = document.createElement('div');
    elementoFilho.innerHTML=`
    
    <cards-05 
        idProduto=${idProduto}
        srcimagem=${dados.imagem}
        nomeProduto=${dados.nome}
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

}

//atualizarGaleriaProdutos()

// remover filhos do componente
function removerFilhosComponente(elementoPai){

  const elementosFilhos = elementoPai.children;

  
  for (let i = elementosFilhos.length - 1; i >= 0; i--) {
      const elementoFilho = elementosFilhos[i];
      elementoPai.removeChild(elementoFilho);
  }



}

// controlar paginacao da galeria de produtos
function alterarTabGaleriaProdutos(){

  const totalElementos = localStorage.getItem('totalProdutos')
  const totalporpag = 8
  const totalPag = parseInt(totalElementos/totalporpag)

  if(!totalElementos){return}

  console.log('Total produtos' + totalElementos)
  console.log('Total por pagina' + totalporpag)
  console.log('Total paginas' + totalPag)


}

//alterarTabGaleriaProdutos()





