<template>
  <kinesis-container tag="div" class="conteneur">
   
      <div class="boite" @click="dispaArbre()" :style="{'background-image': 'url(' + choixArbre+ ')'}" id="arbre">
         <div v-if="compteurArbre == 2" id="boitearbre">
           <img @click="changeArbre('pin')" class="arbreachoisir"  id="pin" alt="arbre" :src="require('@/assets/pin.svg')">
           <img @click="changeArbre('palm')" class="arbreachoisir"  id="palm" alt="arbre" :src="require('@/assets/palm.svg')">
           <img @click="changeArbre('pommier')" class="arbreachoisir"  id="pommier" alt="arbre" :src="require('@/assets/pommier.svg')">
           <img @click="changeArbre('hetre')" class="arbreachoisir"  id="hetre" alt="arbre" :src="require('@/assets/hetre.svg')">

         </div>
         <div id="boiteboules">
         <img @click="sourireClick" v-for="i in 2" :key = "i" :id="'boule'+i"  :src="randomImage" alt="boule bleu" class="boule bun"> -->
         <img @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule1"  src="../assets/bouleRouge.svg" alt="boule" :class="bouleSelect" class="boule rouges"/>
          <img @click="sourireClick('bleu', $event) ; auterboule()" ref="bleu" id="boule2"  src="../assets/bouleBleu.svg" alt="boule" :class="bouleSelect" class="boule bleus"/>
          <img @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule3"  src="../assets/bouleJaune.svg" alt="boule" :class="bouleSelect" class="boule jaunes"/>
          <img @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule4" src="../assets/bouleRouge.svg" alt="boule" :class="bouleSelect" class="boule rouges"/>
          <img @click="sourireClick('bleu', $event) ; auterboule()" ref="bleu" id="boule5"  src="../assets/bouleBleu.svg" alt="boule" :class="bouleSelect" class="boule bleus"/>
          <img @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule6"  src="../assets/bouleJaune.svg" alt="boule" class="boule jaunes"/>
          <img @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule7"  src="../assets/bouleJaune.svg" alt="boule" class="boule jaunes"/>
          <img @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule8" src="../assets/bouleRouge.svg" alt="boule" class="boule rouges"/>
          <img @click="sourireClick('bleu', $event) ; auterboule()" ref="bleu" id="boule9"  src="../assets/bouleBleu.svg" alt="boule" class="boule bleus"/>
          
        </div>
        
      </div>

      <div class="boite" id="perso">
        <div id="txtBulle">
          <!-- <transition name="fade"> -->
          <p v-if ="compteurBoules <3">Enlève les boules {{laBoule}}s en cliquant dessus</p>
          <p v-if ="compteurBoules >=3 && compteurBoules<6">Bien, maintenant, enlève les boules {{laBoule}}s</p>
          <p v-if ="compteurBoules >=6 && compteurBoules<9">Il reste les boules {{laBoule}}s</p>
          <p v-if ="compteurBoules ==9 && compteurNom <3">Merci ! Au fait, tu t'appeles comment ?</p>
          <p v-if ="compteurNom >=3 && compteurArbre ==0">Bonjour {{blaze}}, place au printemps. <br/> Clique sur le sapin pour le faire disparaître</p>
          <p v-if ="compteurArbre ==1">Maintenant {{blaze}}, on va choisir un autre arbre. <br/> Si tu es d'accord, tape m'en 5!</p>
          <p v-if ="compteurArbre == 2">Alors {{blaze}}, clique sur l'arbre de ton choix.</p>
          <p v-if ="compteurArbre == 3">Merci {{blaze}}, à tantôt !</p>
          <!-- </transition> -->
        </div>
                            <input v-if ="compteurBoules ==9 && compteurArbre ==0" class="insertnom" v-model="blaze"  @keydown="compteurNom+=1" placeholder='nom'>

        
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 768" style="enable-background:new 0 0 1024 768;" xml:space="preserve" id="shadow">
          
          <kinesis-element tag="g"  :strength="15" type="depth" id="tete">
            <rect class="st0" width="394.6" height="407"/>
          </kinesis-element>
         
          <kinesis-element tag="g"  :strength="10" type="depth" id="nez">
            <g>
              <path class="st1" d="M198.2,184.7c1.1,5.2,1.9,10.5,2.8,15.7c0.8,5.2,1.5,10.5,2.1,15.7c0.3,2.6,0.9,5.2,1.3,7.9
                c0.5,2.6,0.5,5.2,0.1,7.9c-0.4,2.6-1.1,5.2-2.1,7.9c-1,2.6-2.2,5.2-4.2,7.9c-0.3,0.4-0.8,0.5-1.2,0.2c-0.1,0-0.1-0.1-0.2-0.2
                c-2-2.6-3.2-5.2-4.2-7.9c-1-2.6-1.6-5.2-2.1-7.9c-0.4-2.6-0.4-5.2,0.1-7.9c0.4-2.6,1.1-5.2,1.3-7.9c0.6-5.2,1.3-10.5,2.1-15.7
                c0.9-5.2,1.7-10.5,2.8-15.7c0.1-0.4,0.5-0.6,0.8-0.6C197.9,184.2,198.1,184.4,198.2,184.7z"/>
            </g>
          </kinesis-element>

           
                <kinesis-element tag="g" id="eyeleft" :strength="20" 
                    type="depth">
                  <line class="st2" x1="107.4" y1="204.9" x2="74.4" y2="173.1"/>
                  <line class="st2" x1="74.9" y1="204.8" x2="106.7" y2="171.9"/>
                </kinesis-element>
              
              <kinesis-element tag="g" id="eyeRight" :strength="20" type="depth">
                <line class="st2" x1="288.3" y1="171.5" x2="317.7" y2="206.5"/>
                <line class="st2" x1="320.5" y1="174.9" x2="285.5" y2="204.4"/>
              </kinesis-element>

            <kinesis-element tag="g"  :strength="10" type="depth" id="bouche">
              <path class="st1" :d="sourire"/>
            </kinesis-element>
            <g v-if ="compteurArbre ==1" @click="compteurArbre+=1" id="main">
              <g>
                <rect x="390" y="382.8" class="st4" width="218" height="19"/>
                <rect x="608" y="328.9" class="st4" width="116" height="129.9"/>
              </g>
            </g>
          </svg>
          
      </div>
  </kinesis-container>
  <!-- </div>   -->
   
  
