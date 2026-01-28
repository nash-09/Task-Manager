import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { seedLocalStorage, getEmployees, getAdmin } from './Components/Utils/LocalStorage'

const App = () => {

  // ✅ seed default data ONCE
  useEffect(() => {
    seedLocalStorage()
  }, [])

  // ✅ ALWAYS array, never null
  const [employees, setEmployees] = useState(() => getEmployees())

  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  // ✅ sync state → localStorage
  useEffect(() => {
    localStorage.setItem('Employees', JSON.stringify(employees))
  }, [employees])

  // ✅ restore login
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('LoggedInUser'))
    if (!stored) return

    setUser(stored.role)
    if (stored.role === 'employee') setUserId(stored.id)
  }, [])

  const handleLogin = (email, password) => {
    const admin = getAdmin()[0]

    if (email === admin.email && password === admin.password) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const employee = employees.find(
      e => e.email === email && e.password === password
    )

    if (!employee) {
      alert('Invalid Credentials')
      return
    }

    setUser('employee')
    setUserId(employee.id)
    localStorage.setItem(
      'LoggedInUser',
      JSON.stringify({ role: 'employee', id: employee.id })
    )
  }

  const logout = () => {
    setUser(null)
    setUserId(null)
    localStorage.removeItem('LoggedInUser')
  }

  const currentEmployee = employees.find(e => e.id === userId)

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && (
        <AdminDashboard
          employees={employees}
          setEmployees={setEmployees}
          changeUser={logout}
        />
      )}

      {user === 'employee' && currentEmployee && (
        <EmployeeDashboard
          emp={currentEmployee}
          setEmployees={setEmployees}
          changeUser={logout}
        />
      )}
    </>
  )
}

export default App
