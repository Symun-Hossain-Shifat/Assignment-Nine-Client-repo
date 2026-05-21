'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAnglesRight } from 'react-icons/fa6'
import {Label, SearchField} from "@heroui/react";

function Allappoinmentpage () {

const [data, setData] = useState([])
const [search , setSearch] = useState('')
 
useEffect(  () => { 

  const fetchdata =  async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allappoinmets`)
const Datas = await res.json()
// console.log(Datas)
setData(Datas)
  };
  fetchdata()
 
} , [])

const filterdata = data.filter( (Doctor) => 
  Doctor.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className=' py-10 w-8/10  mx-auto md:w-10/12'>

      <div>
        <SearchField value= {search} onChange={setSearch} className= 'w-5/10 mb-5  mx-auto '>
   
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input  placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField> 
      </div>
       <h2 className='text-2xl font-semibold'>All Appoinments</h2> 
       <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
          {
         filterdata.map(Data => (
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
      <Link href={`/allappoinment/${Data._id}`} className='w-full mt-5'>
      <button  className='btn w-3/5 mx-auto  btn-primary flex items-center gap-3'>Veiw Details <FaAnglesRight /></button>
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