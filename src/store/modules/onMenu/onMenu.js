export default{
    namespaced:true,
    state:{
        menuNm: '대시보드',
    },
    mutations:{
        CHANGE_NOW_MENU_NAME(state, payload){
            state.menuNm = payload;
        }
    },
    actions:{
        checkOnMenu({commit}, menuName){
            commit('CHANGE_NOW_MENU_NAME',menuName);
        }
    },
    getters:{
        
    }
}