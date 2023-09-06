import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
const Layout = () => {
	return (
		<div className='layout'>
			<Nav />
			<main className='main'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
