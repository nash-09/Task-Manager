import React from 'react'

const NewTask = ({ e, emp, setEmployees }) => {

  const acceptTask = () => {
    setEmployees(prev => prev.map(employee => employee.id === emp.id ? {...employee, tasks: employee.tasks.map(t => t.id === e.id ? { ...t, newTask: false, active: true } : t), taskNumbers: {...employee.taskNumbers, newTask: employee.taskNumbers.newTask - 1,active: employee.taskNumbers.active + 1}} : employee))
  }

  return (
    <div className='border-violet-500 border-4 p-3 rounded lg:w-80 shrink-0'>

      <div className='flex justify-between items-center mb-2'> 
        <h1 className='bg-white text-violet-600 px-1 lg:px-2 lg:py-1 rounded py-[2px] text-xl lg:text-2xl'>{e.category}</h1> 
        <h1 className='lg:text-xl text-violet-600'>{e.date}</h1> 
      </div>

      <h1 className='text-xl lg:text-2xl font-semibold mb-2 text-violet-900'>{e.title}</h1> 
      <h1 className='lg:text-xl text-violet-700'>{e.description}</h1> 
      
      <div className='flex justify-center'> 
        <button onClick={acceptTask} className='mt-2 hover:bg-green-600 text-white w-full lg:w-fit active:scale-75 bg-green-500 px-1 py-[2px] rounded lg:text-lg lg:px-2 lg:py-1'>Accept Task</button> 
      </div> 
    </div> 
  )
}

export default NewTask
