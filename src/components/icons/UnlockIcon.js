import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G } from 'react-native-svg'

const UnlockIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg width={48.5} height={53.568} viewBox="0 0 48.5 53.568">
        <G transform="translate(-3 -1.493)">
          <Path
            d="M9.556,15H44.944A6.563,6.563,0,0,1,51.5,21.556V39.25a6.563,6.563,0,0,1-6.556,6.556H9.556A6.563,6.563,0,0,1,3,39.25V21.556A6.563,6.563,0,0,1,9.556,15ZM44.944,42.806A3.56,3.56,0,0,0,48.5,39.25V21.556A3.56,3.56,0,0,0,44.944,18H9.556A3.56,3.56,0,0,0,6,21.556V39.25a3.56,3.56,0,0,0,3.556,3.556Z"
            transform="translate(0 9.255)"
            fill="#fff"
          />
          <Path
            d="M10.5,27.255a1.5,1.5,0,0,1-1.5-1.5V15.644a14.139,14.139,0,0,1,27.995-2.827,1.5,1.5,0,0,1-2.94.6A11.139,11.139,0,0,0,12,15.643V25.755A1.5,1.5,0,0,1,10.5,27.255Z"
            transform="translate(4.111)"
            fill="#fff"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48.5,
    height: 53.568,
  },
})

export default UnlockIcon
