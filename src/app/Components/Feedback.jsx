import React from 'react'
import { FaStar } from 'react-icons/fa'

function Feedbackpage () {
  return (
    <div className='my-10 space-y-5'>
        <div className='text-center space-y-2 w-8/12 mx-auto'>
            <p className='font-semibold text-2xl text-red-700'>T e s t i m o n i a l</p>
             <h1 className=' text-7xl font-bold '>What Our Client Says !</h1>
              <p className='font-semibold text-gray-700'>Our patients trust us for professional and compassionate healthcare services. We are committed to providing a smooth and comfortable appointment experience for everyone. Read what our happy patients say about their journey with us.</p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto'>
            <div className='space-y-3 p-4 card'>
                <div className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='font-semibold text-gray-700'>“A very reliable and user-friendly doctor appointment system. The reminders and scheduling features saved me a lot of time. I had a great experience using this website.”</p>

                <h1 className='font-bold text-2xl'>Saymon Shifat </h1>
                <h1 className='font-semibold text-gray-700'>CEO , Chaldal</h1>
            </div>
            <div className='space-y-3 p-4 card'>
                <div className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='font-semibold text-gray-700'>“I booked my appointment within minutes without any hassle. The service quality and doctor communication were excellent. This platform truly made healthcare more convenient for me.”</p>

                <h1 className='font-bold text-2xl'>Foysal Hasan </h1>
                <h1 className='font-semibold text-gray-700'>CEO , Sharedeal</h1>
            </div>
            <div className='space-y-3 p-4 card'>
                <div className='flex text-orange-500'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='font-semibold text-gray-700'>“The appointment process was very smooth and easy to use. The doctors were professional and caring throughout the consultation. I highly recommend this platform for quick medical support.”</p>

                <h1 className='font-bold text-2xl'>Foysal Rabby </h1>
                <h1 className='font-semibold text-gray-700'>CEO , Bkash</h1>
            </div>

        </div>
    </div>
  )
}

export default Feedbackpage 