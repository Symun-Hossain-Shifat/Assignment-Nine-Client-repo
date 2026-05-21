
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { PiHospital } from 'react-icons/pi'
import { SlCalender } from 'react-icons/sl'

async function Featuredpage () {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/featured`)
const Datas = await res.json()
console.log(Datas)
  return (
    <div  className='container mx-auto text-center '>
    <div className='text-center mb-8 space-y-4 w-10/12 mx-auto'>
            <p className='font-semibold text-2xl text-red-700'>Top  Rated  Doctor</p>
             <h1 className=' text-7xl font-bold '>Connect with top healthcare professionals for quality care !</h1>
           </div>   
      {Datas.map(Data => (
         <div key={Data._id} className="card my-2  text-left lg:card-side bg-base-100  shadow-sm">
          <figure>
            <img
              src={Data.image}
              alt="Doctor Picture"
             className=' w-80 mx-auto md:w-100 object-cover '
              
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
          
          <Link  href={`/allappoinment/${Data._id}`}>
      <button className='btn my-5 btn-primary'>Veiw Details</button>
      </Link>
          
          
         
        
        
        
        
        
        
        
        
        
        
          </div>
        </div>
      ))}
    </div>
  )
}

export default Featuredpage 