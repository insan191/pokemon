import { FC } from 'react'
import { IPokemonList } from './PokemonList.interface'

const PokemonList: FC<IPokemonList> = ({ pokemonData }) => {
	return (
		<ul>
			{pokemonData?.map(p => (
				<li key={p.name}>{p?.name}</li>
			))}
		</ul>
	)
}

export default PokemonList
