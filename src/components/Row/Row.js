import React, { useEffect, useState } from 'react';
import { axiosConfig } from '../../config/axios/axiosConfig';
import "./Row.css"
export default function Row({ title, fetchUrl, isLargRow = false }) {
	const [items, setItems] = useState();
	const base_url = 'https://image.tmdb.org/t/p/original/';
	useEffect(() => {
		const fetchData= async () => {
			const request = await axiosConfig.get(fetchUrl);
			setItems(request.data.results);
		};
    fetchData();
	}, []);
	return (
		<div className='text-white ml-5'>
			<h2>{title}</h2>
			<div className='flex overflow-y-hidden overflow-x-scroll p-5 row__posters '>
				{items?.map((item) => (
					<img
						key={item.id}
						className={` object-contain mr-2.5 w-full transition transform duration-[450ms] hover:scale-110 hover:opacity-100 ${isLargRow ?' max-h-64':'max-h-28'}`}
						src={`${base_url}${isLargRow ? item?.poster_path : item?.backdrop_path
						}`}
						alt={item.name}
					/>
				))}
			</div>
		</div>
	);
}
