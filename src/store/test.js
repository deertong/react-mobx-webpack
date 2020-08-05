import { observable, action } from 'mobx'
import { getlist } from '../server/test'

export default class Test {
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @observable
    list = []
    @observable
    loading = false
    @action async getList() {
        this.loading =true
        const data = await getlist()
        this.loading =false
        this.list = data.data
    }
}