import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import EleForm from 'vue-ele-form'
import EleFormImageUploader from '../lib/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(EleForm, {
  upload: {
    fileSize: 10
  }
})
Vue.component('image-uploader', EleFormImageUploader)

new Vue({
  render: h => h(App)
}).$mount('#app')
