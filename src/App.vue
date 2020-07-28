<template>
  <div id="app">
   
    
      <Sapin/>
      
    
  </div>
</template>

<script>


import Sapin from './components/sapin.vue'


export default {
  name: 'app',
  components: {
    Sapin,
  
  }
}
</script>

<style lang="scss">
body{
  background : #0097A7;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background :#0097A7; 
}
.conteneur {
display : flex;
flex-direction: row;
}
</style>
