import { FC } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import { IPokemonList } from './PokemonList.interface'
import './PokemonList.scss'

const PokemonList: FC<IPokemonList> = ({ pokemonData }) => {
	return (
		<div className='pokemonList'>
			{pokemonData?.map(p => (
				<PokemonCard key={p.name} url={p.url} />
			))}
		</div>
	)
}

export default PokemonList
