import React from 'react';
import Banner from '../../components/banner/Banner';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
import Row from '../../components/Row/Row';
import requests from '../../config/api/links';
export default function HomeScreen() {
	return (
		<>
			<NavigationBar/>
			<Banner/>
			<Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargRow={true} />
          <Row title="Trending Now" fetchUrl={requests.fetchAllTrending}  />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
			
		</>
	);
}
