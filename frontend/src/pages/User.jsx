import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function User() {
    const [user,setUser]=useState({name:"",email:"",password:""})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://todo-vp6d.onrender.com/user/register',user).then((res)=>{
            console.log("res=>",res)
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Register Here</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <label htmlFor="email" className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default User
