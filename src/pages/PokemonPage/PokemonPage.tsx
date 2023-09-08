import {
	CircularProgress,
	CircularProgressLabel,
	Skeleton,
	useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { FaRulerVertical, FaWeightHanging } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_API } from '../../constants/baseApi'
import { STAT_COLOR } from '../../constants/statColor'
import { Pokemon } from '../../interfaces/pokemon.interface'
import { conversion } from '../../utils/conversion'
import './PokemonPage.scss'

const PokemonPage: FC = () => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const toast = useToast()
	const { id } = useParams()
	const nav = useNavigate()

	useEffect(() => {
		setIsLoading(true)
		axios
			.get<Pokemon>(`${BASE_API}/${id}`)
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
	}, [id, nav, toast])

	if (isLoading) {
		return (
			<div className='pokemonPage'>
				<Skeleton height='100%' />
			</div>
		)
	}
	return (
		<div className={`pokemonPage is-background-${pokemon?.types[0].type.name}`}>
			<div className='pokemonPage__img'>
				<img
					src={pokemon?.sprites.other['official-artwork'].front_default}
					alt='pokemon'
				/>
			</div>
			<div className='pokemonPage__info'>
				<h2
					className={`pokemonPage__name is-color-${pokemon?.types[0].type.name}`}
				>
					{pokemon?.name}
				</h2>
				<div className='pokemonPage__block'>
					<h3
						className={`pokemonPage__title is-color-${pokemon?.types[0].type.name}`}
					>
						About
					</h3>
					<div className='pokemonPage__about'>
						<div className='pokemonPage__about-item'>
							<p className='pokemonPage__about-title'>Weight</p>
							<div className='pokemonPage__about-block'>
								<p className={`is-color-${pokemon?.types[0].type.name}`}>
									{conversion(pokemon?.weight)}kg
								</p>
								<span className={`is-color-${pokemon?.types[0].type.name}`}>
									<FaWeightHanging />
								</span>
							</div>
						</div>
						<div className='pokemonPage__about-item'>
							<p className='pokemonPage__about-title'>Height</p>
							<div className='pokemonPage__about-block'>
								<p className={`is-color-${pokemon?.types[0].type.name}`}>
									{conversion(pokemon?.height)}m
								</p>
								<span className={`is-color-${pokemon?.types[0].type.name}`}>
									<FaRulerVertical />
								</span>
							</div>
						</div>
						<div className='pokemonPage__about-item'>
							<p className='pokemonPage__about-title'>Moves</p>
							<div className='pokemonPage__about-moves'>
								{pokemon?.moves.map(
									(move, index) =>
										index < 5 && (
											<p
												key={move.move.name}
												className={`is-color-${pokemon?.types[0].type.name}`}
											>
												{move.move.name}
											</p>
										)
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='pokemonPage__block'>
					<h3
						className={`pokemonPage__title is-color-${pokemon?.types[0].type.name}`}
					>
						Stats
					</h3>
					<div className='pokemonPage__stats'>
						{pokemon?.stats.map(stat => (
							<div key={stat.stat.name} className='pokemonPage__stats-item'>
								<CircularProgress
									key={stat.stat.name}
									value={stat.base_stat}
									color={STAT_COLOR[stat.stat.name]}
									size='100%'
								>
									<CircularProgressLabel
										color={STAT_COLOR[stat.stat.name]}
										fontSize='50px'
										className=''
									>
										{stat.base_stat}
									</CircularProgressLabel>
								</CircularProgress>
								<div className='pokemonPage__stats-name'>
									<p>{stat.stat.name}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PokemonPage
