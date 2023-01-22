import React from 'react';

export default function Login() {
	return (
		<>
					<h1 className='text-6xl mb-5'>
						Unlimited films, TV programmes and more,
					</h1>
					<h2 className='text-3xl font-normal mb-8'>
						watch anywhere. Cancel at any time.
					</h2>
					<h3 className='text-xl font-normal'>
						Ready to watch? Enter you email to create or restart you membership.
					</h3>
					<div className='m-5'>
						<form>
							<input
								type='email'
								placeholder='Email Adress'
								className='p-5 outline-0 h-8 w-1/3 border-none max-w-[600px]'
							/>
							<button className='p-2 text-base text-white bg-red-500 cursor-pointer border-none font-normal'>
								GET STARTED
							</button>
						</form>
					</div>
				</>
	);
}
