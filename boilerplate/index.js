import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App)