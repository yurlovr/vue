import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: "",
    userPassword: "",
    lang: "rus",
  },
  getters: {
    getUserLogin: state => state.userLogin,
    getUserPassword: state => state.userPassword,
    getLang: state => state.lang,
  },
  mutations: {
    SET_USER_LOGIN: (state, payload) => (state.userLogin = payload),
    SET_USER_PASSWORD: (state, payload) => (state.userPassword = payload),
    SET_LANG: (state,payload) => state.lang = payload,
  },
  actions: {
    setUserLogin: ({ commit }, payload) => commit("SET_USER_LOGIN", payload),
    setUserPassword: ({ commit }, payload) =>
      commit("SET_USER_PASSWORD", payload),
    setLang: ({commit}, payload) => {
      if (payload === "rus") {
        commit("SET_LANG","eng")
      } else {
        commit("SET_LANG","rus")
      }
    }

  }
});
