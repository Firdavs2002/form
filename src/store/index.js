import { createStore } from 'vuex'

export default createStore({
  state: {
    json: {},
    items: [
      {
        name: 'name',
        type: 'text',
        value: '',
        placeholder: 'имя'
      },
      {
        name: 'surname',
        type: 'text',
        value: '',
        placeholder: 'фамилия'
      },
      {
        name: 'birthDate',
        type: 'date',
        value: '',
        placeholder: ''
      },
    ],
    select: ''
  },
  mutations: {
    setJSON(state, json) {
      state.json = json
    },
    clearItems(state, clear) {
      // очищаем поля
      state.items.forEach(e => e.value = '')

      state.select = clear;
    },
    selected(state, select) {
      state.select = select
    }
  },
  getters: {
    getJSON(state) {
      return state.json;
    },
    getItems(state) {
      return state.items;
    },
    getSelect(state) {
      return state.select
    }
  }
})
