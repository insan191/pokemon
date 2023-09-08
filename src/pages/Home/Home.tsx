import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import { BASE_API } from '../../constants/baseApi'
import { NamedAPIResourceList } from '../../interfaces/pokemon.interface' // Assuming you have a Pokemon interface

const Home: FC = () => {
	const [pokemonData, setPokemonData] = useState<NamedAPIResourceList | null>(
		null
	)
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(BASE_API)
	const toast = useToast()

	useEffect(() => {
		axios
			.get<NamedAPIResourceList>(currentPageUrl)
			.then(({ data }) => {
				setPokemonData(data)
			})
			.catch(error => {
				toast({
					title: 'Покемоны спрятались :(',
					description: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
				console.error('Error fetching data:', error)
			})
	}, [currentPageUrl, toast])

	const goToPrev = () => {
		setCurrentPageUrl(pokemonData?.previous || BASE_API)
	}

	const goToNext = () => {
		setCurrentPageUrl(pokemonData?.next || BASE_API)
	}

	return (
		<div className='home'>
			<PokemonList pokemonData={pokemonData?.results} />
			<Pagination
				setCurrentPageUrl={setCurrentPageUrl}
				goToNext={goToNext}
				goToPrev={goToPrev}
			/>
		</div>
	)
}

export default Home
