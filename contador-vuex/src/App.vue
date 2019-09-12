<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <p>Hooola Luis</p>
      <h5>{{message}}</h5>
  </div>
</template>

<script>

export default {
  name: 'app',
    data(){
        return {
            message: 'Hola desde export'
        }
    }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
