import {
    post
} from '@/api/BaseApi'

export default class Auth {

   static async login(data) {
        return post('login', data)
    }

    static  async register(data) {
        return post('register', data)
    }

    static async logout(data) {
        return post('logout', data)
    }

}