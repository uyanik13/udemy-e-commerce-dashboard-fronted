import {
    post,
    get,
    patch,
    _delete
} from '@/api/BaseApi'

const MODULE_NAME = 'product'

export default class ProductApi {

    static async index(id) {
        return get(MODULE_NAME)
    }

    static async get(id) {
        return get(`${MODULE_NAME}/${id}`)
    }

    static async store(data) {
        return post(MODULE_NAME, data)
    }

    static async update(data, id) {
        return post(`${MODULE_NAME}/${id}`, data)
    }

    static async delete(id) {
        return _delete(`${MODULE_NAME}/${id}`)
    }

}