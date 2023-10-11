
 // ================================== IMPORTAR BIBLIOTECA DE CARROSSEL ================================================ //


 import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'


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
          doc,getDoc,
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

import * as funcoes_loading from './loading.js'

import * as funcoes_dadosAleatorios from './dadosAleatorios.js'

import * as funcoes_produtos from "../functions/produtos.js";


// =================================== FUNCOES =============================================== //



// consultar produtos favoritos
async function consultarFavoritos() {

    funcoes_loading.mostrarLoading()

    // lista favoritos
    const listaFavoritos =  localStorage.getItem('favoritos');
    const listaConvertida = JSON.parse(listaFavoritos);

    //console.log('lista 02 >>'+listaConvertida)
  
    // container favoritos
    const containerFavoritos = document.getElementById('containerFavoritos');
  
    // zerar galeria
    funcoes_dadosAleatorios.removerFilhosComponente(containerFavoritos);
  
    // lista de categorias
    const listaCategorias = ["Frutas", "Legumes", "Vegetais", "Laticínios"];
  
    const produtosPorCategoria = {
      Frutas: [],
      Legumes: [],
      Vegetais: [],
      Laticínios: [],
    };
    let idProdutofavorito

  
    // iterar na lista de favoritos
    for (let j = 0; j < listaConvertida.length; j++) {
       idProdutofavorito = listaConvertida[j];
       //console.log(idProdutofavorito+' '+j)
      const docRef = doc(db, "produto", idProdutofavorito);
      const docSnap = await getDoc(docRef);
      const dados = docSnap.data();

      dados.id = idProdutofavorito;
  
      // adicionar categoria na lista
      // Verifique se a categoria do produto está definida e é uma categoria válida
      if (dados.categoria && produtosPorCategoria[dados.categoria]) {
        // Adicione o produto à categoria apropriada
        produtosPorCategoria[dados.categoria].push(dados);
        
      }
    }
  
    // Percorrer as categorias e seus produtos
    for (const categoria in produtosPorCategoria) {
      //console.log(`Categoria: ${categoria}`);
      const produtosDaCategoria = produtosPorCategoria[categoria];
    // criar bloco base

    let elementoBase

    if(produtosDaCategoria.length>0){
            
             elementoBase = document.createElement('div')

            elementoBase.innerHTML=`

                        <article>

                            <h2 class="mb-4 text-2xl lg:text-4xl tracking-tight font-semibold text-teal-600 ">${categoria}</h2>

                                    
                                <div class="swiper mySwiperx overflow-visible">

                                <div class="swiper-wrapper">



                                </div>

                                </div>

                        </article>
                        
                        
                        `
            
            containerFavoritos.appendChild(elementoBase)
        }

    //--------------------------------

    


  
      // Percorrer os produtos dentro da categoria
      for (let i = 0; i < produtosDaCategoria.length; i++) {
        const produto = produtosDaCategoria[i];


        // criar cards

        const elementoBaseCard = document.createElement('div')
        elementoBaseCard.classList.add('swiper-slide')

        elementoBaseCard.innerHTML=`

                <cards-05
                
                idProduto='${produto.id}'
                nomeProduto="${produto.nome}"
                srcimagem="${produto.imagem}"
                precoProduto=${produto.preco}
                medidaProduto="${produto.medida}"
                pesoProduto=${produto.peso}
                numeroEstrelas=${produto.classificacao}
                CategoriaProduto"${produto.categoria}"
                descricaoProduto"${produto.descricao}"
            ></cards-05>
                    
                    
                    `
        
        elementoBase.querySelector('.swiper-wrapper').appendChild(elementoBaseCard)




        //--------------------------------



        /*console.log(`ID: ${idProdutofavorito}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`classificacao: ${produto.classificacao}`);
        console.log(`imagem: ${produto.imagem}`);
        console.log(`medida: ${produto.medida}`);
        console.log(`peso: ${produto.peso}`);
        console.log(`preco: ${produto.preco}`);
        console.log(`categoria: ${produto.categoria}`);
        console.log(`Descrição: ${produto.descricao}`);*/
        // ... outras propriedades do produto
      }
      
    }

    
    //swiper

    var swiper = new Swiper(".mySwiperx", {

        slidesPerView: 1,

        speed: 10000,

        spaceBetween: 10,

        grabCursor: true,

        freeMode:true,

        //mousewheel: true,
        
        breakpoints: {

            300: {
                slidesPerView: 2.2,
                spaceBetween: 15,
                },

            640: {
            slidesPerView: 2.2,
            spaceBetween: 15,
            },
            768: {
            slidesPerView: 4.4,
            spaceBetween: 15,
            },
            1024: {
            slidesPerView: 4.4,
            spaceBetween: 15,
            },

        },

        });

         redirecionarListaVazia()

        
        


        funcoes_loading.ocultarLoading()


}

//redirecionar
function redirecionarListaVazia(){

    const listaFavoritos = localStorage.getItem('favoritos')
    const listaConvertida = JSON.parse(listaFavoritos);

    if(listaConvertida.length === 0){

        window.location.href='https://jvdesigner.github.io/ecommerce/html/produtos.html'
        
    }


}
  
//funcao para adicionar evento
function adicionarEvento(){

  const colFavoritos = document.querySelectorAll('.clsfavoritos')

colFavoritos.forEach(element => {

  element.addEventListener('click',()=>{

    

      consultarFavoritos()



  })
  
});


}



// =================================== EXECUTAR =============================================== //


await consultarFavoritos()

adicionarEvento()

     
    

