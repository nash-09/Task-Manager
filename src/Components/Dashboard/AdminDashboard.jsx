import React, { useState } from 'react'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'

const AdminDashboard = ({changeUser,employees,setEmployees}) => {
  return (
    <div className='pl-5 pr-5 h-screen bg-slate-100'>
        <h1 className='text-4xl text-slate-900 lg:text-5xl font-serif text-center font-semibold mb-5'>Admin Panel</h1>

        <Header changeUser={changeUser}/>

        <div className='lg:flex lg:w-full lg:justify-between lg:gap-5'>
          <CreateTask employees={employees} setEmployees={setEmployees}/>
          <AllTask employees={employees}/>
        </div>
    </div>
  )
}

export default AdminDashboard
