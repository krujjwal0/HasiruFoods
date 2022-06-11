import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import theme from 'theme'
import MetropolisText from 'MetropolisText'
import GPSLocationIcon from '_icons/GPSLocationIcon'

const GPSLocationButton = ({ onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={styles.main}
      onPress={onPress}>
      <MetropolisText semiBold style={styles.text}>
        Use GPS Location
      </MetropolisText>
      <GPSLocationIcon style={styles.icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 22,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 34,
  },
  icon: {},
})

export default GPSLocationButton
