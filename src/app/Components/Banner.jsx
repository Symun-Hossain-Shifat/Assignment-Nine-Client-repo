import React from 'react'
import doctor from '@/asset/doctor.png'
import { FaSlackHash } from 'react-icons/fa'

function Bannerpage () {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 items-center w-screen bg-cover bg-center h-screen' style={{backgroundImage : `url(${doctor.src})`}}>
       
        {/* Left Content */}
       
       <div className='p-10 items-center space-y-3 '>
        
        <button className="btn rounded-full">
          <FaSlackHash />  Best Medical Center In Dhaka
        </button>
         <h1 className='text-6xl font-bold'>Bringing Healthcare <br /> Service To You</h1>
        <p className='text-xl '>Delvering Comprehensive mental health support throught our innovative platform that seamelessly  connect to your teams</p>
        
        <div className='flex gap-5'>
            <button className='rounded-md btn btn-neutral btn-outline'>Get Started  Now</button>
            <button className='rounded-md btn btn-neutral '>Book Appointment</button>
        </div>
        </div> 


        {/* Right Content */}
       <div>





       </div>
        
     </div>
  )
}

export default Bannerpage 