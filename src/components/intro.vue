<template>
 <div class="notification is-success column is-10" v-if="show">
  <button class="delete" @click="debutclick() ; show = !show"></button>
  <div class="columns">
  <div class="column monintro">
      <h2 class="title is-2">Apprendre l'interface d'un ordinateur</h2>
  <p>Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit</p>
  <button class="button is-large" @click="debutclick() ; show = !show">C'est parti</button>
  </div>
  <div class="column">
  <img src="../assets/noel.png" alt="">
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