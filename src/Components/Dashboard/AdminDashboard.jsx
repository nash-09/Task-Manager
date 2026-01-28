import React, { useState } from 'react'
import Header from '../Other/Header'
import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'

const AdminDashboard = ({changeUser,employees,setEmployees}) => {
  return (
    <div className='pl-5 pr-5 h-screen bg-slate-100'>

        <Header changeUser={changeUser}/>

        <div className='lg:flex lg:w-full lg:justify-between lg:gap-5'>
          <CreateTask employees={employees} setEmployees={setEmployees}/>
          <AllTask employees={employees}/>
        </div>
    </div>
  )
}

export default AdminDashboard
