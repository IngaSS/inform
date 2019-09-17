import 'mutationobserver-shim'
import '@babel/polyfill'
import vuetify from './plugins/vuetify';
import Vue from 'vue'
// import './plugins/bootstrap-vue'
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')