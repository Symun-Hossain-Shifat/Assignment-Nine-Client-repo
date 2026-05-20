'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Plane, 
  Globe, 
  TrendingUp, 
  DollarSign, 

  Calendar, 
  Flag,
  Edit 
} from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import user from '@/asset/user.png'
import { Updateprofilepage } from '../Components/updateprofile';



const Profilepage = () => {
    const { data: session , isLoading } = authClient.useSession()
    // console.log(session?.user)
    const userData = session?.user


    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-xl">Loading profile...</p>
            </div>
        );
    }

    
    if (!userData) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-xl">Please login to view profile</p>
            </div>
        );
    }


  return (
    <div className="min-h-screen  w-11/12 md:w-10/12 mx-auto bg-gray-50 p-4 md:p-8">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-1">Manage your account settings </p>
        </div>

        <div className=" ">
          {/* Profile Card */}
          <div className="lg:col-span-5 md:w-8/12 mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
            <div className="flex flex-col items-center text-center mb-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {userData?.image ?  <Image
                    src= {userData?.image }
                    alt="Sarah Mitchell"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  /> :  <Image
                    src= {user}
                    alt="Sarah Mitchell"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  /> }
                 
                </div>
                <button className="absolute bottom-1 right-1 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-md transition-colors">
                  <Edit size={16} />
                </button>
              </div>

              {/* Name & Location */}
              <h2 className="text-3xl font-semibold text-gray-900">{userData.name}</h2>
              <div className="flex items-center gap-1.5 text-gray-500 mt-2">
               <p className='text-xl font-semibold'>{userData.email}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 mt-auto">
              <div className= 'flex justify-between items-center'>
                <div >
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Member since</p>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Calendar size={16} className="text-teal-500" />
                    Mar 2024
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Nationality</p>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Flag size={16} className="text-teal-500" />
                    United States
                  </p>
                </div>
              </div>

              {/* Edit Profile Button */}
              <Updateprofilepage></Updateprofilepage>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Profilepage ;