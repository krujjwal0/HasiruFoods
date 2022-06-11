import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const ExpandMoreIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={20} width={20} fill={fill || theme.color.black}>
        <Path d="M10 12.458Q9.833 12.458 9.677 12.396Q9.521 12.333 9.375 12.188L5.604 8.417Q5.354 8.167 5.375 7.792Q5.396 7.417 5.625 7.188Q5.896 6.917 6.25 6.927Q6.604 6.938 6.854 7.188L10 10.354L13.167 7.188Q13.417 6.938 13.76 6.938Q14.104 6.938 14.375 7.208Q14.625 7.458 14.625 7.823Q14.625 8.188 14.375 8.438L10.625 12.188Q10.479 12.333 10.323 12.396Q10.167 12.458 10 12.458Z" />
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

export default ExpandMoreIcon
