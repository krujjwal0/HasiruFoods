import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path, G, Rect } from 'react-native-svg'

const ActiveOrdersIcon = ({ fill }) => {
  return (
    <View style={styles.container}>
      <Svg height={24} width={24} fill={fill || theme.color.black}>
        <Path d="M5.1 18.95Q4.725 18.95 4.45 18.675Q4.175 18.4 4.175 18Q4.175 17.625 4.45 17.35Q4.725 17.075 5.1 17.075H6.15V10.05Q6.15 8.025 7.375 6.437Q8.6 4.85 10.55 4.375V3.7Q10.55 3.1 10.975 2.675Q11.4 2.25 12 2.25Q12.6 2.25 13.025 2.675Q13.45 3.1 13.45 3.7V4.375Q15.425 4.85 16.65 6.437Q17.875 8.025 17.875 10.05V17.075H18.9Q19.3 17.075 19.575 17.35Q19.85 17.625 19.85 18Q19.85 18.4 19.575 18.675Q19.3 18.95 18.9 18.95ZM12 11.575Q12 11.575 12 11.575Q12 11.575 12 11.575Q12 11.575 12 11.575Q12 11.575 12 11.575ZM12 21.825Q11.2 21.825 10.625 21.25Q10.05 20.675 10.05 19.875H13.95Q13.95 20.675 13.388 21.25Q12.825 21.825 12 21.825ZM8.025 17.075H16V10.075Q16 8.4 14.825 7.237Q13.65 6.075 12 6.075Q10.35 6.075 9.188 7.25Q8.025 8.425 8.025 10.05Z" />
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

export default ActiveOrdersIcon
