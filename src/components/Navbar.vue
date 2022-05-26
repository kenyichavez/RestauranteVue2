<template>
   
  <nav class="navbar navbar-expand-lg bg-light " >
  <div class="container-fluid ">
    
    <router-link to="/" class="navbar-brand">Inicial</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-around align-items-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Vistas</router-link>
        
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/gallery" class="nav-link">Gallery</router-link>
        
      </div>
    </div>
  </div>
</nav>
    
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

<style lang="scss" scoped>

</style>