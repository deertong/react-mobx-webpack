import React from 'react'
import todo from './todo'
export const storesContext = React.createContext({
  todoStore: new todo()
})