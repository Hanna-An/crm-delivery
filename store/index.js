export const state = () => ({
  token: true
})

export const mutations = {
  addToken (state, token) {
    console.log(token)
    state.token = token
  },
  removeToken (state) {
    state.token = false
  }
}
