import { COUNTRY } from "../../../locales/locales";

export const setLang = ({ commit }, payload) => {
  switch (payload) {
    case COUNTRY.RUS:
      return commit("SET_LANG", COUNTRY.RUS);
    case COUNTRY.ENG:
      return commit("SET_LANG", COUNTRY.ENG);
    default:
      return;
  }
};
