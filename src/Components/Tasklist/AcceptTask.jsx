import React from 'react'

const AcceptTask = ({ e, emp, setEmployees }) => {

  const updateStatus = status => {
    setEmployees(prev => prev.map(employee => employee.id === emp.id ? {...employee, tasks: employee.tasks.map(t => t.id === e.id ? { ...t, active: false, [status]: true } : t), taskNumbers: {...employee.taskNumbers, active: employee.taskNumbers.active - 1, [status]: employee.taskNumbers[status] + 1}}: employee))}

  return (
    <div className='border-4 border-violet-500 p-3 rounded lg:w-80 shrink-0'>

        <div className='flex justify-between items-center mb-2'>
          <h1 className='bg-white text-violet-600 px-1 lg:px-2 lg:py-1 rounded py-[2px] text-xl lg:text-2xl'>{e.category}</h1>
          <h1 className='lg:text-xl text-violet-600'>{e.date}</h1>
        </div>
        
        <h1 className='text-xl lg:text-2xl font-semibold mb-2 text-violet-900'>{e.title}</h1>
        <h1 className='lg:text-xl text-violet-700'>{e.description}</h1>

        <div className='flex flex-col lg:justify-between lg:flex-row mt-2 gap-2'>
          <button onClick={() => updateStatus('completed')} className='hover:bg-emerald-600 active:scale-75 bg-emerald-500 text-white px-1 py-[2px] rounded lg:text-lg lg:px-2 lg:py-1 lg:w-fit'>Mark as Completed</button>

          <button onClick={() => updateStatus('failed')} className='hover:bg-red-600 active:scale-75 bg-red-500 text-white px-1 py-[2px] rounded lg:text-lg lg:px-2 lg:py-1 lg:w-fit'>Mark as Failed</button>
        </div>
    </div>
  )
} 

export default AcceptTask
