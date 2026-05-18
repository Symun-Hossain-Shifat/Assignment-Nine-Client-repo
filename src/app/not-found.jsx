import Link from 'next/link'
import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'

function Notfoundpage() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold flex items-center text-red-500">  THIS URL IS INVALID  <IoWarningOutline /></h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Notfoundpage