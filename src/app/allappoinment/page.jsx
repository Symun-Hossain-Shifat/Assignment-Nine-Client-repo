import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

async function Allappoinmentpage () {
const {token} = await  auth.api.getToken ({
  headers : await headers()
})

console.log(token)
const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_PORT}/allappoinmets` , {
  headers : {
    authorization : `Bearer ${token}`
  }
})
const Datas = await res.json()
// console.log(Datas)
  return (
    <div className=' py-10 w-8/10  mx-auto md:w-10/12'>
       <h2 className='text-2xl font-semibold'>All Appoinments</h2> 
       <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
          {
          Datas.map(Data => (
            <div key={Data._id} className="card  bg-base-100   shadow-sm">
  <figure>
    <img
      src={Data.image}
       className='w-full h-70'
      
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {Data.name} 
     
    </h2>
     <p className="font-semibold text-gray-700">{Data.specialty}</p>
    <p>{Data.description}</p>
    <div className="card-actions justify-end">
      <Link href={`/allappoinment/${Data._id}`}>
      <button className='btn btn-primary'>Veiw Details</button>
      </Link>
      
    </div>
  </div>
</div>
          ))
        }

       </div>
      
     </div>
  )
}

export default Allappoinmentpage 