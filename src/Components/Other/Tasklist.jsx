import React from 'react'
import NewTask from '../Tasklist/NewTask'
import AcceptTask from '../Tasklist/AcceptTask'

const Tasklist = ({emp, setEmployees}) => {
  return ( 
    <div className='mt-5 lg:mt-10 p-2 rounded bg-purple-200 h-[300px] lg:h-[450px] lg:w-full overflow-auto flex flex-col lg:flex-row gap-5' id='info'>
      {emp?.tasks?.map((e,idx) => {
        if(e.newTask) return <NewTask key={idx} e={e} emp={emp} setEmployees={setEmployees}/>
        
        if(e.active) return <AcceptTask key={idx} e={e} emp={emp} setEmployees={setEmployees}/>
      })}
    </div>
  )
}

export default Tasklist
