import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const AddIcon = ({ style, fill }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={40} width={40} fill={fill || theme.color.black}>
        <Path d="M20 31.667Q19.417 31.667 19.021 31.271Q18.625 30.875 18.625 30.292V21.375H9.708Q9.125 21.375 8.729 20.979Q8.333 20.583 8.333 20Q8.333 19.417 8.729 19.021Q9.125 18.625 9.708 18.625H18.625V9.708Q18.625 9.125 19.021 8.729Q19.417 8.333 20 8.333Q20.583 8.333 20.979 8.729Q21.375 9.125 21.375 9.708V18.625H30.292Q30.875 18.625 31.271 19.021Q31.667 19.417 31.667 20Q31.667 20.583 31.271 20.979Q30.875 21.375 30.292 21.375H21.375V30.292Q21.375 30.875 20.979 31.271Q20.583 31.667 20 31.667Z" />
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

export default AddIcon
