import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'

import MetropolisText from 'MetropolisText'
import theme from 'theme'

const SlotSectionButton = ({
  day,
  date,
  month,
  leftBtn,
  rightBtn,
  isActive,
  onPress,
}) => {
  const margin = {
    marginLeft: rightBtn && 7.5,
    marginRight: leftBtn && 7.5,
  }

  const activeBtn = {
    backgroundColor: isActive ? theme.color.primary : theme.color.gray,
  }

  const activeText = {
    color: isActive ? '#fff' : theme.color.black,
  }

  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[styles.main, margin, activeBtn]}
      onPress={onPress}>
      <MetropolisText semiBold style={[styles.strong, activeText]}>
        {day} Day
      </MetropolisText>
      <View style={styles.bottomBox}>
        <MetropolisText medium style={[styles.small, activeText]}>
          {date}
        </MetropolisText>
        <MetropolisText medium style={[styles.th, activeText]}>
          th
        </MetropolisText>
        <MetropolisText medium style={[styles.small, activeText]}>
          {month}
        </MetropolisText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    overflow: 'hidden'
  },
  bottomBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  strong: {
    fontSize: 20,
  },
  small: {
    fontSize: 18,
  },
  th: {
    fontSize: 10,
    marginRight: 2,
  },
})

export default SlotSectionButton
