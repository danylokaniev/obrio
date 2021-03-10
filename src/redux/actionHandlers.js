
function setPlanets(state, action) {
	return {
		...state,
		planets: action.planets,
	}
}

function setPlanetById(state, action) {
	return {
		...state,
		planetById: action.planet,
	}
}

function nextPage(state, action) {
	return {
		...state,
		currentPage: state.currentPage + 1,
	}
}

function prevPage(state, action) {
	return {
		...state,
		currentPage: state.currentPage - 1,
	}
}

function setPage(state, action) {
	return {
		...state,
		currentPage: action.page,
	}
}

function setError(state, action) {
	return {
		...state,
		error: action.error,
	}
}

function startLoader(state) {
	return {
		...state,
		loader: true,
	}
}

function stopLoader(state) {
	return {
		...state,
		loader: false,
	}
}


export default {
	SET_PLANETS: setPlanets,
	SET_PLANET_BY_ID: setPlanetById,
	NEXT_PAGE: nextPage,
	PREV_PAGE: prevPage,
	SET_PAGE: setPage,
	SET_ERROR: setError,
	START_LOADER: startLoader,
	STOP_LOADER: stopLoader,
	__default__: state => state
 };
