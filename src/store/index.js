import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user";
import languageModule from "./modules/language";
import authModule from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    languageModule,
    authModule
  }
});
