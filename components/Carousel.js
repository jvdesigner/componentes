
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

            grabCursor: true,

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
          idProduto=1
          srcimagem="https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9yYW5nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Morango"
          precoProduto="8,99"
          numeroEstrelas=4
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          idProduto=2
          srcimagem="https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Vub3VyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Cenoura"
          precoProduto="4,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          idProduto=3
          srcimagem="https://images.unsplash.com/photo-1628773822503-930a7eaecf80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyb2NvbGlzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Brócolis"
          precoProduto="6,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          idProduto=4
          srcimagem="https://images.unsplash.com/photo-1566393028639-d108a42c46a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          nomeProduto="Banana"
          precoProduto="3,99"
          numeroEstrelas=5
          >
          </cards-02>

          <cards-02 
          class="swiper-slide" 
          idProduto=5
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
            delay: 5000,
            disableOnInteraction: false,
          
          },
          
          grabCursor: true,
      effect: "cards",

        });


  }
}

customElements.define("carousel-02", carousel02);


// ================================================================================== //


// == Componente de carrossel 03 == //

class carousel03 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper carrossel3 overflow-y-visible">

      <div class="swiper-wrapper">

        <cards-03 
        nomeCliente="Maria Silva"
        textoCliente="Adoro a Sol Nascente! Eles têm sempre os produtos mais frescos e saborosos. Além disso, o atendimento ao cliente é excepcional. Recomendo muito!"
        srcimagem="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        numeroEstrelas=5
        class="swiper-slide">
        </cards-03>

        <cards-03 
        nomeCliente="João Santos"
        textoCliente="Os alimentos orgânicos da Sol Nascente são uma ótima opção para quem procura uma dieta mais saudável. Eles têm uma grande variedade de produtos e preços justos."
        srcimagem="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        numeroEstrelas=4
        class="swiper-slide">
        </cards-03>

        <cards-03 
        nomeCliente="Ana Pereira"
        textoCliente="A Sol Nascente é o meu lugar favorito para comprar alimentos orgânicos. Sempre encontro o que preciso, e a qualidade é impecável. É um paraíso para os amantes da comida saudável!"
        srcimagem="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        numeroEstrelas=5
        class="swiper-slide">
        </cards-03>

        <cards-03 
        nomeCliente="Carlos Ferreira"
        textoCliente="A Sol Nascente é uma loja muito boa, mas às vezes os preços podem ser um pouco altos. No entanto, a qualidade dos produtos faz valer a pena o investimento."
        srcimagem="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        numeroEstrelas=5
        class="swiper-slide">
        </cards-03>


      </div>

  </div>

  <div class="swiper mySwiper carrossel3 overflow-y-visible mt-4">

  <div class="swiper-wrapper">

  <cards-03 
  nomeCliente="André Martins"
  textoCliente="A Sol Nascente é um lugar confiável para comprar produtos orgânicos. Eles têm uma boa seleção e são transparentes sobre a origem dos alimentos. Eu aprecio muito isso."
  srcimagem="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  numeroEstrelas=5
  class="swiper-slide">
  </cards-03>

  <cards-03 
  nomeCliente="Luísa Gonçalves"
  textoCliente="Só compro alimentos orgânicos na Sol Nascente! A loja é limpa, organizada e sempre tem produtos frescos. É um alívio saber que estou cuidando da minha saúde e do meio ambiente ao fazer compras aqui."
  srcimagem="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  numeroEstrelas=4
  class="swiper-slide">
  </cards-03>

  <cards-03 
  nomeCliente="Pedro Rodrigues"
  textoCliente="A Sol Nascente oferece uma experiência de compra agradável para os amantes de alimentos orgânicos. A única coisa que poderiam melhorar é a variedade de produtos sazonais."
  srcimagem="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  numeroEstrelas=5
  class="swiper-slide">
  </cards-03>

  <cards-03 
  nomeCliente="Renata Almeida"
  textoCliente="Esta loja é um tesouro escondido! Eles têm uma ampla gama de produtos orgânicos, desde frutas e verduras até produtos de despensa. Eu adoro a atmosfera acolhedora e a qualidade dos alimentos."
  srcimagem="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  numeroEstrelas=5
  class="swiper-slide">
  </cards-03>

  </div>

</div>



