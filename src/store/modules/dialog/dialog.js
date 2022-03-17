export default{
    namespaced:true,
    state:{
        Confirmation: false,
        Message:''
    },
    mutations:{
        CHANGE_CONFIRMATION_TOGGLE(state, payload){
            state.Confirmation = payload;
        },
        CHANGE_MESSAGE(state, payload){
            state.Message = payload;
        }
    },
    actions:{
        changeConfirmation({commit}, status){
            commit('CHANGE_CONFIRMATION_TOGGLE',status);
        },
        changeMessage({commit}, message){
            commit('CHANGE_MESSAGE',message);
        }
    },
    getters:{
        
    }
}