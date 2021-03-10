import React, { useEffect } from 'react'
import { getPlanetsTH } from './../../redux/thunks'
import Pagination from '../pagination/Pagination'
import { useRouter } from './../hooks/useRouter'
import { useSelector, useDispatch, batch } from 'react-redux'
import { nextPage, prevPage, startLoader, setPage } from '../../redux/actions'




export default function Planets() {
	const { planets } = useSelector(state => state)
	const dispatch = useDispatch()
	const router = useRouter()
	console.log('before')
	const currentPage = router.getParams('page')



	const handleNextPage = () => {
		console.log('handleNextPage')
		router.push({
			pathname: router.pathname,
			search: `page=${Number(currentPage || 1) + 1}`
		})

		batch(() => {
			dispatch(startLoader())
		})
	}

	const handlePrevPage = () => {
		console.log('handlePrevPage')
		router.push({
			pathname: router.pathname,
			search: `page=${Number(currentPage || 1) - 1}`
		})

		batch(() => {
			dispatch(startLoader())
		})
	}

	useEffect(() => {
		console.log('effect')
		dispatch(getPlanetsTH(currentPage))
		return () => { }
	}, [currentPage])

	console.log('after')

	return (
		<div>
			{
				planets?.length
					? <div>
						{planets.map(planet => (<div>{planet.name}</div>))}
						<Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} currentPage={currentPage} />
					</div>
					: <div>Loader...</div>
			}
		</div>
	)
}
