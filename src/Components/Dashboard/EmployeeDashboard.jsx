import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import Tasklist from '../Other/Tasklist'

const EmployeeDashboard = ({ emp, setEmployees, changeUser }) => {
  if (!emp) return null

  return (
    <div className="p-5 bg-slate-100">
      <Header data={emp} changeUser={changeUser} />
      <TaskListNumbers employee={emp} />
      <Tasklist emp={emp} setEmployees={setEmployees} />
    </div>
  )
}

export default EmployeeDashboard
