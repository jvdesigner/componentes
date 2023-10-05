

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



// dados do app
/*const firebaseConfig = {
    apiKey: "AIzaSyAb9pv_fUvoeYShp3vZbxbT1ur7C7fJUeU",
    authDomain: "ecommerce-ff132.firebaseapp.com",
    projectId: "ecommerce-ff132",
    storageBucket: "ecommerce-ff132.appspot.com",
    messagingSenderId: "991605978710",
    appId: "1:991605978710:web:5a9cd758caccd7426fedf7"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyB0uycpyo_NkxKSH4AQi_tnjQ2eJ-e7aAE",
    authDomain: "ecommerceduplicado.firebaseapp.com",
    projectId: "ecommerceduplicado",
    storageBucket: "ecommerceduplicado.appspot.com",
    messagingSenderId: "779797115103",
    appId: "1:779797115103:web:9f4e4ce2f48af9e8f8796a"
  }; 

// variavel app
const app = initializeApp(firebaseConfig);

// variavel banco
const db = getFirestore(app);

// colecao
export const colProdutos = collection(db, "produto")


  // =================================== FUNCOES =============================================== //



// funcao para criar um documento
// parametro >> colecao | objeto
// retorno >> documento criado
export async function  adicionarDocumento(col,objeto){

    try{

        const documento = await addDoc(col , objeto );
        
    }

    catch (error) {

        console.error("Erro ao criar o documento:", error);

      }

    
}


//funcao para consultar base
//parametros >> query
//retorno >> documentos
export async function consultarBase(q,indiceInicial, indiceFinal){
  
    const querySnapshot = await getDocs(q);

    const documentos = querySnapshot.docs.slice(indiceInicial, indiceFinal + 1); // +1 para incluir o documento final

    return documentos;
  
}


// funcao para retornar total de produtos
// parametros >> colecao
// retorno >> total
export async function totalProdutos(col){
    
    const querySnapshot = await getDocs(col);

    return querySnapshot.size;
  
}

//funcao para filtrar por categoria de produtos

export async function filtrarCategoriaProdutos(categoria){
    
  return query(colProdutos,orderBy("nome"),where('categoria','==',categoria))

}



//consultas
export const queryProduto01 = query(colProdutos,orderBy("nome"))




