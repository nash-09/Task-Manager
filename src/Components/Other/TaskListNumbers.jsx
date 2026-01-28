import React from 'react'

const TaskListNumbers = ({ employee }) => {
  if (!employee) return null

  return (
    <div className='font-semibold grid grid-cols-2 lg:flex gap-5 lg:justify-between mt-5 lg:mt-10 w-full text-xl lg:text-2xl'>

        <div className='bg-orange-400 text-orange-900 rounded h-24 lg:w-1/4 flex flex-col justify-center text-center'>
            <h1>{employee.taskNumbers.newTask}</h1>
            <h1>New Task</h1>
        </div>

        <div className='bg-yellow-400 text-yellow-900 px-2 text-center rounded h-24 lg:w-1/4 flex flex-col justify-center'>
            <h1>{employee.taskNumbers.completed}</h1>
            <h1>Complete Task</h1>
        </div>

        <div className='bg-pink-500 text-pink-900 rounded h-24 lg:w-1/4 flex flex-col justify-center text-center'>
            <h1>{employee.taskNumbers.active}</h1>
            <h1>Accept Task</h1>
        </div>

        <div className='bg-sky-400 text-sky-900 rounded h-24 lg:w-1/4 flex flex-col justify-center text-center'>
            <h1>{employee.taskNumbers.failed}</h1>
            <h1>Failed Task</h1>
        </div>
    </div>
  )
}

export default TaskListNumbers
