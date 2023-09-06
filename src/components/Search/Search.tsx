import { FC } from 'react'
import { ISearch } from './Search.interface'

const Search: FC<ISearch> = ({ search, setSearch, placeholder }) => {
	return (
		<div className='search'>
			<input
				type='search'
				placeholder={placeholder}
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</div>
	)
}

export default Search
