import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import CallButton from './CallButton'
import theme from 'theme'
import OrderSuccessIcon from '_icons/OrderSuccessIcon.svg'
import HappyEmoji from '_icons/HappyEmoji.svg'
import CompleteIcon from '_icons/CompleteIcon'
import IncompleteIcon from '_icons/IncompleteIcon'

const ActiveOrderCard = ({ item }) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <CompleteIcon style={styles.statusIcon} />
        {/* <IncompleteIcon style={styles.statusIcon} /> */}
        <MetropolisText medium style={styles.title}>
          Your Order is on the way
        </MetropolisText>
        <CallButton />
      </View>
      <View style={styles.bottom}>
        <View style={styles.illustration}>
          <HappyEmoji style={styles.happyEmojiIcon} />
          <OrderSuccessIcon style={styles.orderSuccessIcon} />
        </View>
        <View style={styles.textGroup}>
          <MetropolisText medium style={styles.timeText}>
            Will be delivered on 14th June between 6 A.M & 8 A.M
          </MetropolisText>
          <MetropolisText medium style={styles.itemText}>
            1x Idli batter | 2x Dosa Batter
          </MetropolisText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray + 'bb',
    padding: 15,
    borderRadius: 16,
    paddingBottom: 20,
    marginTop: 20,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginRight: 'auto',
  },
  statusIcon: {
    marginRight: 10,
  },
  bottom: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  illustration: {
    // alignItems: 'center',
  },
  happyEmojiIcon: {
    marginLeft: 'auto',
    marginBottom: -25,
    marginRight: 30,
  },
  orderSuccessIcon: {},
  textGroup: {
    alignItems: 'center',
    marginTop: 15,
  },
  timeText: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 22,
  },
  itemText: {
    marginTop: 8,
    textAlign: 'center',
  },
})

export default ActiveOrderCard
