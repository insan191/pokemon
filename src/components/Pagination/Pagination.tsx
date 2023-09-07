import { Button } from '@chakra-ui/react'
import { FC, useContext } from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { CustomContext } from '../../context/context'
import { IPagination } from './Pagination.interface'

const Pagination: FC<IPagination> = ({ next, previous }) => {
	const customContext = useContext(CustomContext)
	if (!customContext) return null
	const { setCurrentPageUrl } = customContext

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
				size='md'
				onClick={goToPrev}
				isDisabled={!previous && true}
			>
				<HiArrowSmLeft />
			</Button>
			<Button
				colorScheme='red'
				size='md'
				onClick={goToNext}
				isDisabled={!next && true}
			>
				<HiArrowSmRight />
			</Button>
		</div>
	)
}

export default Pagination
