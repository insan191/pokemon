import {
	CircularProgress,
	CircularProgressLabel,
	Skeleton,
	useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { STAT_COLOR } from '../../constants/statColor'
import { Pokemon } from '../../interfaces/pokemon.interface'
import { IPokemonCard } from './PokemonCard.interface'
import './PokemonCard.scss'

const PokemonCard: FC<IPokemonCard> = ({ url }) => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const toast = useToast()
	const nav = useNavigate()

	useEffect(() => {
		setIsLoading(true)
		axios
			.get<Pokemon>(url)
			.then(({ data }) => {
				setIsLoading(false)
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

	const goToPokemonPage = () => {
		nav(`/pokemon/${pokemon?.id}`)
	}
	if (isLoading) {
		return (
			<div className='pokemonCard isLoading'>
				<Skeleton height='100%' />
			</div>
		)
	}

	return (
		<div
			className={`pokemonCard is-background-${pokemon?.types[0].type.name}`}
			onClick={goToPokemonPage}
		>
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
						<p
							key={t.type.name}
							className={`is-background-${pokemon?.types[0].type.name}`}
						>
							{t.type.name}
						</p>
					))}
				</div>
				<h4
					className={`pokemonCard__info-title is-color-${pokemon?.types[0].type.name}`}
				>
					Stats
				</h4>
				<div className='pokemonCard__stats'>
					{pokemon?.stats.map(
						(stat, index) =>
							index < 3 && (
								<CircularProgress
									key={stat.stat.name}
									value={stat.base_stat}
									color={STAT_COLOR[stat.stat.name]}
								>
									<CircularProgressLabel color={STAT_COLOR[stat.stat.name]}>
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
