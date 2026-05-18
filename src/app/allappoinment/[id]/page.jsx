import React from 'react'

async function Detailspage ({params}) {
    const {id} = await params
    console.log(id)
  return (
    <div>Detailspage </div>
  )
}

export default Detailspage 