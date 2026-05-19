'use client'

import { authClient } from '@/lib/auth-client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'


import React from 'react'
import { FaEnvelope, FaGoogle, FaLock, FaUser } from 'react-icons/fa'
import { PiBracketsCurlyBold } from 'react-icons/pi'


function Signuppage () {

  const router = useRouter()
  const Handlesignup = async (e) => {
    e.preventDefault()
    const FormData = e.target 
    const email = FormData.Email.value 
    const password = FormData.Password.value
    const image = FormData.Image.value 
    const name = FormData.Name.value 


    const { data, error } = await authClient.signUp.email({
    name: name, // required
    email: email , // required
    password: password , // required
    image: image ,
    callbackURL: "/signin",
});

if(data){
  alert(`Registration Successfull`)
  router.push('/signin')
}else if (error){
  alert(`Registration Failed ${error}`)
}
  }


  const Googlesignin = async () => {
        const data = await authClient.signIn.social({
    provider: "google",
  });

  if(data){
  alert(`Registration Successfull`)
  router.push('/signin')
}else{
  alert(`Registration Failed`)
}
  }
  return (
    <div>
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-semibold text-black">
            Create Account
          </h1>
         
        </div>

        {/* Form */}
        <form onSubmit={Handlesignup}  className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
              <FaUser className="text-gray-400 mr-2" />
              <input
              name="Name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
              name="Email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Image Url */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image URL
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
              <PiBracketsCurlyBold className="text-gray-400 mr-2" />
              <input
              name="Image"
                type="url"
                placeholder="Enter your Image URL"
                required
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-md px-3 py-2 bg-gray-50">
              <FaLock className="text-gray-400 mr-2" />
              <input
            
                type="password"
                name="Password"
                required
                placeholder="Create a password"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Create Button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-md transition">
            Create Account
          </button>

          {/* Divider */}
          <div className="relative text-center text-sm text-gray-400">
            <span className="bg-white px-3 relative z-10">
              Or sign up with
            </span>
            <div className="absolute top-1/2 left-0 w-full border-t -z-0"></div>
          </div>

          {/* Google Button */}
          <button onClick={Googlesignin} className="w-full border rounded-md py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500" />
            <span className="text-sm">Sign Up With Google</span>
          </button>

          {/* Login */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/signin" className="text-cyan-500 font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section> </div>
  )
}

export default Signuppage 