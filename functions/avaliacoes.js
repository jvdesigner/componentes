

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

import * as funcoes_loading from './loading.js'




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
    console.log(navaliacoes + ' Avaliacoes cadastrados!!')

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

    querySnapshot.forEach((doc)=>{ objClassificacaoProduto.push(doc.data())})

    document.getElementById('totalAvaliacoes').textContent = 'Avaliações ('+ totalAvaliacoes + ')'

    const objpercentual = calcularPercentuaisDeClassificacao(objClassificacaoProduto)

    let i = 5;
    //percorrer grafico
    compPercentualEstrelas.forEach((element)=>{
        const porcentagem = objpercentual[i]
        element.querySelector('.graficobarra').style.width = porcentagem +"%"
        element.querySelector('span').textContent = porcentagem +"%"
        i--
    })

    console.log(objClassificacaoProduto)
    console.log(objpercentual)
    console.log('total documentos: '+ totalAvaliacoes)
    console.log(idProduto)


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
    }
  
    return percentuais;
  }

  


// =================================== EXECUTAR =============================================== //

// cadastrar avaliacoes
//await cadastraravaliacoes(2)

// calcular porcentagem
//calculcarPorcentagemClassificacao()

//zerarComentariosProdutos()