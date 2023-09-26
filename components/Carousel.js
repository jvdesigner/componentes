
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'



// == Componente de carrossel 01 == //

class carousel01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
<!-- Codigo -->

  
    <div class="swiper mySwiper overflow-y-visible">

        <div class="swiper-wrapper">

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/IaWuTl59f7HFuFg4dfxJS8pFLqj5Xi6-NDMKTbglpZo/rs:fit:368:302/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjUx/L2Q1OWM0ODZhLTU3/M2ItNGNkZi1hNmU0/LWIxYzE4NjM1YzRk/YS5wbmc.png" txtTitulo="Frutas" txtqnt="10" txtTexto="Livres de pesticidas, nossas frutas oferecem sabores puros e naturais para uma alimentação saudável e autêntica." class="swiper-slide"></cards-01>

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/9rPMB5mtsV9jZp6ZK2pr11q_Dpci2OlIXDe4hNpld44/rs:fit:368:710/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMz/L2Q5NGIyM2ZkLTVh/YzktNDI0OS1hNzFm/LTU4ZTMyNGNlMTdl/NC5wbmc.png" txtTitulo="Legumes" txtqnt="6" txtTexto="São colhidos no auge da frescura e sabor, garantindo qualidade e saúde em cada refeição." class="swiper-slide"></cards-01>

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/E1z0hQO2u8uOJsEgf0oPQxiEY77zVQltw8LgDSIGIsQ/rs:fit:368:431/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzM2/LzJiMDM2OTE2LTRh/YTEtNGQ5MC05ZDYx/LWYzOGQzNTJhMzVm/ZS5wbmc.png" txtTitulo="Vegetais" txtqnt="12" txtTexto="Opções frescas e saborosas cuidadosamente selecionadas para nutrir seu corpo e satisfazer seu paladar." class="swiper-slide"></cards-01>

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/6sfmAtsL8tultegtZ_fC8GD_u454i3sOKDOG4aSavMk/rs:fit:368:462/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTIx/LzM1ZDNkNmIzLTU5/MDMtNGRlZC04ZTYw/LWY2ODFhNDBkMDFk/ZC5wbmc.png" txtTitulo="Laticínios" txtqnt="3" txtTexto="Escolhidos com atenção, nossos laticínios veganos proporcionam o sabor dos tradicionais sem crueldade animal." class="swiper-slide"></cards-01>
            

        </div>

    </div>



<!-- Codigo -->
          
  
        `;

        var swiper = new Swiper(".mySwiper", {

            slidesPerView: 1,

            speed: 700,

            spaceBetween: 10,

            autoplay: {
              delay: 2500,
              disableOnInteraction: true,
            
            },
            
            breakpoints: {

                300: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },

            },

          });


    }
  }
  
  customElements.define("carousel-01", carousel01);
  
  
  // ================================================================================== //


  // == Componente de carrossel 02 == //

class carousel02 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper carrossel2 mySwiper w-[60%] scale-[0.8] max-lg:scale-[0.8] max-lg:w-[100%]">

      <div class="swiper-wrapper ">

          <cards-02 
          class="swiper-slide" 
          srcimagem="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9yYW5nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Morango"
          precoProduto="8,99"
          numeroEstrelas=4
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          srcimagem="https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Vub3VyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Cenoura"
          precoProduto="4,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          srcimagem="https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyb2NvbGlzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Brócolis"
          precoProduto="6,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          srcimagem="https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Banana"
          precoProduto="3,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          srcimagem="https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxmYWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Alface"
          precoProduto="2,99"
          numeroEstrelas=4
          >
          </cards-02>
          

      </div>

  </div>



<!-- Codigo -->
        

      `;

      var swiper2 = new Swiper(".carrossel2", {

          


          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          
          },
          
          grabCursor: true,
      effect: "cards",

        });


  }
}

customElements.define("carousel-02", carousel02);


// ================================================================================== //
  
  
  
  
  
  
  
  
  
  