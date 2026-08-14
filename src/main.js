import { createApp } from 'vue'
import 'bulma/css/bulma.min.css'
import App from './App.vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

createApp(App)
  .component('kinesis-container', KinesisContainer)
  .component('kinesis-element', KinesisElement)
  .mount('#app')
