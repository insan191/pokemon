import { Dispatch, SetStateAction } from 'react'

export interface IPagination {
	setCurrentPageUrl: Dispatch<SetStateAction<string>>
	next?: null | string
	previous?: null | string
}
