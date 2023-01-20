import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeScreen from "../pages/home-page";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children:[
			{
				path: '/',	element: <HomeScreen />,
			}
		]
	}
]);