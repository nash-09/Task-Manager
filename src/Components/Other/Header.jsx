import React, { useEffect, useState } from 'react'

const Header = ({data,changeUser}) => {
  console.log(data,changeUser)

  const userName = data?.firstName || 'Admin'

  return (
    <div className='flex justify-between w-full text-xl lg:text-2xl'>
      <div>
        <h1 className='text-slate-900 font-semibold'>Hello</h1>
        <h1 className='text-blue-600 font-semibold'>{userName}👋</h1>
      </div>

      <div className='flex items-center'>
        <button onClick={() => {
          changeUser()
        }} className='bg-red-500 active:hover:scale-75 hover:bg-red-600 py-[2px] px-1 lg:px-1 lg:py-2 rounded text-white'>Log Out</button>
      </div>
    </div>
  )
}

export default Header
