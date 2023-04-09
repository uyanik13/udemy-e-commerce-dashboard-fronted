import {
  get, post, patch, _delete
} from '@/api/BaseApi';

const MODULE_NAME = 'discount'

export default class DiscountApi {

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
