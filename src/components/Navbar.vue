<template>
    <div class="navpri"> 

<nav class="navbar navbar-expand-md fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon bg-white rounded"><i class="fa-solid fa-bars mt-1"></i></span>
    </button>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">POLLERIA</h5>
        <button type="button" class=" button btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-circle-xmark"></i></button>
        
      </div>
      <div class="offcanvas-body">
        <div class="navbar-nav ">
        <router-link to="/" class="nav-link mx-3">HOMEPAGE</router-link>
        <router-link to="/about" class="nav-link mx-3">ABOUT</router-link>
        <router-link to="/event" class="nav-link mx-3">EVENT</router-link>
        <router-link to="/gallery" class="nav-link mx-3">GALLERY</router-link>
        <router-link to="/menu" class="nav-link mx-3">MENU</router-link>
        <router-link to="/contact" class="nav-link mx-3">CONTACT</router-link>
      </div>
      </div>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',

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
*{
  display: flex;
  justify-content: center;
}
.navbar{
    background-color: rgba(0, 0, 0, 0.567) !important;
    width: 100%;
}
.nav-link{
    color:var(--buttonSecundario);
    transition: transform .2s;
}
.nav-link:hover{
    color:var(--buttonPrimario);
    -ms-transform: scale(1.3); /* IE 9 */
  -webkit-transform: scale(1.3); /* Safari 3-8 */
  transform: scale(1.3);
}
.navbar-toggler{
    background-color: rgba(0, 0, 0, 0.567) !important;
    border: none !important;
    margin: 0;
    padding: 0;
}
.button{
  color: #fff;
}
@media screen and (max-width:768px) {
*{
  background:none !important;
}
.container-fluid{
    background:none !important;
    
}
.navbar-nav{
    background:none !important;
}
.offcanvas {
    width: 200px;
    height: 350px;
    background-color: rgba(0, 0, 0, 0.567) !important;
}
}
</style>