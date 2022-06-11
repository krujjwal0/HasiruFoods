import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'

const MenuIcon =  ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={16} width={21.001}>
        <Path
          d="M-499-594a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm5-7a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Zm-5-7a1,1,0,0,1-1-1,1,1,0,0,1,1-1h14a1,1,0,0,1,1,1,1,1,0,0,1-1,1Z"
          transform="translate(500 610)"
          fill="#5e9c42"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  },
})

export default MenuIcon
