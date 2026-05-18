import React from 'react'
import { BsPatchQuestionFill } from 'react-icons/bs'

function Faqpage () {
  return (
    <div className='card w-10/12 mx-auto my-5 p-4'>
        <div className='text-center space-y-4 w-9/12 mx-auto'>
            <p className='font-semibold text-2xl text-red-700'>F. A. Q.</p>
             <h1 className=' text-7xl font-bold '>Frequently Ask Questions ?</h1>
              <p className='font-semibold text-gray-700'>Find answers to the most common questions about our doctor appointment system. We ve made it easy for you to understand how everything works in just a few steps. If you still need help, our support team is always ready to assist you.</p>
        </div>
 

       <div className='container mx-auto items-center p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div> 
            <h1 className='text-green-600 mb-3 font-bold text-2xl '>Have You Any Question ? </h1>
            <p className='font-semibold text-gray-700'>We are here to help you with booking doctors, scheduling appointments, and managing your healthcare needs easily. Our support team is always ready to guide you if you face any issue while using the app.</p>

            <button className='btn bg-green-600 text-white font-semibold my-4'>Contact Us</button>

        </div>
        <div className='space-y-3'>
            <div className='w-full rounded-2xl p-4 border bg-gray-100'><h1 className=' flex gap-3 items-center font-semibold text-gray-900'> <BsPatchQuestionFill /> How can I book an appointment with a doctor ?</h1></div>
            <div className='w-full rounded-2xl p-4 border bg-gray-100'><h1 className=' flex gap-3 items-center font-semibold text-gray-900'> <BsPatchQuestionFill /> Can I cancel or reschedule my appointment ?</h1></div>
            <div className='w-full rounded-2xl p-4 border bg-gray-100'><h1 className=' flex gap-3 items-center font-semibold text-gray-900'> <BsPatchQuestionFill /> Do I need to create an account to use the app ?</h1></div>
            <div className='w-full rounded-2xl p-4 border bg-gray-100'><h1 className=' flex gap-3 items-center font-semibold text-gray-900'> <BsPatchQuestionFill /> How do I choose the right doctor for my treatment ?</h1></div>
        </div>
       </div>
    </div>
  )
}

export default Faqpage 
 