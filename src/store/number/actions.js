export default {
    handleActions({commit},payload) {
        setTimeout(()=>{
            // state.num += payload
            commit('handle',payload)
        },300)
    }
}