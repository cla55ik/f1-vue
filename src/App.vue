<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Menu></Menu>
  <Pilot></Pilot>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Pilot from './components/Api/Pilot.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Pilot,
    Menu
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
