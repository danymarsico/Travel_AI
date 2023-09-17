import { createStore } from 'vuex'

export default createStore({
  state: {
    travelInfo:{
    city:"",
    days:0,
    travelPlan: ""
    }
  },
  getters: {
  },
  mutations: {
    SET_TRAVEL_PLAN(state, payload) {
      state.travelInfo.travelPlan = payload;
    },
    CLEAR_TRAVEL_INFO(state) {
      state.travelInfo = {
        city: "",
        days:0,
        travelPlan:""
      };
    },
  },
  actions: {
  },
  modules: {
  }
})
