import React, { useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Button from '@material-ui/core/Button'

import './pagination.scss'

export default function Pagination(props) {
	const { error, planets } = useSelector(state => state)
	const { handleNextPage, handlePrevPage, currentPage } = props

	return (
		error?.message
			? <div className="error">{error.message}</div>
			: (
				planets.length && (
					<div className="pagination">
						<Button variant="contained" onClick={handlePrevPage}><ArrowBackIosIcon /></Button>
						{currentPage}
						<Button variant="contained" onClick={handleNextPage}><ArrowForwardIosIcon /></Button>
					</div>
				)
			))
}