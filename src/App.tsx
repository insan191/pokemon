import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import PokemonPage from './pages/PokemonPage/PokemonPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
