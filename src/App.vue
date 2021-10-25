<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Filters_/>
    <LifeCycle/>
    <Interpolation/>
    <Directive/>
    <ApiCalling/>
  </div>
</template>

<script>
import ApiCalling from './class_1/ApiCalling.vue'
import Directive from './class_1/Directive.vue'
import Filters_ from './class_1/Filters_.vue'
import Interpolation from './class_1/Interpolation.vue'
import LifeCycle from './class_1/LifeCycle.vue'

export default {
  name: 'App',
  components: {
    LifeCycle,
    Interpolation,
    Directive,
    ApiCalling, 
    Filters_,
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
