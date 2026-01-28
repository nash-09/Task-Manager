import React, { createContext, useState } from 'react'
import { getItem } from '../Utils/LocalStorage'

export const Context = createContext()

const AuthContext = ({children}) => {

  const data = getItem() || []

  return (
    <div>
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default AuthContext
