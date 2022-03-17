import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export const CheckOnLogin = () => {
    const router = useRouter();
    const store = useStore();
    const isAuthenticated = computed(()=>store.state.checkAuth.isAuthenticated);
    const login = () => {
        //임시 isAuthenricated로 지정 차후 token 값으로 확인 예정
        router.push({path:'/'})
        localStorage.setItem('isAuthenticated',true);
        store.dispatch('checkAuth/setIsAuthenticated', true);
    };
    const logout = () => {
        router.push({
            path:'/signIn'
        });
        localStorage.removeItem('isAuthenticated');
        store.dispatch('checkAuth/setIsAuthenticated', false);
    };
    return {
        isAuthenticated,
        login,
        logout
    }
}