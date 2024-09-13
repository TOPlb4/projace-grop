"use client"


import React ,{ useState }from 'react'
import Navbar from '../conponents/Navbar'
import Link from 'next/link'

function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit =async (e) =>{
        e.preventDefault();

        if(password != confirmPassword){
            setError("Password do not match!");
            return;
        }

        if(!name || !email || !password || !confirmPassword){
            setError("please complete all inputs!");
            return;
        }
        try{

            const res = await fetch("http://localhost:3000/api/register",{
                method:"POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if(res.ok){
                const form= e.target;
                setError("");
                form.reset();
            }else{
                console.log("User registration failed.")
            }

        }catch(error){
            console.log("Error during registration", error);
        }
    }

  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-5'>
        <h3>RegisterPage</h3>
        <hr className='my-3' />
        <form onSubmit={handleSubmit}>

            {error &&(
                <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}


            <input onChange={(e) =>setName(e.target.value) } className='block bg-gray-300 p-2 rounded-md' type="text" placehoder='Enter your name'/>
            <input onChange={(e) =>setEmail(e.target.value) } className='block bg-gray-300 p-2 rounded-md' type="email" placehoder='Enter your email'/>
            <input onChange={(e) =>setPassword(e.target.value) } className='block bg-gray-300 p-2 rounded-md' type="password" placehoder='Enter your password'/>
            <input onChange={(e) =>setConfirmPassword(e.target.value) } className='block bg-gray-300 p-2 rounded-md' type="password" placehoder='confirm your password'/>
            <button type='submit ' className='bg-green-500 p-2 rounded-md text-white'>Sign Up</button>
        </form>
        <hr className='my-3' />
        <p>Already have an account? go to <Link className='text-blue-500 hover:underline' href="/login">Login</Link>Page</p>
      </div>
    </div>
  )
}

export default RegisterPage
