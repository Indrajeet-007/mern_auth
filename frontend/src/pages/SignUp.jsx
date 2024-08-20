import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './signin'
function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-9 font-semibold'>SignUp</h1>
      <form action="" className='flex flex-col gap-4'>
        <input type="text" placeholder='Password' id='username' className='p-3 bg-slate-100 rounded-lg'/>
        <input type="text" placeholder='Username' id='username' className='p-3 bg-slate-100 rounded-lg'/>
        <input type="text" placeholder='Email' id='username' className='p-3 bg-slate-100 rounded-lg'/>
        <button disabled className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 hover:bg-slate-800 disabled:opacity-90'>Sign up</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account</p>
        <span className='text-blue-500'><Link to='/sign-in'>Sign In</Link></span>
      </div>
    </div>
  )
}

export default SignUp
