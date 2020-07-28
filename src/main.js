import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

Vue.use(Buefy)

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
