'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGoogle, FaLock } from 'react-icons/fa'
import { IoCheckboxOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

function Signinpage () {

  const Handlesignin = async (e) => {
    e.preventDefault()
    const Formdata = e.target
    const email = Formdata.Email.value
    const password = Formdata.Password.value
  const { data, error } = await authClient.signIn.email({
    email: email , // required
    password: password , // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(error)
if(data){
  router.push('/')
}else if (error){
   toast.warning(`Login Failed ! ${error.message}`)
}
  }

  const Googlesignin = async () => {
          const data = await authClient.signIn.social({
      provider: "google",
    });
  
    
    }

  return (
    <div>
       <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            Welcome Back
          </h1>
         
        </div>

        {/* Form */}
        <form  onSubmit={Handlesignin}  className="space-y-5">
          
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
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent text-sm"
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
              name="Password"
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <IoCheckboxOutline className="text-lg" />
              Remember me
            </label>

            <a href="#" className="text-cyan-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-md transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="text-center text-gray-400 text-sm relative">
            <span className="bg-white px-3 relative z-10">
              Or continue with
            </span>
            <div className="absolute top-1/2 left-0 w-full border-t -z-0"></div>
          </div>

          {/* Google */}
          <button onClick={Googlesignin} className="w-full border py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500" />
            <span className="text-sm">Sign Up With Google</span>
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="text-cyan-500 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section> </div>
  )
}

export default Signinpage 