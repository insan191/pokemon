import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import PokemonPage from './pages/PokemonPage/PokemonPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path=':id' element={<PokemonPage />} />
			</Route>
		</Routes>
	)
}

export default App
