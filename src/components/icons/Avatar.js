import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G } from 'react-native-svg'

const Avatar =  ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={22} width={22}>
        <G transform="translate(-1111 -682)">
          <Path
            d="M9.647,9.647A2.574,2.574,0,1,0,7.074,7.074,2.574,2.574,0,0,0,9.647,9.647Zm0,1.287c-1.7,0-5.147.869-5.147,2.574v1.287H14.794V13.507C14.794,11.8,11.352,10.934,9.647,10.934Z"
            transform="translate(1112.353 683.353)"
            fill="#5e9c42"
          />
          <Path
            d="M11,2a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-2A11,11,0,1,1,0,11,11,11,0,0,1,11,0Z"
            transform="translate(1111 682)"
            fill="#5e9c42"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Avatar
