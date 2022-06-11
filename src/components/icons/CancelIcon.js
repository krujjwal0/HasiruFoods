import { StyleSheet, View } from 'react-native'
import { Svg, Circle, G, Path } from 'react-native-svg'
import React from 'react'
import theme from 'theme'

const CancelIcon = ({ fill, style }) => {
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
            fill="#f44e5e"
          />
          <Path
            d="M9.75,2A7.75,7.75,0,1,0,17.5,9.75,7.759,7.759,0,0,0,9.75,2m0-2A9.75,9.75,0,1,1,0,9.75,9.75,9.75,0,0,1,9.75,0Z"
            transform="translate(1375 650)"
            fill="#f44e5e"
          />
          <Path
            d="M60.277,850.412h-11.4a1,1,0,1,1,0-2h11.4a1,1,0,0,1,0,2Z"
            transform="translate(1946.784 20.534) rotate(45)"
            fill="#fff"
          />
          <Path
            d="M60.277,850.412h-11.4a1,1,0,1,1,0-2h11.4a1,1,0,0,1,0,2Z"
            transform="translate(745.534 97.717) rotate(-45)"
            fill="#fff"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CancelIcon
