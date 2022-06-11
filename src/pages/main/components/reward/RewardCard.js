import { StyleSheet, View, Image, Pressable } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import { getDimension } from '../../utils/getDimensions'
import theme from 'theme'
import RedeemIcon from '_icons/RedeemIcon'

const RewardCard = ({ item, index }) => {
  const margin = {
    marginRight: index % 2 ? 0 : 15,
    marginTop: 15,
  }
  return (
    <Pressable
      android_ripple={{ color: theme.color.rippleLightBlue, foreground: true }}
      style={[styles.main, margin]}>
      <Image source={item.source} style={styles.image} />
      <View style={styles.bottom}>
        <MetropolisText medium style={styles.points}>
          {item.points}
        </MetropolisText>
        <View style={styles.icon}>
          <RedeemIcon />
        </View>
      </View>
    </Pressable>
  )
}

const size = getDimension('w') / 2 - 22.5

const styles = StyleSheet.create({
  main: {
    width: size,
    height: size,
    backgroundColor: theme.color.lightBlue,
    borderRadius: 24,
    padding: 15,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 6,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 2,
  },
  bottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  points: {
    fontSize: 14,
  },
})

export default RewardCard
