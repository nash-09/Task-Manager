import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getEmployees, getAdmin } from './Components/Utils/LocalStorage'

const App = () => {

  const [employees, setEmployees] = useState(() => getEmployees())
  const [admin] = useState(() => getAdmin())
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  // 🔁 sync employees
  useEffect(() => {
    localStorage.setItem('Employees', JSON.stringify(employees))
  }, [employees])

  // 🔁 auto login
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('LoggedInUser'))
    if (!stored) return
    setUser(stored.role)
    if (stored.role === 'employee') setUserId(stored.id)
  }, [])

  const handleLogin = (email, password) => {
    if (email === admin[0]?.email && password === admin[0]?.password) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const emp = employees.find(
      e => e.email === email && e.password === password
    )

    if (!emp) return alert('Invalid Credentials')

    setUser('employee')
    setUserId(emp.id)
    localStorage.setItem(
      'LoggedInUser',
      JSON.stringify({ role: 'employee', id: emp.id })
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
