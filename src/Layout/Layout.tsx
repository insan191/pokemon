import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav'
const Layout = () => {
	return (
		<div className='layout'>
			<Nav />
			<main className='main'>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
