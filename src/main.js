import Vue from 'vue'
import App from './App.vue'

Vue.component('ScriptOne', require('./mixins/HomePage').default);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
