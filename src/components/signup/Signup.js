import React from 'react'

export default function Signup() {
  return (
    <div className='max-width-80 p-[70px] mx-auto bg-black/[0.85]'>
      <form className='grid flex-col'>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' className='p-5 outline-0 h-8 w-1/3 border-none max-width-[]' />
        <input placeholder='Password' type='password' className=''/>
        <buttion type="submit">Sig In</buttion>
      </form>
    </div>
  )
}
