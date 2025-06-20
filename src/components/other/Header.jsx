import React from 'react'

const Header = ({data}) => {
    console.log(data);
  return (
    <div className='flex items-end justify-between p-4'>
      {/* <h1 className='text-2xl font-medium'><span className='text-red'>{data.role === 'admin' ? 'Admin Dashboard' : 'Employee Dashboard'}</span> <br/>Hello, <br /> <span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1> */}
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>{data.firstName}👋</span></h1>
      <button className='bg-red-500 text-lg font-medium text-white rounded px-5 py-3'>Log Out</button>
    </div>
  )
}

export default Header