</template>

<script>
import { gsap } from "gsap";
export default {
  name: 'Sapin',
  data() {
            return {
                
                chiffreSourire : 11.1,
                arbre : {
                  sapin : require('../assets/sapinOK2.svg'),
                  pin : require('../assets/pin.svg'),
                  hetre : require('../assets/hetre.svg'),
                  palm : require('../assets/palm.svg'),
                  pommier : require('../assets/pommier.svg'),
                  rien : '',
                },
                choixArbre: require('../assets/sapinOK2.svg'),
                boules: [
                  'bleu',
                  'rouge',
                  'jaune',
                ],
                laBoule: '',
                messageBoule: '',
                bouleSelect: {
                  active: false,
                },
                compteurBoules :0,
                compteurArbre :0,
                compteurNom :0,
                blaze:'',
               
            }
        },
 
 
  methods: {
     
     sourireClick (couleur, event)  {
        if ( couleur === this.laBoule){
           this.chiffreSourire += 15;
            this.compteurBoules += 1;
            event.preventDefault();
           return event.target.style.visibility = 'hidden';

            
        }
        else {
           this.chiffreSourire -= 15;  
        } 
      },

      auterboule() {
        if (this.compteurBoules <3){
            this.laBoule =  'bleu';
          }
          if (this.compteurBoules >=3){
            this.laBoule =  'rouge';
          }
          if (this.compteurBoules >=6){
            this.laBoule =  'jaune';
          }
          //return this.laBoule,
      },

      dispaArbre() {
        if (this.compteurNom >=3 && this.compteurArbre ==0){
        this.choixArbre = this.arbre.rien;
        this.compteurArbre += 1;

        }

      },

      changeArbre(tree){
        this.compteurArbre +=1;
        switch (tree) {
          case 'pin':
            this.choixArbre = this.arbre.pin;
             console.log('ahahha');
             break;
           
          case 'hetre':
            this.choixArbre = this.arbre.hetre;
             console.log('ihihhi');
             break;
           
          case 'pommier':
            this.choixArbre = this.arbre.pommier;
             console.log('uhuhhu');
             break;
           
          case 'palm':
            this.choixArbre = this.arbre.palm;
             console.log('ohohho');
             break;
           
        }
      }
      
  },
   computed: {

   
    sourire : function () {
      return "M123,312.1c74.5,"+ this.chiffreSourire +",148-2,148-2"
      //return "M460,500c74,"+ this.chiffreSourire +",148-2,148-2"
    }
  },

   created() {

       this.laBoule =  'bleu';
  //   const couleur = Math.floor(Math.random() * this.boules.length);
  //   this.laBoule = this.boules[couleur];
  //   console.log(this.laBoule);
    
  //  let  messageBoule: 'enlève les boules ' + laBoule;
  //  const contage = this.compteurBoules;
  //  if (contage <3){
  //    this.laBoule =  'bleu';
  //  }
  //  if (contage >=3){
  //    this.laBoule =  'rouge';
  //  }
  //  if (contage >=6){
  //    this.laBoule =  'jaune';
  //  }

   
  // console.log(this.laBoule);

  },

   mounted: function(){
     
    

    
    var tl = gsap.timeline();
    tl.from("#arbre", {duration:1, opacity: 0})
      tl.to('#shadow', { duration: 1.2, filter: "drop-shadow(20px 20px 60px #00808e)", ease: "sine"})

    tl.from('#nez', { duration: .2, scale: 0,})
    tl.from('#eyeleft', { duration: .1, scale: 0,})
    tl.from('#eyeRight', { duration: .1, scale: 0,})
    tl.from('#bouche', { duration: .3, scale: 0,})
    tl.from('#boule1', { duration: .1, y: -900,})
    tl.from('#boule2', { duration: .1, y: -500,})
    tl.from('#boule3', { duration: .1, y: -500,})
    tl.from('#boule4', { duration: .1, y: -500,})
    tl.from('#boule5', { duration: .1, y: -500,})
    tl.from('#boule6', { duration: .1, y: -500,})
    tl.from('#boule7', { duration: .1, y: -500,})
    tl.from('#boule8', { duration: .1, y: -500,})
    tl.from('#boule9', { duration: .1, y: -500,})
    tl.from('#txtBulle', { duration: .3, y: -500,scale: 0})


    
  },
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.active{
  display: none;
}
.boite {
  width: 50%;
  height: 80vh;

  &:first-of-type{
    background: #0097A7;
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: cover;
    background-position: center;
    position : relative;
    // img{
    //   height : 100%;
    // }
  }
}

#boitearbre{
  display :flex;
  flex-wrap: wrap;
  .arbreachoisir{
  width :40%;
  max-height : 33vh;
}
}

