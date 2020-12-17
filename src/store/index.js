import { createStore } from 'vuex'

export default createStore({
  state: {
    pagesCount: 0
  },
  mutations: {
    increment (state) {
      state.pagesCount++
    },
    decrement (state) {
      if(state.pagesCount > 0){
        state.pagesCount--
      }
    }
  },
  actions: {
  },
  modules: {
  
  }
})
