<template>
  <div id="app">
    <Negotiation />
  </div>
</template>

<script>
import Negotiation from './components/Negotiation.vue'

export default {
  name: 'app',
  components: {
    Negotiation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
