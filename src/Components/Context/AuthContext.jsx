import React, { createContext, useEffect, useState } from 'react'
import { getEmployees, getAdmin } from '../Utils/LocalStorage'

export const Context = createContext(null)

const AuthContext = ({ children }) => {
  const [employees, setEmployees] = useState([])
  const [admin, setAdmin] = useState([])
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  // 🔥 LOAD FROM LOCALSTORAGE AFTER INIT
  useEffect(() => {
    setEmployees(getEmployees())
    setAdmin(getAdmin())
  }, [])

  // 🔁 SYNC EMPLOYEES
  useEffect(() => {
    if (employees.length) {
      localStorage.setItem('Employees', JSON.stringify(employees))
    }
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
