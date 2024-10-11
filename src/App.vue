<template>
  <div class="mainDiv">
    
    <navbar-comp />
  <main class="main">
    <router-view/>
  </main>
  <footer-comp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';

export default {
  components: { NavbarComp, FooterComp },

}
</script>

<style>
#app {
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

}
body{
  background-color: #37515F ;
}
.custom-navbar {
  background-color: #97B4C3;
  color: white;
}

nav router-link {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: white;
}

.mainDiv{
  display: grid;
  grid-template-rows: auto minmax(100dvh, 100%);
  background-size: 100vh;
}
main{
  margin-top: 50px;
}

</style>
