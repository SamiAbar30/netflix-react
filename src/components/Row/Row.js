import React, { useEffect, useState } from 'react';
import { axiosConfig } from '../../config/axios/axiosConfig';

export default function Row({ title, fetchUrl, isLargRow = false }) {
	const [items, setItems] = useState();
	const base_url = 'https://image.tmdb.org/t/p/original/';
	useEffect(() => {
		return async () => {
			const request = await axiosConfig.get(fetchUrl);
			setItems(request.data.results);
		};
	}, []);
	return (
		<div className='text-white ml-5'>
			<h2>{title}</h2>
			<div className=''>
				{items.map((Item) => (
					<img
						key={Item.id}
						className={` ${isLargRow}`}
						src={`${base_url}${
							isLargRow ? items.poster_path : items.backdrop_path
						}`}
						alt={Item.name}
					/>
				))}
			</div>
		</div>
	);
}
