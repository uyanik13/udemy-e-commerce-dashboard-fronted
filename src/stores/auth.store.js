import {
    defineStore
} from 'pinia';
import router from '@/router';
import AuthApi from '@/api/AuthApi';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
        returnUrl: 'dashboard'
    }),
    getters: {
        isAuthenticated() {
          return !!this.token;
        },
    },
    actions: {
        async login(loginData) {
            try {
                const response = await AuthApi.login(loginData);
                this.setUserData(response)
                router.push(this.returnUrl || '/');
            } catch (error) {
                console.error(error);
            }
        },
        async register(registerData) {
            try {
                const response = await AuthApi.register(registerData);
                this.setUserData(response)
                router.push(this.returnUrl || '/');
            } catch (error) {
                console.error(error);
            }
        },
        async logout  () {
            try {
                const response = await AuthApi.logout({user:this.user}).then(response=>{
                    this.clearUserData()
                });
                
            } catch (error) {
                console.error(error);
            }
        },
        setUserData(response) {
            this.user = response.user_data;
            localStorage.setItem('user', JSON.stringify(this.user));
            if(response.token){
                this.token = response.token;
                localStorage.setItem('token', this.token);
            }
        },
        clearUserData(response) {
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            router.push('/login');
        }
    }
});