import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import MetropolisText from 'MetropolisText'

const ProductButton = ({ title, label, Icon, bgColor, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: bgColor, foreground: true }}
      onPress={onPress}
      style={styles.pressable}>
      <View style={styles.pressableTextSection}>
        <MetropolisText bold style={styles.pressableText}>
          {title}
        </MetropolisText>
        <MetropolisText medium style={styles.pressableText}>
          {label}
        </MetropolisText>
      </View>
      <Icon fill={bgColor} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  pressable: {
    backgroundColor: '#fff',
    color: '#373737',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  pressableTextSection: {
    marginRight: 10,
  },
  pressableText: {
    fontSize: 15,
  },
})

export default ProductButton
