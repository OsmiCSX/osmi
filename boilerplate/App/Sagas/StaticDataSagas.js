import { call, put, select } from 'redux-saga/effects'
import StaticDataActions from '@Redux/StaticDataRedux'

export function * getRoot (api, action) {
  const { data } = action
  const response = yield call(api.getRoot, data)

  if (response.ok) {
    yield put(StaticDataActions.getRootSuccess(response))
  } else {
    yield put(StaticDataActions.getRootFailure(response))
  }
}