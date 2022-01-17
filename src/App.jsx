import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hero from './pages/Hero';
import './App.scss';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:hero" element={<Hero />} />
			</Routes>
		</>
	);
}

export default App;
