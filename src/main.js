import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import bootstraVue from './plugins/bootstrap-vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import { auth } from './firebase'

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAiPzM-jzrnZ3aUwbpe4lFE67CU8270rHs"
  }
})

Vue.config.productionTip = false

auth.onAuthStateChanged((user) => {
  console.log(user)
  if(user) {
    store.dispatch('auth/detectarUsuario', {email:user.email, uid:user.uid})
  }else {
    store.dispatch('auth/detectarUsuario', user)
  }

  new Vue({
    router,
    store,
    vuetify,
    bootstraVue,
    render: h => h(App)
  }).$mount('#app')
 
})


