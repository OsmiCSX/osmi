import { connect } from 'react-redux'
import { StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

// Styles
import styles from './Styles/WelcomeScreenStyle'
import { apply } from '@Themes/OsmiProvider'

const WelcomeScreen = props => {
  return (
    <SafeAreaView style={apply("flex justify-center items-center")}>
      <StatusBar barStyle='dark-content' backgroundColor={apply('white')} />
      <Icon name='earth' size={80} style={apply('mb-3')} />
      <Text style={apply("text-lg text-black")}>Hello World!</Text>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
