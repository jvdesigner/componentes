

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
    const formattedDate = `${months[month]} ${day}, ${year}`;
  
    return formattedDate;
  }
  



  