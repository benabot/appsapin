<template>
  <div id="app">
   
    
      <Header/>
       <transition name="fade">
      <div class="columns is-centered"><Intro v-on:gogo="debut = true"></Intro></div>
      </transition>
       <transition name="fade">
      <Sapin v-if="debut"></Sapin>
      </transition>
    
  </div>
</template>

<script>


import Intro from './components/intro.vue'
import Header from './components/header.vue'
import Sapin from './components/sapin.vue'


export default {
  name: 'app',
  components: {
    Intro,
    Header,
    Sapin,
  
  },
    data() {
            return {
              debut : false
            }
    },
    
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
  // margin-top: 60px;
  background :#0097A7; 
}
.conteneur {
display : flex;
flex-direction: row;
}

.fade-enter-active {
  transition: all 1.9s;
}
.fade-leave-active {
  transition: all 1.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: scale(0, 0);
 
}
</style>
