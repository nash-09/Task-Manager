import React, { createContext, useEffect } from 'react'
import { getItem, initializeStorage } from '../Utils/LocalStorage'

export const Context = createContext()

const AuthContext = ({ children }) => {

  const data = getItem()

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

export default AuthContext
