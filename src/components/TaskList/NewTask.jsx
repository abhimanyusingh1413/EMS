import React from 'react'

const NewTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 june 2025</h4>
        </div>
        <h2 className=' mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Create a tutorial on how to use the new features of the platform.</p>
        <div className='mt-4'>
            <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
        </div>
     </div>
  )
}

export default NewTask
