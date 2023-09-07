import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useContext, useEffect, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import { CustomContext } from '../../context/context'
import { NamedAPIResourceList } from '../../interfaces/pokemon.interface'

const Home: FC = () => {
	const [pokemonData, setPokemonData] = useState<NamedAPIResourceList | null>(
		null
	)
	const toast = useToast()

	const customContext = useContext(CustomContext)

	if (!customContext) return null

	const { currentPageUrl } = customContext

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

	return (
		<div className='home'>
			<PokemonList pokemonData={pokemonData?.results} />
			<Pagination next={pokemonData?.next} previous={pokemonData?.previous} />
		</div>
	)
}

export default Home
