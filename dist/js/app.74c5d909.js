(function(e){function t(t){for(var s,o,n=t[0],l=t[1],u=t[2],b=0,m=[];b<n.length;b++)o=n[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,n=1;n<r.length;n++){var l=r[n];0!==a[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},a={app:0},i=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0ccc":function(e,t,r){e.exports=r.p+"img/pommier.b336e412.svg"},"315e":function(e,t,r){"use strict";var s=r("c13b"),a=r.n(s);a.a},"42a6":function(e,t,r){e.exports=r.p+"img/hetre.6887df40.svg"},"549a":function(e,t,r){e.exports=r.p+"img/bouleBleu.bcc7685b.svg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("289d"),i=(r("5abe"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("transition",{attrs:{name:"fade"}},[r("div",{staticClass:"columns is-centered"},[r("Intro",{on:{gogo:function(t){e.debut=!0}}})],1)]),r("transition",{attrs:{name:"fade"}},[e.debut?r("Sapin"):e._e()],1)],1)}),o=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"notification is-success column is-three-quarters is-mobile customnotif"},[r("div",{staticClass:"columns is-centered "},[r("div",{staticClass:"column  monintro "},[r("h2",{staticClass:"title is-2"},[e._v("Apprendre l'interface d'un ordinateur")]),e._m(0),r("p",[e._v("Salut à toi jeune apprenant. Je m'appelle Flantier et j'ai oublié d'enlever mon sapin de noël... C'est l'été, le sapin est vraiment en trop. Peux-tu m'aider à m'en débarrasser ? Si tu suis mes instructions je sourirais, à l'inverse, je ferais une grimace. ")]),r("button",{staticClass:"button intro-button",on:{click:function(t){e.debutclick(),e.show=!e.show}}},[e._v("C'est parti")])]),e._m(1)])]):e._e()},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticClass:"image is-square",attrs:{id:"bonhommesvgmob"}},[s("img",{attrs:{src:r("8fe5"),alt:"bonhomme"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column colonnebohnomme"},[s("div",{staticClass:"columns is-flex is-centered"},[s("figure",{staticClass:"image is-square",attrs:{id:"bonhommesvg"}},[s("img",{attrs:{src:r("8fe5"),alt:"bonhomme"}})])])])}],u={name:"Intro",data:function(){return{show:!0}},methods:{debutclick:function(){this.$emit("gogo")}}},c=u,b=(r("315e"),r("2877")),m=Object(b["a"])(c,n,l,!1,null,null,null),p=m.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"hero"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title is-1"},[e._v(" Boules de Noël ")])])])])}],h={name:"Header"},v=h,g=Object(b["a"])(v,d,f,!1,null,null,null),_=g.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("kinesis-container",{staticClass:"columns is-desktop",attrs:{tag:"div"}},[s("div",{staticClass:"boite column",class:{survol:e.compteurNom>0&&e.compteurArbre<3},style:{"background-image":"url("+e.choixArbre+")"},attrs:{id:"arbre"},on:{click:function(t){return e.dispaArbre()}}},[2==e.compteurArbre?s("div",{attrs:{id:"boitearbre"}},[s("transition",{attrs:{name:"fade"}},[s("img",{staticClass:"arbreachoisir",attrs:{id:"pin",alt:"arbre",src:r("9b70")},on:{click:function(t){return e.changeArbre("pin")}}})]),s("transition",{attrs:{name:"fade"}},[s("img",{staticClass:"arbreachoisir",attrs:{id:"palm",alt:"arbre",src:r("bda6")},on:{click:function(t){return e.changeArbre("palm")}}})]),s("transition",{attrs:{name:"fade"}},[s("img",{staticClass:"arbreachoisir",attrs:{id:"pommier",alt:"arbre",src:r("0ccc")},on:{click:function(t){return e.changeArbre("pommier")}}})]),s("transition",{attrs:{name:"fade"}},[s("img",{staticClass:"arbreachoisir",attrs:{id:"hetre",alt:"arbre",src:r("42a6")},on:{click:function(t){return e.changeArbre("hetre")}}})])],1):e._e(),s("div",{attrs:{id:"boiteboules"}},[0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"rouge",staticClass:"boule rouges",class:e.bouleSelect,attrs:{id:"boule1",src:r("f64b"),alt:"boule"},on:{click:function(t){e.sourireClick("rouge",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"bleue",staticClass:"boule bleues",class:e.bouleSelect,attrs:{id:"boule2",src:r("549a"),alt:"boule"},on:{click:function(t){e.sourireClick("bleue",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"jaune",staticClass:"boule jaunes",class:e.bouleSelect,attrs:{id:"boule3",src:r("eb9f"),alt:"boule"},on:{click:function(t){e.sourireClick("jaune",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"rouge",staticClass:"boule rouges",class:e.bouleSelect,attrs:{id:"boule4",src:r("f64b"),alt:"boule"},on:{click:function(t){e.sourireClick("rouge",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"bleue",staticClass:"boule bleues",class:e.bouleSelect,attrs:{id:"boule5",src:r("549a"),alt:"boule"},on:{click:function(t){e.sourireClick("bleue",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"jaune",staticClass:"boule jaunes",attrs:{id:"boule6",src:r("eb9f"),alt:"boule"},on:{click:function(t){e.sourireClick("jaune",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"jaune",staticClass:"boule jaunes",attrs:{id:"boule7",src:r("eb9f"),alt:"boule"},on:{click:function(t){e.sourireClick("jaune",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"rouge",staticClass:"boule rouges",attrs:{id:"boule8",src:r("f64b"),alt:"boule"},on:{click:function(t){e.sourireClick("rouge",t),e.auterboule()}}}):e._e(),0==e.compteurArbre||e.nouvellesboules?s("img",{ref:"bleue",staticClass:"boule bleues",attrs:{id:"boule9",src:r("549a"),alt:"boule"},on:{click:function(t){e.sourireClick("bleue",t),e.auterboule()}}}):e._e()])]),s("div",{staticClass:"boite column",attrs:{id:"perso"}},[s("div",{attrs:{id:"boitebulle"}},[s("div",{attrs:{id:"txtBulle"}},[s("transition",{attrs:{name:"fade"}},[e.compteurBoules<3?s("p",[e._v("Enlève les boules "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.laBoule)+"s")]),e._v(" en cliquant dessus")]):e._e()]),s("transition",{attrs:{name:"fade"}},[e.compteurBoules>=3&&e.compteurBoules<6?s("p",[e._v("Bien, maintenant, enlève les boules "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.laBoule)+"s")])]):e._e()]),s("transition",{attrs:{name:"fade"}},[e.compteurBoules>=6&&e.compteurBoules<9?s("p",[e._v("Il reste les boules "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.laBoule)+"s")])]):e._e()]),s("transition",{attrs:{name:"fade"}},[9==e.compteurBoules&&e.compteurNom<3?s("p",[e._v("Merci ! Au fait, tu t'appelles comment ?")]):e._e()]),s("transition",{attrs:{name:"fade"}},[e.compteurNom>=3&&0==e.compteurArbre?s("p",[e._v("Bonjour "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.blaze))]),e._v(", place au printemps. "),s("br"),e._v(" Clique sur le sapin pour le faire disparaître")]):e._e()]),s("transition",{attrs:{name:"fade"}},[1==e.compteurArbre?s("p",[e._v("Maintenant "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.blaze))]),e._v(", on va choisir un autre arbre. "),s("br"),e._v(" Si tu es d'accord, tape dans ma main !")]):e._e()]),s("transition",{attrs:{name:"fade"}},[2==e.compteurArbre?s("p",[e._v("Alors "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.blaze))]),e._v(", clique sur l'arbre de ton choix.")]):e._e()]),s("transition",{attrs:{name:"fade"}},[3==e.compteurArbre?s("p",[e._v(" Ah, un "+e._s(e.nomdelarbre)+" ! Très bon choix "),s("span",{staticClass:"has-text-weight-bold"},[e._v(e._s(e.blaze))]),e._v(", tu veux rejouer ? "),s("button",{staticClass:"button is-small",on:{click:function(t){e.compteurBoules=0,e.compteurNom=0,e.compteurArbre=0,e.changeArbre("sapin"),e.nouvellesboules=!0,e.blaze="",e.laBoule="bleue",e.chiffreSourire-=135}}},[e._v("en avant !")])]):e._e()])],1),s("br"),e._v(" "),9==e.compteurBoules&&0==e.compteurArbre?s("input",{directives:[{name:"model",rawName:"v-model",value:e.blaze,expression:"blaze"}],staticClass:"insertnom",attrs:{placeholder:"nom"},domProps:{value:e.blaze},on:{keydown:function(t){e.compteurNom+=1},input:function(t){t.target.composing||(e.blaze=t.target.value)}}}):e._e()]),s("div",{staticClass:"level"},[s("svg",{staticClass:"level-item",staticStyle:{"enable-background":"new 0 0 1024 768"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 927.5 432.9","xml:space":"preserve",id:"shadow"}},[s("kinesis-element",{attrs:{tag:"g",strength:15,type:"depth",id:"tete"}},[s("rect",{staticClass:"st0",attrs:{width:"394.6",height:"407"}})]),s("kinesis-element",{attrs:{tag:"g",strength:10,type:"depth",id:"nez"}},[s("g",[s("path",{staticClass:"st1",attrs:{d:"M198.2,184.7c1.1,5.2,1.9,10.5,2.8,15.7c0.8,5.2,1.5,10.5,2.1,15.7c0.3,2.6,0.9,5.2,1.3,7.9\n                c0.5,2.6,0.5,5.2,0.1,7.9c-0.4,2.6-1.1,5.2-2.1,7.9c-1,2.6-2.2,5.2-4.2,7.9c-0.3,0.4-0.8,0.5-1.2,0.2c-0.1,0-0.1-0.1-0.2-0.2\n                c-2-2.6-3.2-5.2-4.2-7.9c-1-2.6-1.6-5.2-2.1-7.9c-0.4-2.6-0.4-5.2,0.1-7.9c0.4-2.6,1.1-5.2,1.3-7.9c0.6-5.2,1.3-10.5,2.1-15.7\n                c0.9-5.2,1.7-10.5,2.8-15.7c0.1-0.4,0.5-0.6,0.8-0.6C197.9,184.2,198.1,184.4,198.2,184.7z"}})])]),s("kinesis-element",{attrs:{tag:"g",id:"eyeleft",strength:20,type:"depth"}},[s("line",{staticClass:"st2",attrs:{x1:"107.4",y1:"204.9",x2:"74.4",y2:"173.1"}}),s("line",{staticClass:"st2",attrs:{x1:"74.9",y1:"204.8",x2:"106.7",y2:"171.9"}})]),s("kinesis-element",{attrs:{tag:"g",id:"eyeRight",strength:20,type:"depth"}},[s("line",{staticClass:"st2",attrs:{x1:"288.3",y1:"171.5",x2:"317.7",y2:"206.5"}}),s("line",{staticClass:"st2",attrs:{x1:"320.5",y1:"174.9",x2:"285.5",y2:"204.4"}})]),s("kinesis-element",{attrs:{tag:"g",strength:10,type:"depth",id:"bouche"}},[s("path",{staticClass:"st1",attrs:{d:e.sourire}})]),e.lamain&&e.voirlamain?s("g",{staticClass:"survol",attrs:{id:"main"},on:{click:function(t){e.compteurArbre+=1,e.voirlamain=!1}}},[s("g",[s("path",{staticClass:"st4",attrs:{d:"M394,382.8h212.4c3.1,0,5.6,2.5,5.6,5.6v7.7c0,3.1-2.5,5.6-5.6,5.6H394V382.8z"}}),s("path",{staticClass:"st4",attrs:{d:"M527.3,359h36.3c9.9,0,18,7.2,18,16.1v40.4c0,8.9-8,16.1-18,16.1h-36.3c-9.9,0-18-7.2-18-16.1v-40.4\n\t\tC509.3,366.2,517.3,359,527.3,359z"}}),s("path",{staticClass:"st4",attrs:{d:"M516.7,372.1l97.7-19.7c2.5-0.5,5.4,3.3,6.4,8.4l0,0c1,5.1-0.2,9.7-2.7,10.2l-97.7,19.7\n\t\tc-1,0.2-2.2-1.3-2.6-3.4l-2.2-11.1C515.2,374.2,515.7,372.3,516.7,372.1z"}}),s("path",{staticClass:"st4",attrs:{d:"M523,384.4l99.7-1.7c2.6,0,4.7,4.2,4.8,9.4l0,0c0.1,5.2-1.9,9.5-4.5,9.6l-99.7,1.7c-1,0-1.9-1.7-1.9-3.8\n\t\tl-0.2-11.3C521.1,386.1,522,384.4,523,384.4z"}}),s("path",{staticClass:"st4",attrs:{d:"M516.6,404.9l99.3,9.1c2.5,0.2,4.2,4.7,3.7,9.9l0,0c-0.5,5.2-2.9,9.3-5.5,9l-99.3-9.1c-1-0.1-1.7-1.9-1.5-4\n\t\tl1-11.2C514.6,406.5,515.6,404.9,516.6,404.9z"}})])]):e._e()],1)])])])},x=[],k=r("cffa"),y={name:"Sapin",data:function(){return{chiffreSourire:11.1,arbre:{sapin:r("e4cf"),pin:r("9b70"),hetre:r("42a6"),palm:r("bda6"),pommier:r("0ccc"),rien:""},choixArbre:r("e4cf"),boules:["bleue","rouge","jaune"],laBoule:"bleue",messageBoule:"",bouleSelect:{active:!1},compteurBoules:0,compteurArbre:0,compteurNom:0,blaze:"",nouvellesboules:!1,lamain:!1,voirlamain:!1,nomdelarbre:""}},methods:{sourireClick:function(e,t){if(e===this.laBoule)return this.chiffreSourire+=15,this.compteurBoules+=1,t.preventDefault(),t.target.style.visibility="hidden";this.chiffreSourire-=15},auterboule:function(){this.compteurBoules<3&&(this.laBoule="bleue"),this.compteurBoules>=3&&(this.laBoule="rouge"),this.compteurBoules>=6&&(this.laBoule="jaune")},dispaArbre:function(){this.compteurNom>=3&&0==this.compteurArbre&&(this.choixArbre=this.arbre.rien,this.compteurArbre+=1,this.voirlamain=!0)},changeArbre:function(e){switch(this.compteurArbre+=1,e){case"pin":this.choixArbre=this.arbre.pin,this.nomdelarbre="pin";break;case"hetre":this.choixArbre=this.arbre.hetre,this.nomdelarbre="hêtre";break;case"pommier":this.choixArbre=this.arbre.pommier,this.nomdelarbre="pommier";break;case"palm":this.choixArbre=this.arbre.palm,this.nomdelarbre="palmier";break;case"sapin":this.choixArbre=this.arbre.sapin,this.compteurArbre=0;break}}},computed:{sourire:function(){return"M123,312.1c74.5,"+this.chiffreSourire+",148-2,148-2"}},created:function(){var e=this;setInterval((function(){e.lamain=!e.lamain}),800)},mounted:function(){var e=k["a"].timeline();e.to("#shadow",{duration:.2,filter:"drop-shadow(20px 20px 60px #00808e)",ease:"sine"}),e.from("#nez",{duration:.2,scale:0}),e.from("#eyeleft",{duration:.1,scale:0}),e.from("#eyeRight",{duration:.1,scale:0}),e.from("#bouche",{duration:.3,scale:0}),e.from("#boule1",{duration:.1,y:-900}),e.from("#boule2",{duration:.1,y:-1e3}),e.from("#boule3",{duration:.1,y:-1e3}),e.from("#boule4",{duration:.1,y:-1e3}),e.from("#boule5",{duration:.1,y:-1e3}),e.from("#boule6",{duration:.1,y:-1e3},"gogogo"),e.from("#boule7",{duration:.1,y:-1e3}),e.from("#boule8",{duration:.1,y:-1e3}),e.from("#boule9",{duration:.1,y:-1e3}),e.from("#txtBulle",{duration:.3,y:-500,scale:0,ease:"elastic.out(.5, 0.6)"},"gogogo+=.1")}},A=y,w=(r("ee9b"),Object(b["a"])(A,C,x,!1,null,null,null)),j=w.exports,B={name:"app",components:{Intro:p,Header:_,Sapin:j},data:function(){return{debut:!1}}},S=B,z=(r("5c0b"),Object(b["a"])(S,i,o,!1,null,null,null)),O=z.exports,M=r("09fd");s["a"].use(a["a"]),s["a"].component("kinesis-container",M["KinesisContainer"]),s["a"].component("kinesis-element",M["KinesisElement"]),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),a=r.n(s);a.a},"8fe5":function(e,t,r){e.exports=r.p+"img/bonhome.cefb89ed.svg"},"9b70":function(e,t,r){e.exports=r.p+"img/pin.79c4a14c.svg"},"9c0c":function(e,t,r){},bda6:function(e,t,r){e.exports=r.p+"img/palm.a57b3aec.svg"},c13b:function(e,t,r){},dcdc:function(e,t,r){},e4cf:function(e,t,r){e.exports=r.p+"img/sapinOK2.86f0b620.svg"},eb9f:function(e,t,r){e.exports=r.p+"img/bouleJaune.e9f9a4d6.svg"},ee9b:function(e,t,r){"use strict";var s=r("dcdc"),a=r.n(s);a.a},f64b:function(e,t,r){e.exports=r.p+"img/bouleRouge.f9847468.svg"}});
//# sourceMappingURL=app.74c5d909.js.map