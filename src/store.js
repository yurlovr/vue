import Vue from "vue";
import Vuex from "vuex";
import { COUNTRY } from "@/locales/locales";


const ROMAN = "roman";
const PASS = "qwerty";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: "",
    userPassword: "",
    lang: "rus",
    noAuth: false
  },
  getters: {
    getUserLogin: state => state.userLogin,
    getUserPassword: state => state.userPassword,
    getLang: state => state.lang,
    getNoAuth: state => state.noAuth
  },
  mutations: {
    SET_USER_LOGIN: (state, payload) => (state.userLogin = payload),
    SET_USER_PASSWORD: (state, payload) => (state.userPassword = payload),
    SET_LANG: (state, payload) => (state.lang = payload),
    SET_NO_AUTH: (state, payload) => (state.noAuth = payload)
  },
  actions: {
    setUserLogin: ({ commit }, payload) => commit("SET_USER_LOGIN", payload),
    setUserPassword: ({ commit }, payload) =>
      commit("SET_USER_PASSWORD", payload),
    setLang: ({ commit }, payload) => {
      switch (payload) {
        case COUNTRY.RUS: return commit("SET_LANG", COUNTRY.RUS);
        case COUNTRY.ENG: return commit("SET_LANG", COUNTRY.ENG);
        default: return ;
      }
    },
    setUserData: ({ commit }, payload) => {
        if(payload.default) {
            commit("SET_NO_AUTH", false);
            return;
        }

      if (payload.userLogin !== ROMAN && payload.userPassword !== PASS) {
        commit("SET_NO_AUTH", true);
      } else {
        console.log("есть такой пользователь");
        commit("SET_NO_AUTH", false);
      }
    }
  }
});
