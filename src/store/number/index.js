import state from './state' // 导出的 一个对象
import mutations from './mutations'
import actions from './actions'
export default {
    // 空间命名
    namespaced: true,
    state,
    mutations,
    actions
}