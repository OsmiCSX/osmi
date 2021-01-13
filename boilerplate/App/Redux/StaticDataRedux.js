import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getRootRequest: ['data'],
  getRootSuccess: ['data'],
  getRootFailure: ['error']
})

export const StaticDataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  main: { data: null, fetching: false, error: null }
})

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  getStaticData: state => state.staticData.main
}

/* ------------- Reducers ------------- */
export const getRootRequest = (state, { data }) =>
  state.merge({ ...state, main: { ...state.main, fetching: true, error: null } })
export const getRootSuccess = (state, { data }) =>
  state.merge({ ...state, main: { ...state.main, data, fetching: false, error: null } })
export const getRootFailure = (state, { error }) =>
  state.merge({ ...state, main: { ...state.main, fetching: false, error } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ROOT_REQUEST]: getRootRequest,
  [Types.GET_ROOT_SUCCESS]: getRootSuccess,
  [Types.GET_ROOT_FAILURE]: getRootFailure
})