import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MetropolisText from 'MetropolisText'
import theme from 'theme'
import OrderSuccessIcon from '_icons/OrderSuccessIcon.svg'
import HappyEmoji from '_icons/HappyEmoji.svg'
import CompleteIcon from '_icons/CompleteIcon'
import IncompleteIcon from '_icons/IncompleteIcon'
import CancelIcon from '_icons/CancelIcon'

const ArchivedOrderCard = ({ item }) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <CompleteIcon style={styles.statusIcon} />
        {/* <CancelIcon style={styles.statusIcon} /> */}
        <MetropolisText medium style={styles.title}>
          Delivered on June 24
        </MetropolisText>
      </View>
      <View style={styles.textGroup}>
        <MetropolisText medium style={styles.itemText}>
          1x Idli batter | 2x Dosa Batter
        </MetropolisText>
        <MetropolisText medium style={styles.itemText}>
          Total Price: $560
        </MetropolisText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.gray + 'bb',
    padding: 15,
    borderRadius: 16,
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
  timeText: {
    fontSize: 17,
    lineHeight: 22,
  },
  statusIcon: {
    marginRight: 12,
  },
  textGroup: {
    marginTop: 5,
    marginLeft: 31,
  },
  itemText: {
    fontSize: 16,
    marginTop: 8,
  },
})

export default ArchivedOrderCard
