import Vue from 'vue'
import Vuex from 'vuex'
import {bag} from './bag'
import {file} from './file'
console.log(bag);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'haojie'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bag,
    file
  }
})
