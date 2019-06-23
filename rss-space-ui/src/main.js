import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt,faUserPlus,faCaretDown, faCaretRight, faCog, faPlusSquare,faBurn, faNewspaper, faSignInAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCog)
library.add(faPlusSquare)
library.add(faBurn)
library.add(faNewspaper)
library.add(faSignInAlt)
library.add(faSignOutAlt)
library.add(faCaretDown)
library.add(faCaretRight) 
library.add(faUserPlus) 
Vue.component('font-awesome-icon', FontAwesomeIcon)
 
Vue.config.productionTip = false
Vue.store= Vue.prototype.store = false;
Vue.config.productionTip = false
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
//Vue.use(GoTop);
Vue.use(BootstrapVue)

let globalData = new Vue({
  data: { $isLoginGlobal: false , $isLoginMain: false }
});
Vue.mixin({
  computed: {
    $isLoginGlobal: {
      get: function () { return globalData.$data.$isLoginGlobal},
      set: function (newValue) { globalData.$data.$isLoginGlobal = newValue; }
    },
    $isLoginMain: {
      get: function () { return globalData.$data.$isLoginMain},
      set: function (newValue) { globalData.$data.$isLoginMain = newValue; } 
    },
    $userId: {
      get: function () { return globalData.$data.$userId},
      set: function (newValue) { globalData.$data.$userId = newValue; } 
    }
  }
})



new Vue({
  render: h => h(App),
}).$mount('#app')
