import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count: 0,
  },
  getters:{
    getCount: state =>  state.count
  },
  mutations:{
    increment(state){
      state.count ++
    }
  },
  action:{}
})

export default store;