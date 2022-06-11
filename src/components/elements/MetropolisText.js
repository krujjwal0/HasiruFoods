import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const MetropolisText = ({ children, style, ...props }) => {
  const { black, extraBold, bold, semiBold } = props
  const { medium, regular, light, extraLight, thin } = props
  const [fontFamily, setFontFamily] = useState('Metropolis-Regular')

  useEffect(() => {
    if (black) setFontFamily('Metropolis-Black')
    else if (extraBold) setFontFamily('Metropolis-ExtraBold')
    else if (bold) setFontFamily('Metropolis-Bold')
    else if (semiBold) setFontFamily('Metropolis-SemiBold')
    else if (medium) setFontFamily('Metropolis-Medium')
    else if (regular) setFontFamily('Metropolis-Regular')
    else if (light) setFontFamily('Metropolis-Light')
    else if (extraLight) setFontFamily('Metropolis-ExtraLight')
    else if (thin) setFontFamily('Metropolis-Thin')
  }, [
    black,
    extraBold,
    bold,
    semiBold,
    medium,
    regular,
    light,
    extraLight,
    thin,
  ])

  const styleProps = [
    {
      fontFamily: fontFamily,
      color: '#373737',
    },
    style,
  ]

  return (
    <Text style={styleProps} {...props}>
      {children}
    </Text>
  )
}

MetropolisText.propTypes = {
  black: PropTypes.bool,
  extraBold: PropTypes.bool,
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  medium: PropTypes.bool,
  regular: PropTypes.bool,
  light: PropTypes.bool,
  extraLight: PropTypes.bool,
  thin: PropTypes.bool,
}

export default MetropolisText
