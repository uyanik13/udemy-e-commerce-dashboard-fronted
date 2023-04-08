import {
    post,
    get,
    patch,
    _delete
} from '@/api/BaseApi'

const MODULE_NAME = 'post-tag'

export default class PostTagApi {

    static async index(data) {
        return get(MODULE_NAME)
    }

    static async store(data) {
        return post(MODULE_NAME, data)
    }

    static async update(data, id) {
        return patch(`${MODULE_NAME}/${id}`, data)
    }

    static async delete(id) {
        return _delete(`${MODULE_NAME}/${id}`)
    }

}