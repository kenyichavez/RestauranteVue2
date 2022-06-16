<template>
    <div>
    <footer class="row d-flex flex-wrap justify-content-center align-items-center mx-5 border-top border-white ">
    <div class="col-md-7 my-3 d-flex justify-content-evenly align-items-center">
      <div class=""><a href="#"><i class="fa-brands fa-whatsapp icon"></i></a></div>
      <div class=""><a href="#"><i class="fa-brands fa-facebook icon"></i></a></div>
      <div class=""><a href="#"><i class="fa-brands fa-instagram icon"></i></a></div>
    </div>
    <div class="col-md-4 my-3 text-center">
      <span class="ml-5"> &copy; 2022 Carlos Company, Inc </span>
    </div>

  </footer>
    </div>
</template>

<script>
export default {
    name: 'RestauranteVue2Footer',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
footer{
  background-color: black;
}
.icon{
  font-size: 2rem;
  color:var(--buttonSecundario);
  transition: transform .2s;
}
.icon:hover{
  color: var(--buttonPrimario);
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
}

</style>