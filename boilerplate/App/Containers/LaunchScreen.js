import { useCallback } from 'react'
import { connect } from 'react-redux'
import { StatusBar, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '@Images'

// Components
import Button from '@Components/Button/Base'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '@Themes/OsmiProvider'

const LaunchScreen = props => {
  const _navigateExplore = useCallback(() => props.navigation.navigate("WelcomeScreen"), [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={apply('gray-900')} />

      <Image source={Images.appLogo} style={styles.appLogo} />
      <Text style={styles.title}>Welcome to Osmi Kit</Text>
      <Text style={styles.desc}>This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Osmi Kit.</Text>

      <Button style={styles.btnExplore} onPress={_navigateExplore}>
        <Text style={styles.btnExploreLabel}>Explore</Text>
      </Button>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
