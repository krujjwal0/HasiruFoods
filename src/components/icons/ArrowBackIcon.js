import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const ArrowBackIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={20} width={20} fill={fill || theme.color.black}>
        <Path d="M9.271 15.771 4.021 10.542Q3.896 10.396 3.844 10.271Q3.792 10.146 3.792 10Q3.792 9.854 3.844 9.729Q3.896 9.604 4.021 9.458L9.292 4.188Q9.479 4.021 9.719 4.021Q9.958 4.021 10.167 4.208Q10.354 4.417 10.344 4.667Q10.333 4.917 10.146 5.104L5.875 9.375H15.312Q15.542 9.375 15.74 9.562Q15.938 9.75 15.938 10Q15.938 10.25 15.74 10.438Q15.542 10.625 15.312 10.625H5.875L10.167 14.917Q10.354 15.104 10.354 15.323Q10.354 15.542 10.146 15.771Q9.958 15.938 9.708 15.938Q9.458 15.938 9.271 15.771Z" />
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

export default ArrowBackIcon
