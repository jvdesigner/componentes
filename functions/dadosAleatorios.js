

// =================================== FUNCOES =============================================== //


// Gerar lista url de imagem do unsplash

// parametros >> palavra chave de busca (query) | quantidade de imagens (qnt) 
// retorno >> lista de urls de imagens

export async function gerarImagensUnsplash(query,qnt){

  const accessKey = 'KZXsNk7aIHTNmmHMIrRddV1_UQK2pwapVQJi4jMoaMQ'

  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&query=${query}&count=${qnt}`;
  let urls = [];

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (Array.isArray(data)) {
      // Verifique se a resposta é uma matriz de fotos
      urls = data.map(photo => photo.urls.small);
    } else {
      // Caso contrário, a resposta única é tratada como uma única URL
      urls = [data.urls.thumb];
    }

    return urls;
  } catch (error) {
    console.log('Erro ao buscar imagens:'+error.message);
    return ['https://i.ibb.co/bNsRrrb/Image.png'];
  }
}

// Gerar numero inteiro aleatorio
// Paramentros >> numero minimo (min) e maximo (max)
// Retorno >> numero inteiro

export function getRandomInt(min, max) {
  // Use Math.floor() para arredondar para baixo e Math.random() para gerar um número decimal aleatório entre 0 e 1.
  // Multiplique pelo intervalo desejado (max - min + 1) e adicione o mínimo (min) para obter um número inteiro aleatório no intervalo.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gerar numero decimal aleatorio
// Paramentros >> numero minimo (min) e maximo (max)
// Retorno >> numero decimal

export function getRandomDecimal(min, max) {
  // Gere um número decimal aleatório entre min e max.
  const randomDecimal = Math.random() * (max - min) + min;
  
  // Use toFixed(2) para arredondar para 2 casas decimais.
  return parseFloat(randomDecimal.toFixed(2));
}

// Gerar ID
// Paramentros >> quantidade de caracteres (length)
// Retorno >> id

export function generateRandomUID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uid = '';

  for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  uid += characters.charAt(randomIndex);
  }

  return uid;
}


// funcao para remover filhos do componente
// parametro >> elemento pai
export function removerFilhosComponente(elementoPai){

  while (elementoPai.firstChild) {
    elementoPai.removeChild(elementoPai.firstChild);
  }

}

// Função para retornar uma categoria aleatória
// parametro >> lista
// retorno >> item da lista
export function itemAleatorio(lista) {

  // Gerar um índice aleatório dentro do intervalo de 0 ao comprimento da lista de categorias
  const indiceAleatorio = Math.floor(Math.random() * lista.length);

  // Retornar a categoria correspondente ao índice aleatório
  return lista[indiceAleatorio];
}

//Função para gerar data aleatoria
export function gerarDataAleatoriaMinima() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1; // Os meses são baseados em zero, então adicionamos 1.
  const diaAtual = dataAtual.getDate();

  const anoAleatorio = anoAtual + Math.floor(Math.random() * 1); // Gera um ano aleatório nos próximos 10 anos
  const mesAleatorio = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Gera um mês aleatório entre 01 e 12
  const diaAleatorio = String(Math.floor(Math.random() * 31) + 1).padStart(2, '0'); // Gera um dia aleatório entre 01 e 31

  return `${anoAleatorio}/${mesAleatorio}/${diaAleatorio}`;
}


