const dev= require('./webpack/webpack.dev')
const prod= require('./webpack/webpack.prod')
const env = process.env.NODE_ENV
console.log(env)
if(env == 'development'){
  module.exports = dev
}
if(env == 'production'){
  module.exports = prod
}