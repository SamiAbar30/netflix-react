import React from 'react';
import Banner from '../../components/banner/Banner';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import requests from '../../config/api/links';
export default function HomeScreen() {
	return (
		<>
			<NavigationBar/>
			<Banner/>
			{/* <Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			<Row title="Trending Now" fetchUrl={requests.fetchAllTrending} />
			 */}
		</>
	);
}
