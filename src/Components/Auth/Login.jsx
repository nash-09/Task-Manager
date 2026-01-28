import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='bg-slate-100 flex justify-center items-center h-screen'>
      <div className='bg-red-500 shadow-xl lg:p-10 p-5 rounded-xl'>
        <form
        className='flex flex-col gap-5 lg:text-2xl text-xl'
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(email,password)
          setEmail('')
          setPassword('')
        }}>

          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='E-Mail' required className='lg:p-2 p-1 rounded bg-white text-slate-800 placeholder-slate-400'/>

          <input value={password} onChange={(e) => {setPassword(e.target.value)}}
          type="password" placeholder='Password' required className='lg:p-2 p-1 rounded bg-white text-slate-800 placeholder-slate-400'/>

          <div className='flex justify-center'>
            <button className='bg-green-500 active:hover:scale-95 text-white hover:bg-green-600 lg:px-3 px-2 rounded py-[2px] lg:py-1'>Login</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
