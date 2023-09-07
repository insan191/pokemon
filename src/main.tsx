import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { Context } from './context/context.tsx'
import './index.scss'

const theme = extendTheme({
	styles: {
		global: () => ({
			body: {
				bg: '',
				fontFamily: '',
				color: '',
				transitionProperty: '',
				lineHeight: '',
				transitionDuration: '',
			},
			'*, *::before, &::after': {
				borderColor: '',
			},
		}),
	},
})
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Context>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</Context>
	</React.StrictMode>
)
