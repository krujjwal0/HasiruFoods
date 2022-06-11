import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import MetropolisText from 'MetropolisText'
import UnlockIcon from '_icons/UnlockIcon'
import theme from 'theme'

const PointCard = () => {
  return (
    <View style={styles.main}>
      <View style={styles.statusCard}>
        <MetropolisText bold style={styles.status}>
          0
        </MetropolisText>
        <MetropolisText bold style={styles.statusLabel}>
          Points
        </MetropolisText>
        <UnlockIcon style={styles.statusIcon} />
      </View>
      <Pressable
        style={styles.pressableOfferCard}
        android_ripple={{ color: theme.color.ripplePrimary, foreground: true }}>
        <View style={styles.OfferDetails}>
          <MetropolisText medium style={styles.OfferDetailsText}>
            Subscribe to
          </MetropolisText>
          <MetropolisText bold style={styles.OfferDetailsText}>
            The Healthy Investment
          </MetropolisText>
          <MetropolisText medium style={styles.OfferDetailsText}>
            to avail multiple benefits
          </MetropolisText>
        </View>
        <MetropolisText bold style={styles.OfferPrise}>
          $99/month
        </MetropolisText>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.color.primary,
    padding: 10,
    borderRadius: 24,
    overflow: 'hidden',
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    color: '#fff',
    fontSize: 54,
    marginLeft: 10,
  },
  statusLabel: {
    color: '#fff',
    fontSize: 27,
    marginLeft: 10,
    marginRight: 'auto',
  },
  statusIcon: {
    marginRight: 15,
  },
  pressableOfferCard: {
    backgroundColor: '#fff',
    borderRadius: 17,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  OfferDetails: {},
  OfferDetailsText: {},
  OfferPrise: {
    fontSize: 17,
  },
})

export default PointCard
