import { FC } from 'react'
import { IPokemonList } from './PokemonList.interface'

const PokemonList: FC<IPokemonList> = ({ pokemonData }) => {
	return (
		<ul>
			{pokemonData?.map(pItem => (
				<li key={pItem.name}>{pItem?.name}</li>
			))}
		</ul>
	)
}

export default PokemonList
