<template>
 <div class="notification is-success column px-2	 is-three-quarters" v-if="show">
  <button class="delete" @click="debutclick() ; show = !show"></button>
  <div class="columns">
  <div class="column monintro">
      <h2 class="title is-2">Apprendre l'interface d'un ordinateur</h2>
  <p>Salut à toi jeune apprenant. Je m'appelle Flantier et j'ai oublié d'enlever mon sapin de noël... C'est l'été, j'ai grave les boules. Peux-tu m'aider à m'en débarrasser ? Si tu suis mes instructions je sourirais, à l'inverse, je tirerai la tronche. </p>
  <button class="button is-large" @click="debutclick() ; show = !show">C'est parti</button>
  </div>
  <div class="column">
  <img src="../assets/bonhome.svg" alt="">
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
}
</style>