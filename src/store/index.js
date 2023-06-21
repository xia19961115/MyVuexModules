import Vue from 'vue'
import Vuex from 'vuex'
// 插件
import plugins from './plugins'
// getters
import getters from './getters'
// 分包
import number from './modules/number'
import file from './modules/file'
import bag from './modules/bag'

Vue.use(Vuex)

export default new Vuex.Store({
  // getters 的用法
  getters,
  modules: {
    bag,
    file,
    number
  },
  plugins: [plugins]
})
