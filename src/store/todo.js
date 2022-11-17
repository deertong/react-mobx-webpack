import { observable, action, runInAction } from 'mobx'

class todo {
  @observable todoList = []
  @action.bound
  setList(param) {
    runInAction(() => {
      this.todoList = param
    })
  }
}
export default todo