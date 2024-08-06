import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import ChatPage from './component/main/ChatPage';

const App = () => {


	return (
		<Router>
			<Routes>
				<Route path="/" element={<ChatPage />} />
				<Route path="/chat" element={<ChatPage />} />
			</Routes>
		</Router>
	);
}


export default App;
