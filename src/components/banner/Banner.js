import React from 'react';
import netflix_banner_img from '../../assets/images/netflix_banner.png';
export default function Banner() {
	return (
		<header className='bg-cover bg-center w-full h-96' style={{backgroundImage:`url(${netflix_banner_img})`}}>
    </header>
	);
}
