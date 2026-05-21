import { Spinner } from '@heroui/react'
import React from 'react'

function loading() {
  return (
    <div className='justify-center items-center  h-screen'>
      <div className='w-4/12 mx-auto mt-50 text-center'>
        <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading.....</span>
      </div>
      
      </div>
        
    </div>
  )
}

export default loading