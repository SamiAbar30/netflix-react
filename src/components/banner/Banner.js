import React, { useEffect, useState } from 'react';
import requests from '../../config/api/links';
import { axiosConfig } from '../../config/axios/axiosConfig';
export default function Banner() {
	const [tvShow, setTvShow] = useState();
	useEffect(() => {
	return async () => {
			const request = await axiosConfig.get(requests.fetchNetflixOriginals);
			setTvShow(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				],
			);
		};
	}, []);
	return (
		<header
			className='relative text-white object-contain bg-cover  lg:bg-top bg-center w-full h-[500px] lg:h-[700px]'
			style={{
				backgroundImage: `url(${
					'https://image.tmdb.org/t/p/original/' + tvShow?.backdrop_path
				})`,
			}}>
			<div className='ml-8 pt-28 sm:pt-36 h-48'>
				<h1 className='pb-1.5 text-5xl font-extrabold'>
					{tvShow?.name || tvShow?.original_name}
				</h1>
				<div className='sm:pt-8'>
					<button className='cursor-pointer text-white outline-none norder-none font-bold rounded pl-8 pr-8 mr-4 pt-2 pb-2 bg-neutral-800/50 hover:text-black hover:bg-slate-200'>
						Play
					</button>
					<button className='cursor-pointer text-white outline-none norder-none font-bold rounded pl-8 pr-8 mr-4 pt-2 pb-2 bg-neutral-800/50  hover:text-black hover:bg-slate-200'>
						My List
					</button>
				</div>
				<h1 className='pt-0 sm:pt-8 sm:w-2/3 w-full h-20 max-w-96 text-sm pt-4 leading-6'>
					{tvShow?.overview}
				</h1>
			</div>
			<div
				className='absolute bottom-0 h-28 w-full'
				style={{
					backgroundImage:
						'linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)',
				}}></div>
		</header>
	);
}
