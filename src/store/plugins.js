// 持久化插件
import createPersistedState from 'vuex-persistedstate'
export default createPersistedState({
    key: 'vuexKey', // 默认值 vuex
    paths: ['number'], // 部分路径可部分保留状态的数组。如果没有给出路径，则将保留完整状态。如果给出一个空数组，则不会保留任何状态。必须使用点符号指定路径。如果使用模块，请包括模块名称（默认：[]）
})