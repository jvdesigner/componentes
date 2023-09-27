


// == Componente de cart 01 == //

class cart01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <div  class="block shrink-0  relative max-md:scale-90">

  <span class="sr-only">carrinho</span>

  <svg id="btnnavcart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer stroke-gray-600"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>


  <div id="navcart" class="hidden p-2 w-[40vw] max-lg:w-[70vw] max-md:w-[100vw] max-md:translate-x-16 drop-shadow-xl rounded-xl bg-white absolute right-0 translate-y-4 z-50">

    <section>

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        <div class="mx-auto max-w-3xl">

          <header class="text-center">
            <h1 class=" font-bold text-gray-900 text-xl">Meu Carrinho</h1>
          </header>

          <div class="mt-8">

            <ul id="galeriaItensCarrinho" class="space-y-10">

                <itemcart-01></itemcart-01>

            </ul>

            <div class="mt-8 flex justify-end border-t border-gray-100 pt-8 ">

              <div class="w-full space-y-4">

                <dl class="space-y-0.5 text-sm text-gray-700">

                  <div class="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>R$ 0,00</dd>
                  </div>

                  <div class="flex justify-between">
                    <dt>Desconto</dt>
                    <dd>-R$ 0,00</dd>
                  </div>

                  <div class="flex justify-between !text-base font-medium pt-4">
                    <dt>Total</dt>
                    <dd>R$ 0,00</dd>
                  </div>

                </dl>

                <div class="hidden justify-end">
                  <span
                    class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>

                <div class="flex justify-end pt-4">
                  <a
                    href="#"
                    class="block rounded bg-teal-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-teal-600 hover:scale-105"
                  >
                    Checkout
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>

</div>
            
  <!-- Codigo -->
          
  
        `;

      const navcart = document.getElementById('navcart');
      const btnnavcart = document.getElementById('btnnavcart');
      

      btnnavcart.addEventListener('click', ()=> {
        
        if(navcart.style.display=="block"){navcart.style.display="none"}
        else{navcart.style.display="block"}

        btnnavcart.classList.toggle('stroke-teal-600')
      
      
      });




    }
  }
  
  customElements.define("cart-01", cart01);
  
  
  // ================================================================================== //

  // == Componente de itemcart 01 == //

class itemcart01 extends HTMLElement {
    constructor() {
      super();

      const srcimagem = this.getAttribute('srcimagem') || 'https://i.ibb.co/StwXZqq/Image.png';
      const nomeProduto = this.getAttribute('nomeProduto') || 'Produto';
      const precoProduto = this.getAttribute('precoProduto') || '0,00';
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  
              <li class="flex items-center gap-4">
                

                
                <div class="flex items-center gap-4  w-full">


                  <div class="flex flex-col items-center gap-4  w-full">

                     
                    <div class="flex items-center gap-4  w-full">

                      <img
                        src="${srcimagem}"
                        alt=""
                        class="h-16 w-16 rounded object-cover"
                      />
                      <div class="flex justify-between items-center   w-full">
                        <h3 class="text-sm font-semibold text-gray-900">${nomeProduto}</h3>
                        <div class="flex flex-1 items-center justify-end gap-2">
                

                  <div class="max-md:scale-75">
                    <label for="Quantity" class="sr-only"> Quantity </label>

                    <div class="flex items-center border border-gray-200 rounded">
                      <button
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        &minus;
                      </button>

                      <input
                        type="number"
                        id="Quantity"
                        value="1"
                        class="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />

                      <button
                        type="button"
                        class="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        &plus;
                      </button>
                    </div>
                  </div>

                  <button class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                        </div>
                        
                      </div>

                    </div>

                    <dl class="mt-0.5 space-y-1 text-xs text-gray-600 w-full ">
                    <div>
                      <dt class="inline">Unitário:</dt>
                      <dd class="inline">R$ ${precoProduto}</dd>
                    </div>

                    <div class="font-semibold">
                      <dt class="inline">Total:</dt>
                      <dd class="inline">R$ 0,00</dd>
                    </div>
                    </dl>
                    

                  <div>
                  
                  </div>


                  </div>
                  
                
                </div>

                

              </li>

           
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("itemcart-01", itemcart01);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  