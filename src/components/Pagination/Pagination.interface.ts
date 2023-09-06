import { Dispatch, SetStateAction } from 'react'

export interface IPagination {
	setCurrentPageUrl: Dispatch<SetStateAction<string>>
	next?: string
	previous?: null | string
}
