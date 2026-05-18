import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { PiHospital } from 'react-icons/pi'
import { SlCalender } from 'react-icons/sl'

async function Featuredpage () {
    const res = await fetch(`${process.env.SERVER_PORT}/featured`)
const Datas = await res.json()
// console.log(Datas)
  return (
    <div  className='container mx-auto text-center '>
     <h3 className='text-2xl py-3 text-red-600 w-2/10 mx-auto font-semibold my-5 border-b-2'>Top Rated Doctors</h3>
      {Datas.map(Data => (
         <div key={Data._id} className="card  my-2  text-left lg:card-side bg-base-100  shadow-sm">
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
                            {Data.availability.map((D , index) => (
                    <div  key={index} className='flex '>
                          <p> {D} <br /> </p> <br />
                     </div>
                    
                  
                ))}
                        </div>
                       
                    </div>
                </div>
               
            </div>
          
          <Link href={`/allappoinment/${Data._id}`}>
      <button className='btn btn-primary'>Veiw Details</button>
      </Link>
          
          
         
        
        
        
        
        
        
        
        
        
        
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featuredpage 