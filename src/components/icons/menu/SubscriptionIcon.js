import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'

const SubscriptionIcon = ({ fill }) => {
  return (
    <View style={styles.container}>
      <Svg height={24} width={24} fill={fill || theme.color.black}>
        <Path d="M4 13V15Q4 15 4 15Q4 15 4 15H20Q20 15 20 15Q20 15 20 15V13ZM4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V15Q22 15.825 21.413 16.413Q20.825 17 20 17H16V22L12 20L8 22V17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V4Q2 3.175 2.588 2.587Q3.175 2 4 2ZM4 10H20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 15V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V15Q4 15 4 15Q4 15 4 15Q4 15 4 15Q4 15 4 15Z" />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
  },
})

export default SubscriptionIcon
