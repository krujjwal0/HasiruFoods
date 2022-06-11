import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import theme from 'theme'
import CallIcon from '_icons/CallIcon'

const CallButton = () => {
  const handleOnPress = useCallback(() => {}, [])

  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[styles.pressable]}
      onPress={handleOnPress}>
      <CallIcon />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#fff',
    borderRadius: 26,
    overflow: 'hidden',
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CallButton