<!-- Codigo -->
        

      `;

      var swiper3 = new Swiper(".carrossel3", {

          slidesPerView: 1,

          speed: 700,

          spaceBetween: 10,

          grabCursor: true,

          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          
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
              slidesPerView: 2,
              spaceBetween: 30,
            },

          },

        });


  }
}

customElements.define("carousel-03", carousel03);


// ================================================================================== //


// == Componente de carrossel 04 == //

class carousel04 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper carrossel4">

      <div class="swiper-wrapper py-10">

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1678344177250-bfdbed89fc03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHRvcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="office content 2" >

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHRvcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1598303080484-8db04d10c787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGFncmljdWx0b3J8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 2" >

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1633233523756-61ea75d5ff32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmljdWx0b3J8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1678344164959-62b230fbbfd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGFncmljdWx0b3J8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 2" >

       

       
      </div>

  </div>

  





<!-- Codigo -->
        

      `;

      var swiper4 = new Swiper(".carrossel4", {

        centeredSlides: true,
        slidesPerView: 3.2,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },

          speed: 1000,

          spaceBetween: 10,

          grabCursor: true,

          loop:true,

          effect:'coverflow',

          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition:true,
          
          },

          breakpoints: {

            300: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.6,
            spaceBetween: 30,
          },

        },



          
          
          

        });


  }
}

customElements.define("carousel-04", carousel04);


// ================================================================================== //


// == Componente de carrossel 05 == //

class carousel05 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper carrossel5">

      <div class="swiper-wrapper ">

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFncmljdWx0b3J8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1663011210631-442450983065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JnYW5pY3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1664202219683-e7c7c9d0bf40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG9yZ2FuaWN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1551117425-5e0f451ca10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG9yZ2FuaWN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1664910590150-9a8fe18ba7a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG9yZ2FuaWMlMjBwZW9wbGUlMjBlYXR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

        <img class="swiper-slide w-full rounded-lg" src="https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pYyUyMHBlb3BsZSUyMGVhdHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="office content 1" >

       

       
      </div>

  </div>

  





<!-- Codigo -->
        

      `;

      var swiper5 = new Swiper(".carrossel5", {

        slidesPerView: 3.2,

          speed: 1000,

          spaceBetween: 10,

          grabCursor: true,

          loop:true,

          effect:"fade",

          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition:true,
          
          },

        



          
          
          

        });


  }
}

customElements.define("carousel-05", carousel05);


// ================================================================================== //
  
  
  // == Componente de carrossel 06 == //

class carousel06 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->


  <div class="swiper mySwiper carrossel6 p-2">

      <div class="swiper-wrapper">

          <cards-04 
            class="swiper-slide"
            srcimagem="https://ouch-cdn2.icons8.com/XdRpKjiyg2s2kbLvtsDGWE5PKgABQIZSUG-ZPVNp6dw/rs:fit:368:220/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDE0/L2E5NjY5Mzc4LWEw/ZjUtNGQwMC1hNGUx/LTM3ZWVmMDFhMDYz/MS5wbmc.png"
            txtTitulo="Pagamento Seguro"
            txtTexto="Garantimos um processo de pagamento seguro e protegido para que você possa fazer suas compras com confiança."
          ></cards-04>

          <cards-04 
            class="swiper-slide"
            srcimagem="https://ouch-cdn2.icons8.com/wj0dTJgSWz08TH2Vru4APdGsjbted-Y9YOB6qdXmnBU/rs:fit:368:429/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTA1/L2RhZWRlOTA4LTAx/NTUtNDk4YS04ZWNi/LTczMjIzN2RlM2Ux/Ny5wbmc.png"
            txtTitulo="Política de devolução"
            txtTexto="Oferecemos uma política de devolução flexível para garantir a sua satisfação completa com nossos produtos."
          ></cards-04>

          <cards-04 
            class="swiper-slide"
            srcimagem="https://ouch-cdn2.icons8.com/lSUEblB4cfrIfurGPyGKIyWr1aAJoU6_iIGXj5Fhswk/rs:fit:368:314/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODkz/LzM2ZGE3MTlhLTA0/YmQtNGVlMy1hMmJm/LTZmY2ZiZmUwOGNk/Zi5wbmc.png"
            txtTitulo="Suporte 24hrs"
            txtTexto="Nossa equipe de suporte está disponível 24 horas por dia para responder a todas as suas perguntas e resolver suas dúvidas."
          ></cards-04>

          <cards-04 
            class="swiper-slide"
            srcimagem="https://ouch-cdn2.icons8.com/1I1sgyUwblIkY0bvs77m_cw4V31Rki4-yY71gJsKTcY/rs:fit:368:303/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzIx/LzgzNWQ5NzU2LWE2/ODYtNDZlNi1hYjg1/LTQwZTgwNjcyNDQ3/My5wbmc.png"
            txtTitulo="100% Frescor"
            txtTexto="Comprometemo-nos a entregar alimentos sempre frescos e de alta qualidade diretamente para sua mesa."
          ></cards-04>
          

      </div>

  </div>



<!-- Codigo -->
        

      `;

      var swiper6 = new Swiper(".carrossel6", {

          slidesPerView: 1.1,

          speed: 700,

          spaceBetween: 10,

          loop:true,

          grabCursor: true,

          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          
          },
          
          

        });


  }
}

customElements.define("carousel-06", carousel06);


// ================================================================================== //
  
  
  
  
  
  
  