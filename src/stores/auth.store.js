import {
    defineStore
} from 'pinia'
import axios from '@/plugins/axios'
import router from '@/router'


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
            axios.post('login', data).then(res => {
               this.setUserData(res)
                return router.push({
                    name: 'dashboard'
                })
            })
        },
        async register(data) {
            axios.post('register', data).then(res => {
               this.setUserData(res)
                return router.push({
                    name: 'dashboard'
                })
            })
        },
        setUserData(res) {
            this.user = res.data.user
            localStorage.setItem('user', JSON.stringify(this.user))
            if (res.data.token) {
                this.token = res.data.token
                localStorage.setItem('token', this.token)
            }

        }
    }

})