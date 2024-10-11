<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <img src="https://sihlandlomak.github.io/images/images2/Mna.jpg" alt="my potrait" class="potrait">
    <p><b><span>Welcome</span>
      , I am Sihlandlo Makhumsha, an aspiring Full-Stack Web Developer
    </b></p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
  .potrait{
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  span, b{
    font-size: larger;
    font-family: "Merriweather", serif;
  }
</style>
