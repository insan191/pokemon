import { FC } from 'react'
import { MdCatchingPokemon } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Search from '../../components/Search/Search'
import './Nav.scss'

const Nav: FC = () => {
	return (
		<nav className='nav'>
			<div className='nav__logo'>
				<Link to='/'>
					<span>
						<MdCatchingPokemon />
					</span>
					<h1>Pokemon</h1>
				</Link>
			</div>
			<Search placeholder='Какого покемона ищешь?' />
		</nav>
	)
}

export default Nav
