module.exports = {
  '/api': {
      target: 'https://jsonplaceholder.typicode.com',
      pathRewrite: {'^/api' : ''},
      secure: false,
      changeOrigin: true, //是否跨域
       // 关键部分
       cookieDomainRewrite: {
          '*': 'localhost' // 把相应的 cookie 域都设置成 localhost，也可以配置成自己电脑的ip，或者指定的域名
      }
  }
}