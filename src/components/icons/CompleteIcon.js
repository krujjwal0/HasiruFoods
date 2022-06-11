import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Circle, G, Path } from 'react-native-svg'
import theme from 'theme'

const CompleteIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg
        width={19.5}
        height={19.5}
        fill={fill || theme.color.black}
        viewBox="0 0 19.5 19.5">
        <G transform="translate(-1375 -650)">
          <Circle
            cx="9.75"
            cy="9.75"
            r="9.75"
            transform="translate(1375 650)"
            fill="#5e9c42"
          />
          <Path
            d="M9.75,2A7.75,7.75,0,1,0,17.5,9.75,7.759,7.759,0,0,0,9.75,2m0-2A9.75,9.75,0,1,1,0,9.75,9.75,9.75,0,0,1,9.75,0Z"
            transform="translate(1375 650)"
            fill="#5e9c42"
          />
          <Path
            d="M52.831,857.858a1,1,0,0,1-.707-.293l-3.282-3.282a1,1,0,0,1,1.414-1.414l2.575,2.575L59.57,848.7a1,1,0,1,1,1.414,1.414l-7.446,7.446A1,1,0,0,1,52.831,857.858Z"
            transform="translate(1329.837 -193.385)"
            fill="#fff"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CompleteIcon
