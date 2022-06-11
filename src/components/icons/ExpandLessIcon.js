import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const ExpandLessIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={20} width={20} fill={fill || theme.color.black}>
        <Path d="M5.625 12.188Q5.375 11.938 5.375 11.573Q5.375 11.208 5.625 10.958L9.375 7.208Q9.521 7.062 9.677 7Q9.833 6.938 10 6.938Q10.167 6.938 10.323 7Q10.479 7.062 10.625 7.208L14.396 10.979Q14.646 11.229 14.656 11.573Q14.667 11.917 14.396 12.188Q14.146 12.438 13.781 12.438Q13.417 12.438 13.167 12.188L10 9.042L6.833 12.208Q6.583 12.458 6.24 12.458Q5.896 12.458 5.625 12.188Z" />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
})

export default ExpandLessIcon
