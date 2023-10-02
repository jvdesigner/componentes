

// =================================== COMPONENTES =============================================== //



// == Componente de FQA 01 == //

class FQA01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

 <div class="h-screen flex flex-col  space-y-4 mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">

    <h2 class="font-bold text-3xl max-md:text-2xl text-teal-600 mt-10">Perguntas Frequentes</h2>

 <div class="flex flex-col space-y-4 pt-10 divfqa">

  <details class="group [&_summary::-webkit-details-marker]:hidden" close>

    <summary
      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
    >
      <h2 class="font-medium group-hover:translate-x-2 ">
      O que são alimentos orgânicos?
      </h2>

      <svg
        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="mt-4 px-4 leading-relaxed text-teal-700">
    Alimentos orgânicos são produtos agrícolas cultivados sem o uso de pesticidas químicos sintéticos, fertilizantes artificiais ou organismos geneticamente modificados (OGMs). Eles são cultivados de forma sustentável, seguindo práticas que promovem a saúde do solo e a biodiversidade.
    </p>

  </details>

  <details class="group [&_summary::-webkit-details-marker]:hidden" close>

  <summary
    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white   p-4 text-gray-900"
  >
    <h2 class="font-medium group-hover:translate-x-2 ">
    Por que devo escolher alimentos orgânicos?
    </h2>

    <svg
      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </summary>

  <p class="mt-4 px-4 leading-relaxed text-teal-700">
  Alimentos orgânicos são uma escolha saudável e sustentável. Eles são livres de resíduos tóxicos de pesticidas e contêm níveis mais elevados de nutrientes essenciais. Além disso, o cultivo orgânico ajuda a proteger o meio ambiente, preservando a qualidade do solo e a biodiversidade.
  </p>

</details>

<details class="group [&_summary::-webkit-details-marker]:hidden" close>

<summary
  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white   p-4 text-gray-900"
>
  <h2 class="font-medium group-hover:translate-x-2 ">
  Como sei que os produtos são realmente orgânicos?
  </h2>

  <svg
    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p class="mt-4 px-4 leading-relaxed text-teal-700">
Na Sol Nascente, priorizamos a transparência e a qualidade. Nossos produtos orgânicos são certificados por órgãos de certificação reconhecidos, o que garante que eles atendam aos padrões rigorosos de cultivo orgânico. Você também pode verificar os selos de certificação em nossos produtos para ter certeza.
</p>

</details>

<details class="group [&_summary::-webkit-details-marker]:hidden" close>

<summary
  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white   p-4 text-gray-900"
>
  <h2 class="font-medium group-hover:translate-x-2 ">
  Vocês oferecem uma variedade de produtos orgânicos?
  </h2>

  <svg
    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p class="mt-4 px-4 leading-relaxed text-teal-700">
Sim, oferecemos uma ampla variedade de produtos orgânicos, desde frutas e verduras frescas até produtos de despensa, laticínios, carnes e muito mais. Nossa meta é tornar a alimentação orgânica acessível e conveniente para nossos clientes.
</p>

</details>

<details class="group [&_summary::-webkit-details-marker]:hidden" close>

<summary
  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white   p-4 text-gray-900"
>
  <h2 class="font-medium group-hover:translate-x-2 ">
  Qual é o prazo de entrega dos produtos?
  </h2>

  <svg
    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p class="mt-4 px-4 leading-relaxed text-teal-700">
O prazo de entrega padrão para os produtos da Natureza Viva é de 5 a 10 dias úteis a partir da data da compra. Trabalhamos arduamente para garantir que seus produtos orgânicos cheguem até você o mais rápido possível, enquanto mantemos a qualidade e a frescura dos itens. Caso haja qualquer atraso ou mudança no prazo de entrega, nossa equipe entrará em contato para manter você informado. 
</p>

</details>

<details class="group [&_summary::-webkit-details-marker]:hidden" close>

<summary
  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white   p-4 text-gray-900"
>
  <h2 class="font-medium group-hover:translate-x-2 ">
  Quais as opções de pagamento?
  </h2>

  <svg
    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</summary>

<p class="mt-4 px-4 leading-relaxed text-teal-700">
Aceitamos apenas PIX como forma de pagamento eletrônico em nossa loja. O PIX é uma opção segura e conveniente que oferece rapidez na transação, permitindo que você efetue o pagamento de seus produtos de forma instantânea e sem a necessidade de dinheiro em espécie ou cartões de crédito. 
</p>

</details>

  </div>

</div>
  
            
            
  <!-- Codigo -->
          
  
        `;

        

        this.selecionarFQA();
  }

   selecionarFQA() {
    const divfqa = document.querySelector('.divfqa');
    const detailsfqa = divfqa.querySelectorAll('details');

    detailsfqa.forEach(function(details) {
        const summaryfqa = details.querySelector('summary');
        let isCustomColor = false; // Variável para rastrear o estado do estilo personalizado

        summaryfqa.addEventListener('click', () => {
            // Altere o estilo do summary e acompanhe o estado
            if (isCustomColor) {
                summaryfqa.style.backgroundColor = 'white';
            } else {
                summaryfqa.style.backgroundColor = 'rgba(13, 148, 136, 0.1)';
            }

            // Inverta o estado para a próxima vez
            isCustomColor = !isCustomColor;
        });
    });
}

}
  
customElements.define("fqa-01", FQA01);
  
  
  
  
  
  
  
  
  
  
  
  