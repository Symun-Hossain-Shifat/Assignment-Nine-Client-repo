
import { WithForm } from '@/app/Components/Bookappoinment'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosArrowBack} from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { PiHospital } from 'react-icons/pi'
import { SlCalender } from 'react-icons/sl'

async function Detailspage ({params}) {
    const {id} = await params
    const {token} = await  auth.api.getToken ({
      headers : await headers()
    })


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allappoinmets/${id} `, {
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    const Data = await res.json()
    const time = Data.availability
    // console.log(Data)
  return (
    <div className='w-10/12 mx-auto my-10'>
        <div>
           <div className='flex gap-2 items-center my-5'>
          
        <Link href={'/allappoinment'}> <IoIosArrowBack size={50} /></Link>
        </div>
        
        <div className="card  lg:card-side bg-base-100  shadow-sm">
  <figure>
    <img
      src={Data.image}
      alt="Doctor Picture"
     className='w-100 object-cover '
      
      />
  </figure>



  <div className="my-auto p-5">
    <h2 className=" text-3xl font-semibold">{Data.name}</h2>
    <p className='font-semibold text-blue-800'>{Data.specialty}</p>
  
    <p className='font-semibold'>About Doctor : <br />  <span className='font-normal text-gray-700'>{Data.description}</span></p>
  
    <div className='grid grid-cols-2 gap-5'>
        <div className='flex gap-2 items-center p-2 rounded-xl'>
            <div className='text-red-700'>
                <FaUser size={40} />
            </div>
            <div>
                <h1 className='font-semibold'>Experience </h1>
                <p>{Data.experience}</p>
            </div>
        </div>
        <div className='flex gap-2 items-center p-2 rounded-xl'>
            <div className='text-green-700'>
                <PiHospital size={40} />
            </div>
            <div>
                <h1 className='font-semibold'>Hospital</h1>
                <p>{Data.hospital}</p>
            </div>
        </div>
        <div className='flex gap-2 items-center p-2 rounded-xl'>
            <div className='text-blue-700'>
                <IoLocationSharp size={40} />
            </div>
            <div>
                <h1 className='font-semibold'>Location</h1>
                <p>{Data.location}</p>
            </div>
        </div>
        <div className='flex gap-2 items-center p-2 rounded-xl'>
            <div className='text-yellow-700'>
                <MdOutlineAttachMoney  size={40} />
            </div>
            <div>
                <h1 className='font-semibold'>Fee</h1>
                <p>$ {Data.fee}</p>
            </div>
        </div>
        <div className='flex gap-2 items-center p-2 rounded-xl'>
            <div className='text-pink-700'>
                <SlCalender size={40} />
            </div>
            <div>
                <h1 className='font-semibold'>Availability</h1>
                <div>
                    {time.map((D , index) => (
            <div  key={index} className='flex '>
                  <p> {D} <br /> </p> <br />
             </div>

          
        ))}
                </div>
               
            </div>
        </div>
       
    </div>
  
 
  
  <WithForm Data = {Data}></WithForm>
  
 










  </div>
</div>
        </div>
        
    </div>
  )
}

export default Detailspage 