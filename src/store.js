import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: "",
    userPassword: "",
  },
  getters: {
    getUserLogin: state => {return state.userLogin},
    getUserPassword: state => {return state.userPassword},
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.userLogin = payload;
    },
    SET_PASSWORD: (state, payload) => {
      state.userPassword = payload;
    },
  },
  actions: {
  }
});
