import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const PickerDayButton = ({ small, label, value, color, isActive, onPress }) => {
  const activePressable = {
    backgroundColor: isActive ? color : '#fff',
    width: small ? 35 : 40,
    height: small ? 35 : 40,
  }
  const activeText = {
    color: isActive ? '#fff' : theme.color.black,
    fontSize: small ? 18 : 20,
  }
  return (
    <Pressable
      android_ripple={{ color: color, foreground: true }}
      onPress={() => onPress(value)}
      style={[styles.root, activePressable]}>
      <MetropolisText semiBold style={[styles.text, activeText]}>
        {label}
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 40,
    width: 40,
    height: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
})

export default PickerDayButton
