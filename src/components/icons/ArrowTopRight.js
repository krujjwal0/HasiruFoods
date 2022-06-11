import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'

const ArrowTopRight =  ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={36.002} width={36.002}>
        <Path
          d="M4703,1065a18,18,0,1,1,12.727-5.272A18,18,0,0,1,4703,1065Zm1.317-21.036h0l-7.981,7.981a.939.939,0,0,0,0,1.333l.889.889a.94.94,0,0,0,1.333,0l7.983-7.982-.158,6.53a.942.942,0,0,0,.94.964h1.233a.943.943,0,0,0,.941-.942v-10.794a.94.94,0,0,0-.942-.942H4697.75a.94.94,0,0,0-.935.942v1.232a.937.937,0,0,0,.938.942h.026l6.534-.159Z"
          transform="translate(-4684.997 -1028.998)"
          fill="#fff"
        />
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

export default ArrowTopRight
