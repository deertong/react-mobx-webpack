import React from 'react'
import { storesContext } from './createStore'

export const useStores = () => React.useContext(storesContext)