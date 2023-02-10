import { createStore } from 'vuex'
import { fetchListItem } from '../api/index.js'

export default createStore({
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list
    }
  },
  actions: {
    FETCH_LIST(contenxt, pageName) {
      return fetchListItem(pageName)
        .then((res) => {
          contenxt.commit('SET_LIST', res.data);
          return res;
        }).catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})
