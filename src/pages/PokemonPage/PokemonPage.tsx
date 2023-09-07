import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_API } from '../../constants'
import { Pokemon } from '../../interfaces/pokemon.interface'

const PokemonPage: FC = () => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null)

	const toast = useToast()
	const { id } = useParams()
	const nav = useNavigate()

	useEffect(() => {
		axios
			.get<Pokemon>(`${BASE_API}/${id}`)
			.then(({ data }) => {
				setPokemon(data)
			})
			.catch(error => {
				toast({
					title: 'Покемон убежал! :(',
					description: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true,
				})
				console.error('Error fetching data:', error)
				nav('/notFound')
			})
	}, [id, nav, toast])
	return (
		<div>
			<h2>{pokemon?.name}</h2>
		</div>
	)
}

export default PokemonPage
