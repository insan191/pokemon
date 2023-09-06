import { Dispatch, SetStateAction } from 'react'

export interface ISearch {
	placeholder: string
	setCurrentPageUrl: Dispatch<SetStateAction<string>>
}
