
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
             className=' w-80 h-80 mx-auto md:w-100 object-cover '
              
              />
          </figure>
        
        
        
          <div className="my-auto p-5 ">
            <div>
            <h2 className=" text-3xl font-semibold">{Data.name}</h2>
            <p className='font-semibold text-blue-800'>{Data.specialty}</p>
          
            <p className='font-semibold'>About Doctor : <br />  <span className='font-normal text-gray-700'>{Data.description}</span></p>
          
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