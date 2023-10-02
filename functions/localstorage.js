


// ===================================== FUNCOES ============================================= //


// Apresentacao da chave e valor dos dados armazenados no localstorage
// Printa no console todas as chaves que estao armazenadas no localstorage e seus valores

export function MostrarDadosLocalstorage(){

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`Chave: ${key}, Valor: ${value}`);
    }
  
  }


// Calcular tamanho de armazenamento do localstorage
// retorna o calculo em bytes, kb e mb

export function getLocalStorageSize() {
  let totalSize = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    // Calcule o tamanho do valor em bytes
    const valueSize = new TextEncoder().encode(value).length;

    // Some o tamanho ao total
    totalSize += valueSize;
  }

  // Converta o tamanho total para kilobytes (KB) ou megabytes (MB), se desejar
  const totalSizeKB = totalSize / 1024; // bytes para KB
  const totalSizeMB = totalSizeKB / 1024; // KB para MB

  // Imprima o tamanho total de armazenamento
  console.log("Tamanho total de armazenamento do localStorage:");
  console.log(`Em bytes: ${totalSize} bytes`);
  console.log(`Em kilobytes: ${totalSizeKB} KB`);
  console.log(`Em megabytes: ${totalSizeMB} MB`);

  // Retorne os valores para uso posterior, se necessário
  return {
    bytes: totalSize,
    kilobytes: totalSizeKB,
    megabytes: totalSizeMB
  };
}

  
// Limpar todos os dados do localstorage

//localStorage.clear(); 
  