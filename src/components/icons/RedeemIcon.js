import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import theme from 'theme'

const RedeemIcon = ({ fill, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Svg height={20} width={20} fill={fill || theme.color.black}>
        <Path d="M3.5 13.896V15.417Q3.5 15.521 3.583 15.604Q3.667 15.688 3.75 15.688H16.25Q16.333 15.688 16.417 15.604Q16.5 15.521 16.5 15.417V13.896ZM3.75 5.562H5.938Q5.833 5.396 5.781 5.208Q5.729 5.021 5.729 4.792Q5.729 3.938 6.333 3.333Q6.938 2.729 7.812 2.729Q8.333 2.729 8.76 3.01Q9.188 3.292 9.521 3.688L9.979 4.271L10.458 3.688Q10.792 3.312 11.229 3.021Q11.667 2.729 12.167 2.729Q13.042 2.729 13.635 3.333Q14.229 3.938 14.229 4.792Q14.229 5.021 14.167 5.198Q14.104 5.375 14.042 5.562H16.25Q16.875 5.562 17.312 6Q17.75 6.438 17.75 7.062V15.438Q17.75 16.062 17.312 16.5Q16.875 16.938 16.25 16.938H3.75Q3.125 16.938 2.688 16.5Q2.25 16.062 2.25 15.438V7.062Q2.25 6.438 2.688 6Q3.125 5.562 3.75 5.562ZM3.5 11.812H16.5V7.083Q16.5 6.979 16.417 6.896Q16.333 6.812 16.25 6.812H11.896L13.5 9L12.5 9.771L9.979 6.375L7.479 9.771L6.458 9L8.083 6.812H3.75Q3.667 6.812 3.583 6.896Q3.5 6.979 3.5 7.083ZM7.792 5.604Q8.146 5.604 8.375 5.375Q8.604 5.146 8.604 4.792Q8.604 4.458 8.375 4.219Q8.146 3.979 7.792 3.979Q7.458 3.979 7.219 4.219Q6.979 4.458 6.979 4.792Q6.979 5.146 7.219 5.375Q7.458 5.604 7.792 5.604ZM12.146 5.604Q12.5 5.604 12.729 5.375Q12.958 5.146 12.958 4.792Q12.958 4.458 12.729 4.219Q12.5 3.979 12.146 3.979Q11.812 3.979 11.573 4.219Q11.333 4.458 11.333 4.792Q11.333 5.146 11.573 5.375Q11.812 5.604 12.146 5.604Z" />
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

export default RedeemIcon
