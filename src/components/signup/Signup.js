import React from 'react'

export default function Signup() {
  return (
    <div className='max-width-80 p-[70px] mx-auto bg-black/[0.85]'>
      <form className=' flex-col grid gap-4 justify-items-center'>
        <input placeholder='Email' type='email' className='p-5 outline-0 h-8  border-none w-1/3' />
        <input placeholder='Password' type='password' className='p-5 outline-0 h-8 border-none w-1/3'/>
       <div className='w-52 flex justify-between'>
       <buttion type="submit">Log In</buttion>
       <buttion>Sig In</buttion>
       </div> 

      </form>
    </div>
  )
}
