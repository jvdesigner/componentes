



// =================================== IMPORTAR FIREBASE =============================================== //



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import { 
          getFirestore ,
          collection   , 
          addDoc       ,
          getDoc      ,
          query        , 
          where        ,
          limit        ,
          orderBy      ,
          setDoc,doc,
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
const col = collection(db, "pedidos")


// =================================== EVENTOS =============================================== //

//funcao para limpar carrinho para voltar
const linkVoltar = document.getElementById('linkVoltar')
linkVoltar.addEventListener('click',()=>{ localStorage.setItem("carrinho",'{}'); })


// =================================== EXECUTAR =============================================== //

async function atualizarDados(){

    const srcAguardando = 'https://ouch-cdn2.icons8.com/ZANB7SWHgBaK-jQZ8ymEq6rqkN8n4zteScpYYJAMZLU/rs:fit:368:381/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMw/L2MzNzU4Njg0LThk/MzctNDRjMC1hMWYz/LWViZGVkNjliMTYw/Yy5wbmc.png'

    const scrAcaminho = 'https://ouch-cdn2.icons8.com/uoz1gNb-iZHfJiN7Aiq0ELLYUx1gp_SJs5M0JqmxLy4/rs:fit:368:472/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjA0/LzIxYTIxMDkwLTdl/N2ItNDkxYy05YTVk/LTViYWU2ODhkY2Qx/ZC5wbmc.png'

    const srcentregue = 'https://ouch-cdn2.icons8.com/wj0dTJgSWz08TH2Vru4APdGsjbted-Y9YOB6qdXmnBU/rs:fit:368:429/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTA1/L2RhZWRlOTA4LTAx/NTUtNDk4YS04ZWNi/LTczMjIzN2RlM2Ux/Ny5wbmc.png'

    const urlParams = new URLSearchParams(window.location.search);

    // Recuperando valores dos parâmetros
    const codigo = urlParams.get('codigo'); // 'João'
    
    const docRef = doc(db, "pedidos", codigo);
    const docSnap = await getDoc(docRef); 
    const dados = docSnap.data() 
    const statusEnvio = dados.envio

    const imagemStatus = document.getElementById('imagemEnvio')
    const codigoPedido = document.getElementById('codigoPedido')
    const txtstatusEnvio = document.getElementById('txtstatusEnvio')

    switch (statusEnvio) {
        case 'Aguardando envio':
          
        imagemStatus.src=srcAguardando
        codigoPedido.textContent=codigo
        txtstatusEnvio.textContent=statusEnvio
        txtstatusEnvio.classList.add('text-yellow-500')
        break;

        case 'Á caminho':
          
        imagemStatus.src=scrAcaminho
        codigoPedido.textContent=codigo
        txtstatusEnvio.textContent=statusEnvio
        txtstatusEnvio.classList.add('text-blue-500')
        break;

        case 'Entregue':
          
        imagemStatus.src=srcentregue
        codigoPedido.textContent=codigo
        txtstatusEnvio.textContent=statusEnvio
        txtstatusEnvio.classList.add('text-green-500')
        break;
      
        
        default:
          console.log('O valor não corresponde a nenhum caso conhecido: '+statusEnvio);
          break;
      }
    



}

atualizarDados()