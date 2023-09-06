import { Button } from '@chakra-ui/react'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { FaSearchengin } from 'react-icons/fa'
import { BASE_API } from '../../constants'
import { ISearch } from './Search.interface'

const Search: FC<ISearch> = ({ placeholder, setCurrentPageUrl }) => {
	const [search, setSearch] = useState<string>('')

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
				type='search'
				placeholder={placeholder}
				value={search}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setSearch(e.target.value)
				}
				onKeyDown={onEnter}
			/>
			<Button size='md' onClick={onClick}>
				<FaSearchengin />
			</Button>
		</div>
	)
}

export default Search
