import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt,faCaretDown, faCaretRight, faCog, faPlusSquare,faBurn, faNewspaper, faSignInAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog)
library.add(faPlusSquare)
library.add(faBurn)
library.add(faNewspaper)
library.add(faSignInAlt)
library.add(faSignOutAlt)
library.add(faCaretDown)
library.add(faCaretRight) 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false


Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
