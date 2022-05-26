<template>
  <div class="conten d-flex">
    <div style="z-index: 1000" class="opaco positon-absolute">
      <div class="container-nav position-absolute">
        <div class="container ml-auto mr-auto position-relative">
          <router-link to="/" class="navbar-brand text-white px-1"
            >HOMEPAGE</router-link
          >

          <router-link to="/About" class="navbar-brand text-white px-1"
            >ABOUT US</router-link
          >

          <router-link to="/gallery" class="navbar-brand text-white px-1"
            >CONTACT
          </router-link>
        </div>
        
       
      </div>
       <div class="title position-relative">
          <Title/>
        </div>
    </div>

    <div>
      <Navbar2/>
    </div>
  </div>
</template>

<script>
import Navbar2 from '@/components/Navbars/Navbar2'
import Title from '@/components/Title/Title.vue'

export default {
  name: "Navbar1",
  components: {
    Navbar2,
    Title
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.opaco {
  width: 50%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  height: 100vh;
}
.conten {
  width: 100%;
  position: absolute;
  z-index: 1000;
}
.container-nav {
  float: left;
  margin-left: 5%;
  width: 30%;
  z-index: 1000;
  height: 5vh;
  padding: 2px 0 2px 0px;
  margin-top: 5%;
}
.title{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35%;
    height: 50vh;
    
}
</style>
