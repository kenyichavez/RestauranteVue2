<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

:root{
  --buttonPrimario: rgb(255, 247, 0);
  --buttonSecundario: rgb(174, 168, 0);
}
*{
  font-family: 'Concert One', cursive;
}
</style>
