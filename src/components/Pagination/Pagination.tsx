import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { IPagination } from './Pagination.interface'
import './Pagination.scss'

const Pagination: FC<IPagination> = ({ goToPrev, goToNext }) => {
	return (
		<div className='pagination'>
			<Button colorScheme='red' size='lg' onClick={goToPrev}>
				<HiArrowSmLeft />
			</Button>
			<Button colorScheme='red' size='lg' onClick={goToNext}>
				<HiArrowSmRight />
			</Button>
		</div>
	)
}

export default Pagination
