<template>
  <kinesis-container tag="div"  class="columns is-desktop">
   
      <div class="boite column" @click="dispaArbre()" :style="{'background-image': 'url(' + choixArbre+ ')'}" id="arbre" :class="{survol : compteurNom>0}">
         <div v-if="compteurArbre == 2" id="boitearbre">

            <transition name="fade">
           <img @click="changeArbre('pin')" class="arbreachoisir"  id="pin" alt="arbre" :src="require('@/assets/pin.svg')">
           </transition>
            <transition name="fade">
           <img @click="changeArbre('palm')" class="arbreachoisir"  id="palm" alt="arbre" :src="require('@/assets/palm.svg')">
           </transition>
            <transition name="fade">
           <img @click="changeArbre('pommier')" class="arbreachoisir"  id="pommier" alt="arbre" :src="require('@/assets/pommier.svg')">
           </transition>
            <transition name="fade">
           <img @click="changeArbre('hetre')" class="arbreachoisir"  id="hetre" alt="arbre" :src="require('@/assets/hetre.svg')">
           </transition>

         </div>
         <div id="boiteboules">
         <!-- <img @click="sourireClick" v-for="i in 2" :key = "i" :id="'boule'+i"  :src="randomImage" alt="boule bleue" class="boule bun">  -->
         <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule1"  src="../assets/bouleRouge.svg" alt="boule" :class="bouleSelect" class="boule rouges"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('bleue', $event) ; auterboule()" ref="bleue" id="boule2"  src="../assets/bouleBleu.svg" alt="boule" :class="bouleSelect" class="boule bleues"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule3"  src="../assets/bouleJaune.svg" alt="boule" :class="bouleSelect" class="boule jaunes"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule4" src="../assets/bouleRouge.svg" alt="boule" :class="bouleSelect" class="boule rouges"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('bleue', $event) ; auterboule()" ref="bleue" id="boule5"  src="../assets/bouleBleu.svg" alt="boule" :class="bouleSelect" class="boule bleues"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule6"  src="../assets/bouleJaune.svg" alt="boule" class="boule jaunes"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('jaune', $event) ; auterboule()" ref="jaune" id="boule7"  src="../assets/bouleJaune.svg" alt="boule" class="boule jaunes"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('rouge', $event) ; auterboule()" ref="rouge" id="boule8" src="../assets/bouleRouge.svg" alt="boule" class="boule rouges"/>
          <img v-if="compteurArbre ==0 || nouvellesboules" @click="sourireClick('bleue', $event) ; auterboule()" ref="bleue" id="boule9"  src="../assets/bouleBleu.svg" alt="boule" class="boule bleues"/>
          
        </div>
        
      </div>

      <div class="boite column" id="perso">
        <div id="boitebulle">
        <div id="txtBulle">
          <transition name="fade">
          <p v-if ="compteurBoules <3">Enlève les boules <span class="has-text-weight-bold">{{laBoule}}s</span> en cliquant dessus</p>
           </transition>
           <transition name="fade">
          <p v-if ="compteurBoules >=3 && compteurBoules<6">Bien, maintenant, enlève les boules <span class="has-text-weight-bold">{{laBoule}}s</span></p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurBoules >=6 && compteurBoules<9">Il reste les boules <span class="has-text-weight-bold">{{laBoule}}s</span></p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurBoules ==9 && compteurNom <3">Merci ! Au fait, tu t'appeles comment ?</p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurNom >=3 && compteurArbre ==0">Bonjour <span class="has-text-weight-bold">{{blaze}}</span>, place au printemps. <br/> Clique sur le sapin pour le faire disparaître</p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurArbre ==1">Maintenant <span class="has-text-weight-bold">{{blaze}}</span>, on va choisir un autre arbre. <br/> Si tu es d'accord, tape dans ma main&nbsp;!</p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurArbre == 2">Alors <span class="has-text-weight-bold">{{blaze}}</span>, clique sur l'arbre de ton choix.</p>
          </transition>
           <transition name="fade">
          <p v-if ="compteurArbre == 3"> Ah, un {{nomdelarbre}} ! Très bon choix <span class="has-text-weight-bold">{{blaze}}</span>, tu veux rejouer&nbsp;? <button class="button is-small" @click="compteurBoules=0 ; compteurNom=0 ; compteurArbre=0 ; changeArbre('sapin') ; nouvellesboules = true ; blaze='' ; laBoule =  'bleue' ; chiffreSourire -= 135">en avant !</button></p>
          </transition>
         
        </div>
                                 <br/>   <input v-if ="compteurBoules ==9 && compteurArbre ==0" class="insertnom" v-model="blaze"  @keydown="compteurNom+=1" placeholder='nom'>

        </div>

        <div class="level">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 927.5 432.9" style="enable-background:new 0 0 1024 768;" xml:space="preserve" id="shadow" class="level-item">
          
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
            <g v-if ="lamain && voirlamain" @click="compteurArbre+=1; voirlamain= false" id="main" class="survol">
      <g>
	<path class="st4" d="M394,382.8h212.4c3.1,0,5.6,2.5,5.6,5.6v7.7c0,3.1-2.5,5.6-5.6,5.6H394V382.8z"/>
	<path class="st4" d="M527.3,359h36.3c9.9,0,18,7.2,18,16.1v40.4c0,8.9-8,16.1-18,16.1h-36.3c-9.9,0-18-7.2-18-16.1v-40.4
		C509.3,366.2,517.3,359,527.3,359z"/>
	<path class="st4" d="M516.7,372.1l97.7-19.7c2.5-0.5,5.4,3.3,6.4,8.4l0,0c1,5.1-0.2,9.7-2.7,10.2l-97.7,19.7
		c-1,0.2-2.2-1.3-2.6-3.4l-2.2-11.1C515.2,374.2,515.7,372.3,516.7,372.1z"/>
	<path class="st4" d="M523,384.4l99.7-1.7c2.6,0,4.7,4.2,4.8,9.4l0,0c0.1,5.2-1.9,9.5-4.5,9.6l-99.7,1.7c-1,0-1.9-1.7-1.9-3.8
		l-0.2-11.3C521.1,386.1,522,384.4,523,384.4z"/>
	<path class="st4" d="M516.6,404.9l99.3,9.1c2.5,0.2,4.2,4.7,3.7,9.9l0,0c-0.5,5.2-2.9,9.3-5.5,9l-99.3-9.1c-1-0.1-1.7-1.9-1.5-4
		l1-11.2C514.6,406.5,515.6,404.9,516.6,404.9z"/>
