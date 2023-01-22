import React from 'react';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';

export default function AuthScreen() {
	return (
		<div
			className='relative h-full w-full bg-black bg-cover bg-no-repeat bg-center'
			style={{
				backgroundImage: `url(${'https://i.ibb.co/vXqDmnh/background.jpg'})`,
			}}>
			<div className=''>
				<img
					className='fixed left-0 w-40 object-contain p-5'
					src={require('../../assets/logos/netflix.png')}
					alt=''
				/>
				<button className='fixed right-6 top-2 px-5 py-2 my-2.5 text-white border-none bg-red-500 rounded cursor-pointer font-semibold'>
					Sign in
				</button>
				<div
					className='h-screen w-full z-100'
					style={{
						background: 'rgba(0,0,0,0.4)',
						backgroundImage:
							'linear-gradient(to top,rgba(0,0,0,0.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,0.8) 100%)',
					}}
				/>
			</div>
			<div className='w-full z-100 text-white p-5 absolute top-1/3 mx-auto text-center'>
				{false ? <Login /> : <Signup />}
			</div>
		</div>
	);
}
