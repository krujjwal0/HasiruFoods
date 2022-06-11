import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G, Rect } from 'react-native-svg'

const ManageSubscriptionsIcon = ({ fill }) => {
  return (
    <View style={styles.container}>
      <Svg height={24} width={24} fill={fill || theme.color.black}>
        <Path d="M8.075 4.1Q7.675 4.1 7.4 3.825Q7.125 3.55 7.125 3.15Q7.125 2.775 7.4 2.5Q7.675 2.225 8.075 2.225H15.95Q16.325 2.225 16.6 2.5Q16.875 2.775 16.875 3.15Q16.875 3.55 16.6 3.825Q16.325 4.1 15.95 4.1ZM5.125 7.025Q4.725 7.025 4.45 6.75Q4.175 6.475 4.175 6.075Q4.175 5.7 4.45 5.425Q4.725 5.15 5.125 5.15H18.9Q19.275 5.15 19.55 5.425Q19.825 5.7 19.825 6.075Q19.825 6.475 19.55 6.75Q19.275 7.025 18.9 7.025ZM4.125 21.675Q3.35 21.675 2.8 21.125Q2.25 20.575 2.25 19.8V9.95Q2.25 9.175 2.8 8.625Q3.35 8.075 4.125 8.075H19.875Q20.65 8.075 21.2 8.625Q21.75 9.175 21.75 9.95V19.8Q21.75 20.575 21.2 21.125Q20.65 21.675 19.875 21.675ZM4.125 19.8H19.875Q19.875 19.8 19.875 19.8Q19.875 19.8 19.875 19.8V9.95Q19.875 9.95 19.875 9.95Q19.875 9.95 19.875 9.95H4.125Q4.125 9.95 4.125 9.95Q4.125 9.95 4.125 9.95V19.8Q4.125 19.8 4.125 19.8Q4.125 19.8 4.125 19.8ZM11.525 17.775 14.7 15.625Q15.125 15.35 15.125 14.875Q15.125 14.4 14.7 14.1L11.525 11.975Q11.05 11.65 10.562 11.925Q10.075 12.2 10.075 12.75V16.975Q10.075 17.525 10.562 17.8Q11.05 18.075 11.525 17.775ZM4.125 9.95Q4.125 9.95 4.125 9.95Q4.125 9.95 4.125 9.95V19.8Q4.125 19.8 4.125 19.8Q4.125 19.8 4.125 19.8Q4.125 19.8 4.125 19.8Q4.125 19.8 4.125 19.8V9.95Q4.125 9.95 4.125 9.95Q4.125 9.95 4.125 9.95Z" />
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

export default ManageSubscriptionsIcon