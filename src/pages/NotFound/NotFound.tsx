import { FC } from 'react'
import './NotFound.scss'

const NotFound: FC = () => {
	return (
		<div className='notFound'>
			<p className=''>Not Found</p>
			<img src='/notFound.png' alt='pikachu' />
		</div>
	)
}

export default NotFound
