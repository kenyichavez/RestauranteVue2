<template>
  <div>
    <Carrousel></Carrousel>
    <div class="caja-home row m-5 p-2 ">
      <div class="col-md-5 p-0 order-md-1 d-flex justify-content-center align-items-center">
        <img src="@/assets/pollo-brasa.jpg" class="img-fluid" alt="" />
      </div>
      <div class="col-md-7 px-3 order-md-2 text-center d-flex flex-column justify-content-center align-items-center ">
        <p class="titulo">
          ABOUT US
        </p>
        <p class="texto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad delectus
          neque commodi eaque distinctio mollitia, ipsa incidunt iste ex sequi
          alias quas. Nostrum obcaecati eum consequatur assumenda sunt doloribus
          consectetur.
        </p>
        <button class="button"> Click me </button>
      </div>
    </div>
    <div class="caja-home row m-5 p-2 ">
      <div class="col-md-5 p-0 order-md-2">
        <img src="@/assets/pollo-brasa.jpg" class="img-fluid" alt="" />
      </div>
      <div class="col-md-7 px-3 order-md-1 text-center d-flex flex-column justify-content-center align-items-center">
        <p class="titulo ">
          EVENTS
        </p>
        <p class="texto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad delectus
          neque commodi eaque distinctio mollitia, ipsa incidunt iste ex sequi
          alias quas. Nostrum obcaecati eum consequatur assumenda sunt doloribus
          consectetur.
        </p>
        <button class="button"> Click me </button>
      </div>
    </div>
    <div class="caja-home row m-5 p-2 ">
      <div class="col-md-5 p-0 order-md-1">
        <img src="@/assets/lomo-saltado.jpg" class="img-fluid" alt="" />
      </div>
      <div class="col-md-7 px-3 order-md-2 text-center d-flex flex-column justify-content-center align-items-center">
        <p class="titulo ">
          GALLERY
        </p>
        <p class="texto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad delectus
          neque commodi eaque distinctio mollitia, ipsa incidunt iste ex sequi
          alias quas. Nostrum obcaecati eum consequatur assumenda sunt doloribus
          consectetur.
        </p>
        <button class="button"> Click me </button>
      </div>
    </div>
    <div class="caja-home row m-5 p-2 ">
      <div class="col-md-5 p-0 order-md-2">
        <img src="@/assets/fideos.jpg" class="img-fluid " alt="" />
      </div>
      <div class="col-md-7 px-3 order-md-1 text-center d-flex flex-column justify-content-center align-items-center">
        <p class="titulo ">
          MENU
        </p>
        <p class="texto text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad delectus
          neque commodi eaque distinctio mollitia, ipsa incidunt iste ex sequi
          alias quas. Nostrum obcaecati eum consequatur assumenda sunt doloribus
          consectetur.
        </p>
        <button class="button"> Click me </button>
      </div>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Carrousel from "@/components/Carrousel.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
    Carrousel
},
};
</script>
<style scoped>
*{
  background: rgb(0, 0, 0);
  color: #fff;
}
img{
  background-size: 100% 100%;
  background-repeat:no-repeat;
  background-size: cover;
  width:100%;
  height:300px;
  padding: 5px;
}
.button{
  background-color: var(--buttonSecundario);
  color: #000;
  border-radius: 10px;
  padding: 5px 10px;
}
.button:hover{
  background-color: var(--buttonPrimario)
}
.caja-home{
  border: 1px solid rgb(255, 255, 255) !important;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(191, 191, 191);
  overflow: hidden;
}

.titulo{
  font-size: 2em;
}
.texto{
  font-size: 1em;
}
</style>