import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import AppNavigation from '../Navigation/AppNavigation'

// styles
import { apply } from '../Themes/OsmiProvider'

const RootContainer = (props) => {
  useEffect(() => {
    if (!ReduxPersist.active) {
      props.startup()
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={apply('white')} />
      <AppNavigation />
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)