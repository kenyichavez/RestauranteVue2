<template>
    
         <div class="container-nav2 position-absolute">
        <div class="container ml-auto mr-auto position-relative">
          <router-link to="/" class="navbar-brand text-white px-1"
            >EVENTS</router-link
          >

          <router-link to="/About" class="navbar-brand text-white px-1"
            >RESERVATIONS</router-link
          >

          <router-link to="/gallery" class="navbar-brand text-white px-1"
            >MENU
          </router-link>

          <router-link to="/gallery" class="navbar-brand text-white px-1"
            >GALLERY
          </router-link>
        </div>
      </div>
    
</template>

<script>
export default {
    name: 'RestauranteVue2Navbar2',

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

<style  scoped>

.container-nav2 {
  float: right;

  margin-left: 8%;
  width: 30%;
  z-index: 1000;
  height: 5vh;
  padding: 2px 0 2px 0px;
  margin-top: 5%;
  color: white;
}
</style>