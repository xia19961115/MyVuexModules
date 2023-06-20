import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import getters from './getters'
import {bag} from './bag'
import {file} from './file'
import number from './number'
console.log(number);
console.log(bag);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'haojie'
  },
  // getters 的用法
  getters,
  modules: {
    bag,
    file,
    number
  },
  plugins: [plugins]
})
