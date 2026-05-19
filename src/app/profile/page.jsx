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
import { MdEdit } from 'react-icons/md';
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and travel preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col">
            <div className="flex flex-col items-center text-center mb-8">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src= {userData?.image}
                    alt="Sarah Mitchell"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
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
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
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

          {/* Travel Statistics */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 px-1">Travel Statistics</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Total Bookings */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Total Bookings</p>
                    <p className="text-5xl font-bold text-gray-900 mt-3">12</p>
                  </div>
                  <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                    <Plane className="w-7 h-7 text-sky-600" />
                  </div>
                </div>
              </div>

              {/* Countries Visited */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Countries Visited</p>
                    <p className="text-5xl font-bold text-gray-900 mt-3">18</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Globe className="w-7 h-7 text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Upcoming Trips */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Upcoming Trips</p>
                    <p className="text-5xl font-bold text-gray-900 mt-3">2</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-amber-600" />
                  </div>
                </div>
              </div>

              {/* Total Spent */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Total Spent</p>
                    <p className="text-5xl font-bold text-gray-900 mt-3">$15,750</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Optional: Add more sections here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepage ;