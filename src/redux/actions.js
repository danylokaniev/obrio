import {SET_PLANETS, SET_PLANET_BY_ID, NEXT_PAGE, PREV_PAGE, SET_PAGE, START_LOADER, STOP_LOADER} from './const'

export const setPlanets = (planets) => ({type: SET_PLANETS, planets})
export const setPlanetById = (planet) => ({type: SET_PLANET_BY_ID, planet})
export const nextPage = () => ({type: NEXT_PAGE})
export const prevPage = () => ({type: PREV_PAGE})
export const setPage = (page) => ({type: SET_PAGE, page})
export const setError = (error) => ({type: SET_PAGE, error})
export const startLoader = () => ({type: START_LOADER})
export const stopLoader = () => ({type: STOP_LOADER})