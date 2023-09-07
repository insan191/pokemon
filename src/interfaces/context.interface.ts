import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ICustomContext {
	currentPageUrl: string
	setCurrentPageUrl: Dispatch<SetStateAction<string>>
}
export interface ContextProps {
	children: ReactNode
}
