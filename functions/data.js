

// =================================== FUNCOES =============================================== //

// Funcao para converter data para string
// entrada >> data
// saida >> string

export function formatDate(inputDate) {
    // Converte a data de string para objeto Date
    const date = new Date(inputDate);
  
    // Define arrays com os nomes dos meses e sufixos para os dias
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    // Obtém o dia, mês e ano da data
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

  
    // Formata a data no formato desejado
    const formattedDate = `${day} ${months[month]} de ${year}`;
  
    return formattedDate;
  }

  // funcao que retorna a data atual
export function obterDataAtual() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // +1 porque os meses começam em 0
    const dia = data.getDate().toString().padStart(2, '0');

    return `${ano}/${mes}/${dia}`;
}
  



  