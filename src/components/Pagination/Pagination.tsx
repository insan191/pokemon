import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { IPagination } from './Pagination.interface'
import './Pagination.scss'

const Pagination: FC<IPagination> = ({ next, previous, setCurrentPageUrl }) => {
	const goToPrev = () => {
		previous && setCurrentPageUrl(previous)
	}

	const goToNext = () => {
		next && setCurrentPageUrl(next)
	}
	return (
		<div className='pagination'>
			<Button
				colorScheme='red'
				size='lg'
				onClick={goToPrev}
				isDisabled={!previous && true}
			>
				<HiArrowSmLeft />
			</Button>
			<Button
				colorScheme='red'
				size='lg'
				onClick={goToNext}
				isDisabled={!next && true}
			>
				<HiArrowSmRight />
			</Button>
		</div>
	)
}

export default Pagination
