import { postData } from '@/lib/api'

const NO_AUTH_USER = 'user not found'
const URL_AUTH = 'https://192.168.88.60:8443/api/login'

export const setUserData = ({ commit }, payload) => {
  if (payload.default) {
    commit('SET_NO_AUTH', false)
    return
  }

  postData(URL_AUTH, {
    login: payload.userLogin,
    password: payload.userPassword
  })
    .then(data => {
      if (data.message === NO_AUTH_USER) {
        commit('SET_NO_AUTH', true)
      } else {
        commit('SET_NO_AUTH', false)
      }
    })
    .catch(error => console.log(error))
}
