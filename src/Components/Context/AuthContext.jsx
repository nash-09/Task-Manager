import React, { createContext, useEffect } from 'react'
import { getItem, initializeStorage } from '../Utils/LocalStorage'

export const Context = createContext()

const AuthContext = ({ children }) => {

  useEffect(() => {
    initializeStorage()   // 👈 runs once
  }, [])

  const data = getItem()

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

export default AuthContext