</g>
            </g>
          </svg>
      </div>
          
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
                  'bleue',
                  'rouge',
                  'jaune',
                ],
                laBoule: 'bleue',
                messageBoule: '',
                bouleSelect: {
                  active: false,
                },
                compteurBoules :0,
                compteurArbre :0,
                compteurNom :0,
                blaze:'',
                nouvellesboules: false,
                lamain: false,
                voirlamain : false,
                nomdelarbre : ''
               
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
            this.laBoule =  'bleue';
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
        this.voirlamain=true;

        }

      },

      changeArbre(tree){
        this.compteurArbre +=1;
        switch (tree) {
          case 'pin':
            this.choixArbre = this.arbre.pin;
            this.nomdelarbre = 'pin';
             break;
           
          case 'hetre':
            this.choixArbre = this.arbre.hetre;
            this.nomdelarbre= 'hêtre';
             break;
           
          case 'pommier':
            this.choixArbre = this.arbre.pommier;
            this.nomdelarbre= 'pommier';
             break;
           
          case 'palm':
            this.choixArbre = this.arbre.palm;
            this.nomdelarbre= 'palmier';
             break;
           
          case 'sapin':
            this.choixArbre = this.arbre.sapin;
             this.compteurArbre =0;
             break;
           
        }
      },

      
      
  },
   computed: {

   
    sourire : function () {
      return "M123,312.1c74.5,"+ this.chiffreSourire +",148-2,148-2"
    }
  },

   created() {
     setInterval(()=> {
       this.lamain = !this.lamain
     }, 800)
  },

   mounted: function(){
     
    

    
    var tl = gsap.timeline();
    // tl.from("#arbre", {duration:1, opacity: 0})
       tl.to('#shadow', { duration: .2, filter: "drop-shadow(20px 20px 60px #00808e)", ease: "sine"})

    tl.from('#nez', { duration: .2, scale: 0,})
    tl.from('#eyeleft', { duration: .1, scale: 0,})
    tl.from('#eyeRight', { duration: .1, scale: 0,})
    tl.from('#bouche', { duration: .3, scale: 0,})
    tl.from('#boule1', { duration: .1, y: -900,})
    tl.from('#boule2', { duration: .1, y: -1000,})
    tl.from('#boule3', { duration: .1, y: -1000,})
    tl.from('#boule4', { duration: .1, y: -1000,})
    tl.from('#boule5', { duration: .1, y: -1000,})
    tl.from('#boule6', { duration: .1, y: -1000,}, "gogogo")
    tl.from('#boule7', { duration: .1, y: -1000,})
    tl.from('#boule8', { duration: .1, y: -1000,})
    tl.from('#boule9', { duration: .1, y: -1000,})
    tl.from('#txtBulle', { duration: .3, y: -500,scale: 0, ease : "elastic.out(.5, 0.6)"}, "gogogo+=.1");


   
  },
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">

html, body {
    background: #0097A7;
}
#app{
      background: #0097A7;
  //  height : 100vh;
}


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
  @media only screen and (max-width: 768px) {
    height: 50vh;
  }
  //width: 50%;
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
  justify-content: center;
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

#shadow{
   @media only screen and (max-width: 768px) {
    //position : absolute;
     width:80%;
     top: 5%;
     margin-bottom: 15%;
  }
  //width : 33px;
   margin: 5% 0 0 22%;
  // width:50%;
  // margin: 0 auto;
  // position : fixed;
  // top: 30%;
  // left : 60%;
}
#boitebulle{
  min-height: 26%;
}
#txtBulle{
  @media only screen and (max-width: 768px) {
    max-width: 55%;
  }
  background: #A7FFFF;
  box-shadow:  20px 20px 60px #00808e, 
             -20px -20px 60px #00aec0;
  width: auto;
 height: auto;
 padding: 8px 12px;
  max-width: 36%;
  border-radius: 10px;
  margin-left: 15%;

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
.fade-enter-active {
  transition: all .4s;
}
.fade-leave-active {
  transition: all 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: scale(0, 0);
  font-size : 0px;
}
.insertnom{
 background:none;
 border : none;
 border-bottom: 1px solid  #A7FFFF;
 &::placeholder{
   color: #A7FFFF;
 }
 }

}



#tete{
  z-index: 1000;
}
#main{
  z-index: 1;
}
.survol{
  cursor :pointer;
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