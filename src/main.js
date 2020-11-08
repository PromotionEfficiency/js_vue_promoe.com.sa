import Vue from 'vue';
import vueHeadful from 'vue-headful';
import App from './App.vue';
import './plugins/bootstrap-vue';
import '@babel/polyfill';
import 'mutationobserver-shim';
import './assets/css/main.scss';
import VueCarousel from 'vue-carousel';
import router from './router';
import * as VueGoogleMaps from "vue2-google-maps";
import jsonData from "./assets/db.json";
import axios from "axios";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAsu3jD6SZw8WiJq6xOYzIkRTwKTu1S7Y0",
    libraries: "places" // necessary for places input
  }
});


Vue.component('vue-headful', vueHeadful);
Vue.use(VueCarousel);

const publicPath =  process.env.BASE_URL;

async function makeGetRequest() {
  let res = await axios.get(publicPath + 'assets/db.json');
  let data = res.data;
  return data;
}

Vue.prototype.jsonData = jsonData;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  created(){
    console.log(this.jsonData)
  },
  beforeMount(){
    this.fetchData();
    console.log(this.jsonData);
  },
  methods: {
    async fetchData(){
      const { data } = await axios.get(publicPath + 'assets/db.json');
      this.jsonData = data;
    }
  }
  
}).$mount('#app');
