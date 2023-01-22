import './App.css';
import { Outlet } from 'react-router-dom';
import Login from './components/login/Login';
import AuthScreen from './pages/auth';
function App() {
	const user=false;
	return (
		<>
		{user?<Outlet/>:<AuthScreen/>}
		</>
	);
}

export default App;
