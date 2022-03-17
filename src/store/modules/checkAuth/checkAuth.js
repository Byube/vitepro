export default{
    namespaced:true,
    state:{
        isAuthenticated: false,
    },
    mutations:{
        SET_IS_AUTHENTICATED(state, payload){
            state.isAuthenticated = payload;
        },
    },
    actions:{
        setIsAuthenticated({commit}, status){
            commit('SET_IS_AUTHENTICATED',status);
        },
    },
    getters:{
        
    }
}