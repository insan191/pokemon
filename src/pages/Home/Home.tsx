import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import Search from '../../components/Search/Search'
import { BASE_API } from '../../constants'
import { NamedAPIResourceList } from '../../interfaces/pokemon.interface'
const Home = () => {
	const [pokemonData, setPokemonData] = useState<NamedAPIResourceList | null>(
		null
	)
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(`${BASE_API}`)

	const toast = useToast()

	useEffect(() => {
		axios
			.get<NamedAPIResourceList>(currentPageUrl)
			.then(({ data }) => {
				setPokemonData(data)
			})
			.catch(error => {
				toast({
					title: 'Покемоны спрятались! :(',
					description: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
				console.error('Error fetching data:', error)
			})
	}, [currentPageUrl, toast])

	return (
		<div className='home'>
			<Search
				placeholder='Какого покемона ищешь?'
				setCurrentPageUrl={setCurrentPageUrl}
			/>
			<PokemonList pokemonData={pokemonData?.results} />
			<Pagination
				setCurrentPageUrl={setCurrentPageUrl}
				next={pokemonData?.next}
				previous={pokemonData?.previous}
			/>
		</div>
	)
}

export default Home
