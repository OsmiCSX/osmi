import { takeLatest, all } from 'redux-saga/effects'
import API from '@Services/Api'
import FixtureAPI from '@Services/FixtureApi'
import DebugConfig from '@Config/DebugConfig'

/* ------------- Types ------------- */
import { StartupTypes } from '@Redux/StartupRedux'
import { StaticDataTypes } from '@Redux/StaticDataRedux'

/* ------------- Sagas ------------- */
import { startup } from './StartupSagas'
import { getRoot } from './StaticDataSagas'

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(StaticDataTypes.GET_ROOT_REQUEST, getRoot, api)
  ])
}