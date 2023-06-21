import state from './state'
import mutations from './mutations'
import actions from './actions'
export default {
    // 空间命名
    namespaced: true,
    state,
    mutations,
    actions
}