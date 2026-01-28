import React, { createContext, useState, useEffect } from 'react'
import { getEmployees, getAdmin } from '../Utils/LocalStorage'

export const Context = createContext(null)

const AuthContext = ({ children }) => {
  const [employees, setEmployees] = useState(() => getEmployees())
  const [admin] = useState(() => getAdmin())
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  // 🔁 keep Employees synced
  useEffect(() => {
    localStorage.setItem('Employees', JSON.stringify(employees))
  }, [employees])

  return (
    <Context.Provider
      value={{
        employees,
        setEmployees,
        admin,
        user,
        setUser,
        userId,
        setUserId
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default AuthContext
