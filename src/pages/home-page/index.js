import React from 'react';
import Banner from '../../components/banner/Banner';
import NavigationBar from '../../components/navigation-bar/NavigationBar';
export default function HomeScreen() {
	return (
		<div className='homeScreen'>
			{/* NAV */}
			<NavigationBar/>
			{/* Banner */}
			<Banner/>
			{/* Row */}
		</div>
	);
}
