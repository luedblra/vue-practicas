<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <p>Hooola Luis</p>
      <h5>{{message}}</h5>
      <h5>{{ $store.state.counter}}</h5>
      <counter-cmp></counter-cmp>
  </div>
</template>

<script>
import CounterCmp from '@/components/Counter'
export default {
  name: 'app',
    components:{
      CounterCmp  
    },
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
