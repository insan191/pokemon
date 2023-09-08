import { Dispatch, SetStateAction } from 'react'

export interface IPagination {
	next?: null | string
	previous?: null | string
	setCurrentPageUrl: Dispatch<SetStateAction<string>>
}
