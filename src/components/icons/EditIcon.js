import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const EditIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={20} width={20} fill={fill || theme.color.black}>
        <Path d="M4.25 15.75H5.479L12.479 8.75L11.25 7.521L4.25 14.521ZM16.188 7.542 12.458 3.812 13.479 2.792Q14 2.271 14.719 2.271Q15.438 2.271 15.958 2.792L17.208 4.042Q17.708 4.542 17.708 5.281Q17.708 6.021 17.208 6.521ZM3.375 17.5Q3.021 17.5 2.76 17.24Q2.5 16.979 2.5 16.625V14.125Q2.5 13.958 2.562 13.802Q2.625 13.646 2.75 13.521L11.229 5.042L14.958 8.771L6.479 17.25Q6.354 17.375 6.198 17.438Q6.042 17.5 5.875 17.5ZM11.875 8.146 11.25 7.521 12.479 8.75Z" />
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

export default EditIcon
