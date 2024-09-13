"use client"


import React ,{ useState }from 'react'
import Navbar from '../conponents/Navbar'
import Link from 'next/link'

function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>LoginPage</h3>
        <hr className='my-3' />
        <form action="">
            <input className='block bg-gray-300 p-2 rounded-md' type="email" placehoder='Enter your email'/>
            <input className='block bg-gray-300 p-2 rounded-md' type="password" placehoder='Enter your password'/>
            <button type='submit ' className='bg-green-500 p-2 rounded-md text-white'>Sign In</button>
        </form>   
        <hr className='my-3' />
        <p>Do not have an account? go to <Link className='text-blue-500 hover:underline' href="/register">Register</Link>Page</p>
      </div>
    </div>
  )
}

export default LoginPage
