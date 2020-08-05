import camelCase from 'lodash/camelCase'

const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(path => path !== './index.js')

class RootStore {
  constructor() {
    keys.forEach(path => {
      const Store = context(path).default
      const name = path.match(/\.\/(\w+)\.js/)[1]
      this[`${name}Store`] = Store
      this[`${camelCase(name)}Store`] = new Store(this)
    })
  }
}

const stores = new RootStore()

export { stores }
