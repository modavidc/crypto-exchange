import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";
import Chart from "chart.js";
import Chartkick from "vue-chartkick";

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

// import Chartkick from "vue-chartkick";
// import Chart from "chart.js";

// Vue.component("pulse-loader", require("vue-spinner/src/PulseLoader.vue"));
// Vue.use(Chartkick.use(Chart));

import router from "@/router";
import { dollarFilter } from "@/filters";
import { percentFilter } from "@/filters";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
