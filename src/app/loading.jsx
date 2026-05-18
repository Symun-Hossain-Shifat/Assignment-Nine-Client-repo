import React from 'react'

function loading() {
  return (
    <div className='justify-center items-center  h-screen'>
      <div className='w-4/12 mx-auto mt-50 text-center'>
        <span className="loading loading-spinner loading-xl"></span>
      <span className="loading loading-spinner loading-lg"></span>
       <span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-xs"></span>

      
      </div>
        
    </div>
  )
}

export default loading