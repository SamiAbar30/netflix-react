import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
	return (
		<div className='bg-black h-full'>
			<Outlet />
		</div>
	);
}

export default App;
