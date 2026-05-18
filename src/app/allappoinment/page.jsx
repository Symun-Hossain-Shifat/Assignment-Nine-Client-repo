import Link from 'next/link'
import React from 'react'

async function Allappoinmentpage () {

const res = await fetch(`${process.env.SERVER_PORT}/allappoinmets`)
const Datas = await res.json()
console.log(Datas)
  return (
    <div className='container mx-auto py-10'>
       <h2 className='text-2xl font-semibold'>All Appoinments</h2> 
       <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
          {
          Datas.map(Data => (
            <div key={Data._id} className="card bg-base-100 w-96 shadow-sm">
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