import { createStore } from 'vuex'

export default createStore({
  state: {
    json: {},
  },
  mutations: {
    setJSON(state, json) {
      state.json = json
    },
    clearJSON(state, clear) {
      state.json = clear
    }
  },
  getters: {
    getJSON(state) {
      return state.json;
    },
  }
})
