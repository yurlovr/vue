import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: "",
    userPassword: ""
  },
  getters: {
    getUserLogin: state => state.userLogin,
    getUserPassword: state => state.userPassword
  },
  mutations: {
    SET_USER_LOGIN: (state, payload) => (state.userLogin = payload),
    SET_USER_PASSWORD: (state, payload) => (state.userPassword = payload)
  },
  actions: {
    setUserLogin: ({ commit }, payload) => commit("SET_USER_LOGIN", payload),
    setUserPassword: ({ commit }, payload) =>
      commit("SET_USER_PASSWORD", payload)
  }
});
