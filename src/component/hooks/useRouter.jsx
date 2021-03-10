import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

import { useMemo } from 'react';

export const useRouter = () => {
	const params = useParams();
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	return useMemo(() => {
		return {
			push: history.push,
			replace: history.replace,
			pathname: location.pathname,
			search: location.search,
			query: {
				...params
			},
			match,
			location,
			history,
			getParams: (query) => new URLSearchParams(location.search).get(query)
		};
	}, [params, match, location, history]);
}