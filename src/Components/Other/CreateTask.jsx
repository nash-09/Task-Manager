import React, { useContext, useState } from 'react'

const CreateTask = ({employees,setEmployees}) => {

    const [task,setTask] = useState('')
    const [description,setDescription] = useState('')
    const [date,setDate] = useState('')
    const [assign,setAssign] = useState('')
    const [category,setCategory] = useState('')

  return (
    <div className='flex justify-center lg:w-1/2'>
        <div className='mt-5 bg-white p-3 rounded-xl shadow-lg text-xl w-full lg:text-2xl'>
            <form className='flex flex-col'
                onSubmit={(e) => {
                    e.preventDefault()
                    setTask('')
                    setDescription('')
                    setDate('')
                    setAssign('')
                    setCategory('')
                }}>

                <label>Task Title <br />
                    <input value={task} onChange={(e) => {setTask(e.target.value)}}
                    type="text" required className='bg-slate-100 text-slate-800 text-lg lg:text-xl w-full rounded p-1 mb-3'/>
                </label>

                <label>Description <br />
                    <textarea value={description} onChange={(e) => {setDescription(e.target.value)}}
                    required rows={5} className='resize-none bg-slate-100 text-slate-800 text-lg p-1 lg:text-xl rounded mb-3 w-full'/>
                </label>

                <label>Date <br />
                    <input value={date} onChange={(e) => {setDate(e.target.value)}} 
                    type="date" required className='bg-slate-100 text-slate-800 text-lg lg:text-xl w-full p-1 mb-3 rounded'/>
                </label>

                <label>Assign To <br />
                    <input value={assign} onChange={(e) => {setAssign(e.target.value)}}
                    type="text" required className='bg-slate-100 text-slate-800 text-lg lg:text-xl w-full p-1 mb-3 rounded'/>
                </label>

                <label>Category <br />
                    <input value={category} onChange={(e) => {setCategory(e.target.value)}}
                    type="text" required className='bg-slate-100 text-slate-800 text-lg lg:text-xl w-full p-1 mb-3 rounded'/>
                </label>

                <div className='flex justify-center'>
                    <button onClick={() => {
                        const newTask = {
                            'id': Date.now(),
                            'title':task,
                            'description':description,
                            'date':date,
                            'category':category,
                            'active':false,
                            'newTask':true,
                            'completed':false,
                            'failed':false
                        }
                        
                        const updateEmp = employees.map((e) => {
                            if(e.firstName === assign){
                                return {...e, taskNumbers: {...e.taskNumbers, newTask: e.taskNumbers.newTask+1}, tasks: [newTask, ...e.tasks]}
                            }
                            return e
                        })
                        setEmployees(updateEmp)
                    }} className='bg-emerald-500 hover:bg-emerald-600 text-white lg:px-2 lg:py-1 px-1 py-[2px] rounded'>Create Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateTask
