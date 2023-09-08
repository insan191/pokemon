import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ISearch } from './Search.interface'
import './Search.scss'

const Search: FC<ISearch> = ({ placeholder }) => {
	const [search, setSearch] = useState<string>('')

	const nav = useNavigate()

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			nav(`/${search && 'pokemon/'}${search}`)
		}
	}

	const onClick = () => {
		nav(`/${search && 'pokemon/'}${search}`)
	}
	return (
		<div className='search'>
			<input
				className='search__input'
				placeholder={placeholder}
				value={search}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
				onKeyDown={onEnter}
			/>
			<button className='search__icon' onClick={onClick} type='submit'>
				<FaSearchengin />
			</button>
		</div>
	)
}

export default Search
