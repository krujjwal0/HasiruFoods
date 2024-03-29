import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G, Rect } from 'react-native-svg'

const AddToCartIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={32} width={32}>
        <G transform="translate(-1077 -628)">
          <Path
            d="M-1083.8-583.46a1.875,1.875,0,0,1-1.6-1.491,1.876,1.876,0,0,1,.9-2l-2.354-11.5h-2.341a.807.807,0,0,1-.57-.237.807.807,0,0,1-.234-.571v-.536a.8.8,0,0,1,.8-.8h3.432a.8.8,0,0,1,.785.643l.314,1.5h13.156a.807.807,0,0,1,.629.3.806.806,0,0,1,.156.68l-1.583,6.967a.8.8,0,0,1-.786.625h-9.82l.219,1.072h8.991a.8.8,0,0,1,.629.3.806.806,0,0,1,.156.68l-.185.813a1.877,1.877,0,0,1,1.04,1.959,1.877,1.877,0,0,1-1.554,1.582,1.876,1.876,0,0,1-1.977-1,1.878,1.878,0,0,1,.361-2.189h-7.022a1.877,1.877,0,0,1,.381,2.157,1.878,1.878,0,0,1-1.691,1.062A1.871,1.871,0,0,1-1083.8-583.46Zm4.5-17.138a.516.516,0,0,1-.516-.516v-2.32h-2.32a.515.515,0,0,1-.516-.515v-.516a.516.516,0,0,1,.516-.516h2.32V-607.3a.515.515,0,0,1,.516-.516h.515a.515.515,0,0,1,.516.516v2.319h2.32a.513.513,0,0,1,.365.151.513.513,0,0,1,.151.365v.516a.515.515,0,0,1-.151.365.512.512,0,0,1-.365.15h-2.32v2.32a.516.516,0,0,1-.516.516Z"
            transform="translate(2173.352 1239.63)"
            fill={fill}
          />
          <Rect
            height={32}
            width={32}
            transform="translate(1077 628)"
            fill="none"
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

export default AddToCartIcon
