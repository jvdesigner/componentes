


// ===================================== FUNCOES ============================================= //


// Apresentacao da chave e valor dos dados armazenados no localstorage
// Printa no console todas as chaves que estao armazenadas no localstorage e seus valores

function MostrarDadosLocalstorage(){

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`Chave: ${key}, Valor: ${value}`);
    }
  
  }
  
  
  // Limpar todos os dados do localstorage
  
  localStorage.clear(); 
  