#boiteboules{
  position: relative;
  width: 100%;
  height: 100%;
}

.boule{
  width :6%;
  position :absolute;
  cursor: pointer;
  transition: .2;

  &:hover{
    width: 6.5%;
  }


  &:first-of-type{
    top:77%;
    margin-left :-15%;
  }
  &:nth-of-type(2){
    top:19%;
    margin-left :-10%;
  }
  &:nth-of-type(3){
    top:29%;
    margin-left :10%;
  }
  &:nth-of-type(4){
    top:65%;
    margin-left :-1%;
  }
  &:nth-of-type(5){
    top:37%;
    margin-left :-5%;
  }
  &:nth-of-type(6){
    top:70%;
    margin-left :15%;
  }
  &:nth-of-type(7){
    top:7%;
    margin-left :-5%;
  }
  &:nth-of-type(8){
    top:47%;
    margin-left :-5%;
  }
  &:last-of-type{
    top:45%;
    margin-left :10%;
  }
}

#perso{
  margin: 0 auto;
  position : relative;
svg{
  width:50%;
  margin: 0 auto;
  position : fixed;
  top: 30%;
  left : 60%;
}
#txtBulle{
  background: #A7FFFF;
  box-shadow:  20px 20px 60px #00808e, 
             -20px -20px 60px #00aec0;
  width: auto;
 height: auto;
 padding: 1px 5px;
  max-width: 36%;
  border-radius: 10px;

  &:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 0.625em solid transparent;
	border-top-color: #A7FFFF;
	border-bottom: 0;
	border-right: 0;
	margin-left: -0.312em;
	margin-bottom: -0.625em;
}

}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .9s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
.insertnom{
 background:none;
 border : none;
 border-bottom: 1px solid  #A7FFFF;
 }

}
.stMilieuBoule{fill:black;}
                .stTourBoule{fill:#A7FFFF;}
.st0{
  fill:#0097A7;
  // border: 15px solid red;
  // stroke:rgba(1, 136, 151, 0.13);
  // stroke-width:14;
}

#shadow {
 //  filter: drop-shadow(20px 20px 60px #00808e, -20px -20px 60px #00aec0);
   
 
}
	.st1, .st4{fill:#A7FFFF;}
	.st2{fill:none;stroke:#A7FFFF;stroke-width:14;stroke-linecap:round;stroke-miterlimit:10;}
	.st3{display:none;fill:#00556A;}
</style>