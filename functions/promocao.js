

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



// =================================== VARIAVEIS =============================================== //


//componente galeria
const galeriaProdutos = document.getElementById('cardsprodutoPromocao')


// =================================== FUNCOES =============================================== //


// funcao para consultar produtos
async function consultarProdutosPromocao(){

  //zerar galeria
  funcoes_dadosAleatorios.removerFilhosComponente(galeriaProdutos)

  //pegar o bloco na base de dados
  const querySnapshot = await getDocs(q);

  //percorrer documentos
  querySnapshot.forEach((doc)=>{

    const idProduto = doc.id
    const dadosProduto = doc.data()

    //console.log(doc.id)

    const novoElemento = document.createElement('div');

    novoElemento.classList.add('swiper-slide')

    novoElemento.innerHTML=`

    <cards-02
      idProduto="${idProduto}"
      nomeProduto="${dadosProduto.nome}"
      srcimagem="${dadosProduto.imagem}"
      precoProduto=${dadosProduto.preco}
      medidaProduto="${dadosProduto.medida}"
      pesoProduto=${dadosProduto.peso}
      numeroEstrelas=${dadosProduto.classificacao}
      CategoriaProduto"${dadosProduto.categoria}"
      descricaoProduto"${dadosProduto.descricao}"
    ></cards-02>
    
    `

    galeriaProdutos.appendChild(novoElemento);


  })

 

}



// =================================== EXECUTAR =============================================== //


// consultar base
let q=query(col,limit(5),where('categoria','in',['Frutas','Legumes']));

consultarProdutosPromocao()

























