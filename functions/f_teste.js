

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

