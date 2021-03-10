import { setError, setPlanets , stopLoader} from './actions'
import { batch } from 'react-redux'

export const getPlanetsTH = (currentPage = 1) => (dispatch, getState) => {

	fetch(`https://swapi.dev/api/planets?page=${currentPage}`)
		.then(response => {
			if (!response.ok) {
					dispatch(setError({
						status: response.status,
						message: response.message,
					}))
			}
			return response
		})
		.then(data => data.json())
		.then(data => batch(() => {
			dispatch(setPlanets(data.results))
		}))
		.finally(() => dispatch(stopLoader()))
}