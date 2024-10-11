<template>
  <div>
    <navbar-comp />
  </div>
  <main class="main">
    <router-view/>
  </main>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  components: { NavbarComp },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
main{
  margin-top: 50px;
}
</style>
