
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'


//swiper-slide


// == Componente de hero 01 == //

class carousel01 extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
      
            
    
<!-- Codigo -->

  
    <div class="swiper mySwiper overflow-y-visible">

        <div class="swiper-wrapper">

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/IaWuTl59f7HFuFg4dfxJS8pFLqj5Xi6-NDMKTbglpZo/rs:fit:368:302/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjUx/L2Q1OWM0ODZhLTU3/M2ItNGNkZi1hNmU0/LWIxYzE4NjM1YzRk/YS5wbmc.png" txtTitulo="Frutas" txtqnt="10" txtTexto="Livres de pesticidas, nossas frutas oferecem sabores puros e naturais para uma alimentação saudável e autêntica." class="swiper-slide"></cards-01>

            <cards-01 srcimagem="https://ouch-cdn2.icons8.com/9rPMB5mtsV9jZp6ZK2pr11q_Dpci2OlIXDe4hNpld44/rs:fit:368:710/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMz/L2Q5NGIyM2ZkLTVh/YzktNDI0OS1hNzFm/LTU4ZTMyNGNlMTdl/NC5wbmc.png" txtTitulo="Legumes" txtqnt="6" txtTexto=" Cultivados sem pesticidas químicos, são colhidos no auge da frescura e sabor, garantindo qualidade e saúde em cada refeição." class="swiper-slide"></cards-01>

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
  
  
  
  
  
  
  
  
  
  