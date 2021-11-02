<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Filters_/> -->
    <!-- <LifeCycle/> -->
    <!-- <Interpolation/> -->
    <!-- <Directive/> -->
    <Shorthands/>
    <!-- <ApiCalling/> -->
    <!-- <Loop_Conditions/> -->
  </div>
</template>

<script>
// import ApiCalling from './workshop/ApiCalling.vue'
// import Directive from './workshop/Directive.vue'
// import Filters_ from './workshop/Filters_.vue'
// import Interpolation from './workshop/Interpolation.vue'
// import LifeCycle from './workshop/LifeCycle.vue'
// import Loop_Conditions from './workshop/Loop&Conditions.vue'
import Shorthands from './workshop/Shorthands.vue'


export default {
  name: 'App',
  components: {
    // LifeCycle,
    // Interpolation,
    // Directive,
    Shorthands,
    // ApiCalling, 
    // Filters_,
    // Loop_Conditions,
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
}
</style>
