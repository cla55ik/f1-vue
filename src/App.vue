<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <pilot></pilot>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Pilot from './components/Api/Pilot.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Pilot
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
  margin-top: 60px;

  max-width: 1180px;
  margin: 0 auto;
}
</style>
