import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './routers/index.jsx'
import { stores } from './store/index'
import './main.scss'


ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app'))