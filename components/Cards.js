


// == Componente de cards 01 == //

class cards01 extends HTMLElement {
    constructor() {
      super();

      const srcimagem = this.getAttribute('srcimagem')||'https://i.ibb.co/StwXZqq/Image.png';
      const txtTitulo = this.getAttribute('txtTitulo')||'Categoria';
      const txtTexto = this.getAttribute('txtTexto')||'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandaedolores, possimus pariatur animi temporibus nesciunt praesentium dolore.';
      const txtqnt = this.getAttribute('txtqnt')||'0';
  
      this.innerHTML = `
      
            
    
  <!-- Codigo -->
        

  <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-[1.01] group/categorias cursor-pointer">
  <img
    alt="Office"
    src="${srcimagem}"
    class="h-48 w-full object-contain p-8 group-hover/categorias:-translate-y-2"
  />

  <div class="backdrop-blur-sm bg-white/60 p-4 sm:p-6">
    <div class="block text-xs text-gray-500">
      ${txtqnt} unid
    </div>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">
        ${txtTitulo}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 group-hover/categorias:line-clamp-none text-gray-500">
      ${txtTexto}
    </p>
  </div>
</article>
            
            
  <!-- Codigo -->
          
  
        `;
    }
  }
  
  customElements.define("cards-01", cards01);
  
  
  // ================================================================================== //
  
  
  
  
  
  
  
  
  
  