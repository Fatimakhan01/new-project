import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="bg-gray-400 text-center text-2xl font-bold text-black 
      p-4 rounded-lg mb-6">
        Hello I am page
      </h1>
      <button className="hover:text-red-600 bg-black text-white p-3 rounded-2xl">
        Click
      </button>
    </div>
  )
}

export default page
