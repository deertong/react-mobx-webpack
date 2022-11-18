import { observable, action, runInAction,makeAutoObservable } from 'mobx'

class todo {
  constructor(){
    makeAutoObservable(this)
  }
  @observable todoList = []
  @action.bound
  setList(param) {
    runInAction(() => {
      this.todoList = param
    })
  }
}
export default todo