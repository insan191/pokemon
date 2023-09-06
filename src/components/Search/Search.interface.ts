import { Dispatch, SetStateAction } from 'react'

export interface ISearch {
	search: string
	placeholder: string
	setSearch: Dispatch<SetStateAction<string>>
}
