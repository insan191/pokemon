import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import Search from '../../components/Search/Search'
import { BASE_API } from '../../constants'
import { IPokemonData } from '../../interfaces/pokemon.interface'
const Home = () => {
	const [pokemonData, setPokemonData] = useState<IPokemonData | null>(null)
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(BASE_API)
	const [search, setSearch] = useState<string>('')

	const toast = useToast()

	useEffect(() => {
		axios
			.get<IPokemonData>(currentPageUrl)
			.then(({ data }) => {
				setPokemonData(data)
			})
			.catch(error => {
				toast({
					title: 'Покемоны убежали :(',
					description: error.message,
					status: 'error',
					duration: 9000,
					isClosable: true,
				})
				console.error('Error fetching data:', error)
			})
	}, [currentPageUrl, toast])

	return (
		<div className='home'>
			<Search
				placeholder='Какого покемона ищешь?'
				search={search}
				setSearch={setSearch}
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
