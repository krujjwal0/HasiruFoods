import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import theme from 'theme'
import MetropolisText from 'MetropolisText'

const TabButton = ({ isActive, label, right, left, to }) => {
  const navigation = useNavigation()
  const handleOnPress = useCallback(() => {
    navigation.navigate({ name: to })
  }, [to])

  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[
        styles.pressable,
        isActive && styles.activePressable,
        right && styles.marginLeft,
        left && styles.marginRight,
      ]}
      onPress={handleOnPress}>
      <MetropolisText
        semiBold
        style={[styles.text, isActive && styles.activeText]}>
        {label}
      </MetropolisText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: theme.color.gray,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingVertical: 17,
    borderRadius: 26,
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
  marginLeft: {
    marginLeft: 7.5,
  },
  marginRight: {
    marginRight: 7.5,
  },
  activePressable: {
    backgroundColor: theme.color.primary,
  },
  activeText: {
    color: '#FFF',
  },
})

export default TabButton
