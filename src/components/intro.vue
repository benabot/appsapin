<template>
 <div class="notification is-success column is-three-quarters is-mobile customnotif" v-if="show">
  <div class="columns is-centered ">
  <div class="column  monintro ">
      <h2 class="title is-2">Apprendre l'interface d'un ordinateur</h2>
      <figure class="image is-square" id="bonhommesvgmob">
          <img src="../assets/bonhome.svg" alt="bonhomme" >
        </figure>
  <p>Salut à toi jeune apprenant. Je m'appelle Flantier et j'ai oublié d'enlever mon sapin de noël... C'est l'été, le sapin est vraiment en trop. Peux-tu m'aider à m'en débarrasser ? Si tu suis mes instructions je sourirais, à l'inverse, je ferais une grimace. </p>
  <button class="button intro-button" @click="debutclick() ; show = !show">C'est parti</button>
  </div>
  <div class="column colonnebohnomme">
      <div class="columns is-flex is-centered">
          <figure class="image is-square" id="bonhommesvg">
          <img src="../assets/bonhome.svg" alt="bonhomme" >
        </figure>
      </div>
      
  </div>
  </div>
</div>
</template>

<script>

export default {
name: 'Intro',
//props: {debut : Boolean},
  data() {
            return {
show: true
            }
  },
  methods: {
        debutclick() {
            this.$emit('gogo')
        }
    }
}
</script>

<style lang="scss">
.notification.is-success {
       background: #A7FFFF;
    -webkit-box-shadow: 20px 20px 60px #00808e, -20px -20px 60px #00aec0;
    box-shadow: 20px 20px 60px #465e61, -20px -20px 60px #698e92;
        color: #363636;
}

.monintro{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
      @media only screen and (max-width: 768px) {
        // margin: 0 50px 100px 50px;
        min-height: 100vh;
        // justify-content: space-around;
    }
}
.intro-button{
    @media only screen and (max-width: 768px) {
        margin : 20px 0;
    }
    background-color: #0097A7;
    color:#A7FFFF;
    border: none;
}
#bonhommesvg{
    width:50%; 
    //text-align: center;
}

.colonnebohnomme{
    @media only screen and (max-width: 768px) {
        display: none;
    }
}
.customnotif{
    @media only screen and (max-width: 768px) {
        margin: 0 20px 100px 20px;
        //min-height: 120vh;
        justify-content: space-around;
    }
}
#bonhommesvgmob{
     
    @media only screen and (max-width: 768px) {
        display: block;
         margin: 60px 0;
    }
    @media only screen and (min-width: 768px) {
       display: none; 
    }
   
}

</style>