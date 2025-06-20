import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between p-4'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Shubham 👋</span></h1>
      <button className='bg-red-500 text-lg font-medium text-white rounded px-5 py-3'>Log Out</button>
    </div>
  )
}

export default Header
