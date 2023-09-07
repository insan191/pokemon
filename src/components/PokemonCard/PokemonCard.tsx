import {
	CircularProgress,
	CircularProgressLabel,
	useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pokemon } from '../../interfaces/pokemon.interface'
import { IPokemonCard } from './PokemonCard.interface'
import './PokemonCard.scss'

const PokemonCard: FC<IPokemonCard> = ({ url }) => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null)

	const toast = useToast()
	const nav = useNavigate()
	useEffect(() => {
		axios
			.get<Pokemon>(url)
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
	}, [url, nav, toast])

	return (
		<div className={`pokemonCard is-background-${pokemon?.types[0].type.name}`}>
			<div className='pokemonCard__heading'>
				<h2>{pokemon?.name}</h2>
				<p className={`is-color-${pokemon?.types[0].type.name}`}>
					{pokemon?.id}
				</p>
			</div>
			<div className='pokemonCard__img'>
				<img
					src={pokemon?.sprites.other.dream_world.front_default}
					alt='pokemon'
				/>
			</div>
			<div className='pokemonCard__info'>
				<div className='pokemonCard__types'>
					{pokemon?.types.map(t => (
						<p className={`is-background-${pokemon?.types[0].type.name}`}>
							{t.type.name}
						</p>
					))}
				</div>
				<h4 className='pokemonCard__info-title'>Stats</h4>
				<div className='pokemonCard__stats'>
					{pokemon?.stats.map(
						(stat, index) =>
							index < 3 && (
								<CircularProgress value={stat.base_stat} color='green.400'>
									<CircularProgressLabel>
										{stat.stat.name.substring(0, 3)}
									</CircularProgressLabel>
								</CircularProgress>
							)
					)}
				</div>
			</div>
		</div>
	)
}

export default PokemonCard
