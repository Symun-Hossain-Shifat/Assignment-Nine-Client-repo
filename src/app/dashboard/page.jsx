

import { Button } from '@heroui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { RxUpdate } from 'react-icons/rx'
import { DeleteBooking } from '../Components/DeleteBooking'
import { h1 } from 'framer-motion/client'

async function Dashboardpage () {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allbookings`)
    const Datas = await res.json()
    console.log(Datas)

   
  return (
    <div className='w-10/12 mx-auto p-3 my-20'>
      
        <h1 className='text-3xl text-left font-semibold my-5'>My Bookings</h1>
          <div className= {`${Datas.length < 1? '' : 'grid grid-cols-1 md:grid-cols-2 gap-4 p-5'} `}>
            {Datas.length < 1? (<h1 className='text-center py-20 text-3xl font-bold'>No Booking Found</h1>) :  ( Datas.map( Data => (
                 <div className='card' key={Data._id}>
                           {/* Header */}
                           <div className='flex gap-2.5 border-b-2 border-gray-200 py-5'>
                            <div className=' text-center items-center'>
                                 <div className='w-20 h-20 justify-center flex font-bold text-3xl items-center rounded-full bg-blue-100 text-blue-800'>DR.</div>
                            </div>
                            <div className=' flex items-center'>
                                <div>
                                         <h1 className='text-2xl font-semibold '>{Data.doctorname}</h1>
                                <p className='font-semibold text-gray-700'>Appointment Booking</p>
                                </div>
                              
                            </div>
                           </div>

                      <div className=' border-b-2 border-gray-100 py-2 flex items-center justify-between'>
                        <h1 className='font-semibold '>Patient</h1>
                        <h1 className='font-semibold text-gray-600'>{Data.patientname}</h1>
                      </div>
                      <div className=' border-b-2 border-gray-100 py-2 flex items-center justify-between'>
                        <h1 className='font-semibold '>Email</h1>
                        <h1 className='font-semibold text-gray-600'>{Data.email}</h1>
                      </div>
                      <div className=' border-b-2 border-gray-100 py-2 flex items-center justify-between'>
                        <h1 className='font-semibold '>Phone</h1>
                        <h1 className='font-semibold text-gray-600'>{Data.phone}</h1>
                      </div>
                      <div className=' border-b-2 border-gray-100 py-2 flex items-center justify-between'>
                        <h1 className='font-semibold '>Gender</h1>
                        <h1 className='font-semibold text-gray-600'>{Data.gender}</h1>
                      </div>

                      <div className='flex gap-4 items-center  justify-between '>
                        <div className='text-center items-center flex p-5 card'>
                            <div>
                            <h1 className='font-semibold  text-gray-600 '>Date</h1>
                             <h1 className='font-semibold  text-2xl'>{Data.date}</h1>
                            </div>
                            
                        </div>
                        <div className='text-center items-center flex p-5 card'>
                            <div>
                      <h1 className='font-semibold  text-gray-600 '>Time</h1>
                             <h1 className='font-semibold text-2xl '>{Data.time}</h1>
                            </div>
                           
                        </div>
                      </div>

                      <div className='flex items-center justify-between my-3'>
                       <DeleteBooking Data = {Data}></DeleteBooking>
                        <Button className='rounded-none flex items-center gap-2' variant="secondary"> <RxUpdate /> Update Now</Button>
                      </div>
                 </div>
            ))) }
          </div>
        
            
        </div>
    
  )
}

export default Dashboardpage 