import { COUNTRY } from '@/locales/locales'

export const setLang = ({ commit }, payload) => {
  switch (payload) {
    case COUNTRY.RUS:
      return commit('SET_LANG', COUNTRY.RUS)
    case COUNTRY.ENG:
      return commit('SET_LANG', COUNTRY.ENG)
    case COUNTRY.DE:
      return commit('SET_LANG', COUNTRY.DE)
    case COUNTRY.NL:
      return commit('SET_LANG', COUNTRY.NL)
    case COUNTRY.IT:
      return commit('SET_LANG', COUNTRY.IT)
    default:
      return
  }
}
