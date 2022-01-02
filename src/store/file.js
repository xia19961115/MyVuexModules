export const file = {
    // 空间命名
    namespaced:true,
    state: {
        num: 1
    },
    // 同步操作
    mutations: {
        handle(state,payload = 1){
            console.log(payload);
            state.num = state.num + payload
        }
    },
    // 对数据异步操作
    actions:{
        handleV({commit},payload) {
            console.log('commit',commit);
            setTimeout(()=>{
                // state.num += payload
                commit('handle',payload)
            },2000)
        }
    }
}