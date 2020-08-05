import { observable, action } from 'mobx'
import { getlist } from '../server/test'

export default class Test {
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @observable
    list = []

    @action async getList() {
        const data = await getlist()
        this.list = data.data
    }
}