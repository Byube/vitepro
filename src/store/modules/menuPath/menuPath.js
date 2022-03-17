export default{
    namespaced:true,
    state:{
        pathObject: {}, 
    },
    mutations:{
        SET_MENU_PATH(state,payload){
            state.pathObject = payload;
        }
    },
    actions:{
        setMenuPath ({commit},status)  {
            commit('SET_MENU_PATH',status);
        },
    },
 
}