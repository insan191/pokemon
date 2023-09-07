import { ChangeEvent, FC, KeyboardEvent, useContext, useState } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import { BASE_API } from '../../constants'
import { CustomContext } from '../../context/context'
import { ISearch } from './Search.interface'
import './Search.scss'

const Search: FC<ISearch> = ({ placeholder }) => {
	const [search, setSearch] = useState<string>('')

	const customContext = useContext(CustomContext)
	if (!customContext) return null
	const { setCurrentPageUrl } = customContext

	const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			setCurrentPageUrl(`${BASE_API}/${search}`)
		}
	}

	const onClick = () => {
		setCurrentPageUrl(`${BASE_API}/${search}`)
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
