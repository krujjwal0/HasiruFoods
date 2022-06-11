import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../utils/getDimensions'
import theme from 'theme'

const OfferCard = ({ item, index }) => {
  const margin = {
    marginRight: index % 2 ? 0 : 15,
    marginTop: 15,
  }
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleGray, foreground: true }}
      style={[styles.mainPressable, margin]}>
      <item.Icon style={styles.icon} />
      <MetropolisText bold style={styles.offer}>
        {item.offer}
      </MetropolisText>
      {item.label !== '' && (
        <MetropolisText medium style={styles.label}>
          {item.label}
        </MetropolisText>
      )}
    </Pressable>
  )
}

const size = getDimension('w') / 2 - 22.5

const styles = StyleSheet.create({
  mainPressable: {
    width: size,
    height: size,
    backgroundColor: theme.color.gray,
    borderRadius: 24,
    padding: 15,
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  icon: {
    alignSelf: 'center',
  },
  offer: {
    marginTop: 5,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
  },
})

export default OfferCard
