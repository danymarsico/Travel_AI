import { createStore } from 'vuex'

export default createStore({
  state: {
    city:"",
    days:0,
    travelPlan: ""
  },
  getters: {
  },
  mutations: {
    SET_TRAVEL_PLAN(state, payload) {
      state.travelPlan = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
