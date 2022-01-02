export const bag = {
    namespaced: true,
    state: {
        name:'zhangsan'
    },
    mutations: {
        handle(state,payload){
            console.log('8998988');
            state.name = payload
        }
    },
    
}