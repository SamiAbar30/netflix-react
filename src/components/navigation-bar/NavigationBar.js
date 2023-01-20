import React, { useEffect, useState } from 'react';

export default function NavigationBar() {
	const [show, setShow] = useState(false);
	const transitionNavBar = () => {
		setShow(window.scrollY > 300 ? true : false);
	};
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);

	return (
		<div
			className={`fixed ${
				show && 'bg-[#111]'
			} top-0 w-full h-20 p-6 transition-all ease-in duration-1000 z-50 `}>
			<div className='flex justify-between'>
				<img
					className='fixed left-0 w-20 pl-5 pt-2 object-contain cursor-pointer '
					src={require('../../assets/logos/netflix.png')}
					alt='netflix logo'
				/>
				<img
					className='fixed right-20 w-8 cursor-pointer'
					src={require('../../assets/logos/avatar.png')}
					alt='avatar logo'
				/>
			</div>
		</div>
	);
}
