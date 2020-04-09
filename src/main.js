//need to use explicit path, and use the full browser version of vue in the node_modules folder that has 'esm' in the file name!.
import Vue from "../web_modules/vue/dist/vue.esm.browser.js";
import httpVueLoader from "../web_modules/http-vue-loader.js";

new Vue({
  el: "#app",

  components: {
    "s-main": httpVueLoader("/src/components/main.vue"),
  },

  data: () => ({
    helloWorld: "hello netizen",
  }),
});
