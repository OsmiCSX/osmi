import { memo } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

// Styles
import styles from '../Styles/BaseStyle'
import { apply } from '@Themes/OsmiProvider'

const Button = props => {
  const { ...restProps } = props
  const { style } = restProps

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply('white-soft'))}
    {...props}>
      <View style={style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

Button.defaultProps = {
  children: null
}

export default memo(Button)