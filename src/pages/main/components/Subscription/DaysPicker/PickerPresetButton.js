import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import theme from 'theme'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../../utils/getDimensions'

const PickerPresetButton = ({ small, label, isActive, onPress }) => {
  const activePressable = {
    backgroundColor: isActive ? theme.color.primary : '#f9f9f9',
    width: small
      ? getDimension('w') / 3 - 24
      : getDimension('w') / 3 - 17,
  }
  const activeText = {
    color: isActive ? '#fff' : theme.color.darkGray,
    fontSize: small ? 13 : 15,
  }
  return (
    <Pressable
      android_ripple={{ color: theme.color.ripplePrimary, foreground: true }}
      onPress={onPress}
      style={[styles.root, activePressable]}>
      <MetropolisText
        numberOfLines={1}
        medium
        style={[styles.text, activeText]}>
        {label}
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    overflow: 'hidden',
    marginBottom: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
})

export default PickerPresetButton
