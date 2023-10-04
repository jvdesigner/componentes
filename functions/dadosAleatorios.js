

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
    console.error('Erro ao buscar imagens:', error);
    return [];
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



// Retornar valor aleatorio da lista
// Paramentros >> lista
// Retorno >> valor
export function listaAleatorio(lista) {

  const indiceAleatorio = Math.floor(Math.random() * lista.length);

  return lista[indiceAleatorio];
}

