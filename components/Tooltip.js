
// -- Botao Dark Mode  --//

export default class compBtnDarkMode extends HTMLElement {
    constructor() {
      super();

      this.innerHTML = `
      
            
    
<!-- Codigo -->
            
           
  
<!-- Light style tooltip -->

<button id="btndark" data-tooltip-target="tooltip-light" data-tooltip-style="light" type="button" class="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-800">

<svg class="w-6 h-6 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"/>
  </svg>

</button>

<div id="tooltip-light" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
    Dark
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

<!-- Dark style tooltip -->
<button id="btnlight" data-tooltip-target="tooltip-dark" type="button" class="hidden text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-800">

<svg class="w-6 h-6 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"/>
  </svg>


</button>

<div id="tooltip-dark" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Light
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>

            
            
<!-- Codigo -->
          
  
        `;

      const btnlight = document.getElementById('btnlight');
      const btndark = document.getElementById('btndark');

      btnlight.addEventListener('click',()=>{
        btnlight.style.display="none";
        btndark.style.display="block";
        document.querySelector('html').classList.remove('dark')
      })

      btndark.addEventListener('click',()=>{
        btndark.style.display="none";
        btnlight.style.display="block";
        document.querySelector('html').classList.add('dark')
      })

      


    }
  }
  
customElements.define("tooltip-darkmode", compBtnDarkMode);