import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    say: "hello world",
    nama: "",
    email: "",
    updateNama: "",
    updateEmail: "",
    findEmail: "",
    findNama: "",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
