import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import MetropolisText from 'MetropolisText'
import theme from 'theme'

const MenuButton = ({ Icon, label, subLabel, isFocused, onPress }) => {
  const fontColor = {
    color: isFocused ? theme.color.primary : theme.color.black,
  }
  return (
    <Pressable
      onPress={onPress}
      style={styles.pressable}
      android_ripple={{ color: theme.color.primary, foreground: true }}>
      <View style={styles.main}>
        <Icon fill={isFocused ? theme.color.primary : theme.color.black} />
        <MetropolisText semiBold style={[styles.label, fontColor]}>
          {label}
        </MetropolisText>
        <MetropolisText medium style={[styles.subLabel, fontColor]}>
          {subLabel}
        </MetropolisText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    marginLeft: 24,
    fontSize: 19,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
  subLabel: {
    marginLeft: 5,
    marginRight: 'auto',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'capitalize',
  },
})

export default MenuButton
