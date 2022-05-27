<template>
  <div id="app">
   
       <NavPrincipal></NavPrincipal>
    <router-view/>
  </div>
</template>
<script>
import NavPrincipal from '@/views/NavbarView/NavPrincipal'
export default {
  name: 'App',
  components: {
   NavPrincipal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




</style>
