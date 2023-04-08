import {
    defineStore
} from 'pinia'
import axios from '@/plugins/axios'
import router from '@/router'
import AuthAPI from '@/api/AuthApi'


export const useAuthStore = defineStore({

    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token'),
    }),
    getters: {
        isAuthenticated() {
            return !!this.token
        }
    },
    actions: {
        async login(data) {
            try {
                const response = await AuthAPI.login(data);
                this.setUserData(response)
                return router.push({
                    name: 'dashboard'
                })
            } catch (error) {
                console.log(error)
            }
        },
        async register(data) {
            try {
                const response = await AuthAPI.register(data);
                this.setUserData(response)
                return router.push({
                    name: 'dashboard'
                })
            } catch (error) {
                console.log(error)
            }
        },
        setUserData(res) {
            this.user = res.user
            localStorage.setItem('user', JSON.stringify(this.user))
            if (res.token) {
                this.token = res.token
                localStorage.setItem('token', this.token)
            }

        }
    }

})