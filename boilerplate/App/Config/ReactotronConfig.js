import Config from './DebugConfig'
import Reactotron from 'reactotron-react-native'
import Immutable from 'seamless-immutable'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import { name } from '../../app.json'

const reactotron = Reactotron
  .configure({ name })
  .useReactNative()
  .use(reduxPlugin({ onRestore: Immutable }))
  .use(sagaPlugin())

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}
export default reactotron
console.tron = reactotron
