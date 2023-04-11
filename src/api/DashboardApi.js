import {
    post,
    get,
    patch,
    _delete
} from '@/api/BaseApi'

const MODULE_NAME = 'dashboard'

export default class DashboardApi {

    static async index(id) {
        return get(MODULE_NAME)
    }


}