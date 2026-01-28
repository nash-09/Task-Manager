import React, { useContext } from 'react'

const AllTask = ({employees}) => {
  return (
    <div className='bg-white rounded-xl shadow-lg mt-5 text-lg lg:text-2xl p-2 flex lg:flex-col gap-2 lg:w-1/2'>
      <div className='flex lg:flex-row text-center gap-2 lg:gap-0 bg-slate-800 text-white p-2 rounded flex-col justify-between items-center'>
        <h1>Employee <br />Name</h1>
        <h1>New <br />Task</h1>
        <h1>Active <br />Task</h1>
        <h1>Completed <br />Task</h1>
        <h1>Failed <br />Task</h1>
      </div>

      <div id='info' className='flex lg:flex-col gap-3 overflow-auto'>
        {employees.map((e,idx) => {
          return <div key={idx} className='lg:flex-row flex flex-col lg:w-full w-fit justify-between bg-slate-100 items-center p-2 rounded font-semibold'>
          <h1 className='text-slate-800'>{e.firstName}</h1>
          <h1 className='bg-orange-100 text-orange-700 px-4 rounded-3xl'>{e.taskNumbers.newTask}</h1>
          <h1 className='bg-pink-100 text-pink-700 px-4 rounded-3xl'>{e.taskNumbers.active}</h1>
          <h1 className='bg-green-100 text-green-700 px-4 rounded-3xl'>{e.taskNumbers.completed}</h1>
          <h1 className='bg-red-100 text-red-700 px-4 rounded-3xl'>{e.taskNumbers.failed}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default AllTask
