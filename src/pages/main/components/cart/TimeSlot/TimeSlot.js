import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import MetropolisText from 'MetropolisText'
import theme from 'theme'

const TimeSlot = ({ item }) => {
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[styles.navButton]}>
      <MetropolisText semiBold style={styles.time}>
        {item.startTime} - {item.endTime}
      </MetropolisText>
      <MetropolisText semiBold style={styles.prise}>
        {item.prise}
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  navButton: {
    backgroundColor: theme.color.gray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 22,
    borderRadius: 18,
    overflow: 'hidden',
  },
  time: {
    fontSize: 21,
  },
  prise: {
    fontSize: 21,
  },
})

export default TimeSlot
