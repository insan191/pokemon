import { FC, createContext, useState } from 'react'
import { BASE_API } from '../constants'
import { ContextProps, ICustomContext } from '../interfaces/context.interface'

export const CustomContext = createContext<ICustomContext | null>(null)

export const Context: FC<ContextProps> = ({ children }) => {
	const [currentPageUrl, setCurrentPageUrl] = useState<string>(`${BASE_API}`)

	const value: ICustomContext = {
		currentPageUrl,
		setCurrentPageUrl,
	}

	return (
		<CustomContext.Provider value={value}>{children}</CustomContext.Provider>
	)
}
