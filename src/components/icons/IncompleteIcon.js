import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const IncompleteIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg
        width={19.5}
        height={19.5}
        fill={fill || theme.color.black}
        viewBox="0 0 19.5 19.5">
        <Path
          d="M9.75,2A7.75,7.75,0,1,0,17.5,9.75,7.759,7.759,0,0,0,9.75,2m0-2A9.75,9.75,0,1,1,0,9.75,9.75,9.75,0,0,1,9.75,0Z"
          fill="#5e9c42"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IncompleteIcon
