import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getItem, setItem } from './Components/Utils/LocalStorage'

const App = () => {

  const initialData = getItem() || []

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('Employees')) || initialData.employees)

  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)
  
  useEffect(() => {
    localStorage.setItem('Employees', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('LoggedInUser'))
    if (!stored) return
    setUser(stored.role)
    if (stored.role === 'employee') setUserId(stored.id)
  }, [])

  const handleLogin = (email, password) => {
    const admin = initialData.admin[0]
    if (email === admin.email && password === admin.password) {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const employee = employees.find(e => e.email === email && e.password === password)

    if (!employee) {
      alert('Invalid Credentials')
      return
    }
    setUser('employee')
    setUserId(employee.id)
    localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', id: employee.id }))
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

      {user === 'admin' && (<AdminDashboard employees={employees} setEmployees={setEmployees} changeUser={logout}/>)}

      {user === 'employee' && currentEmployee && (<EmployeeDashboard emp={currentEmployee}setEmployees={setEmployees} changeUser={logout}/>)}
    </>
  )
}

export default App
