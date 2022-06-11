import ForEach from 'ForEach'
import MetropolisText from 'MetropolisText'
import React from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import theme from 'theme'
import { OfferData, RewardData } from '../components/reward/data'
import OfferCard from '../components/reward/OfferCard'
import PointCard from '../components/reward/PointCard'
import RewardCard from '../components/reward/RewardCard'
import EditModal from '../components/Subscription/ManageSubscription/EditModal'
import SubscriptionCard from '../components/Subscription/ManageSubscription/SubscriptionCard'
import DeliveryCard from '../components/UpcomingDeliveries/DeliveryCard'

const UpcomingDeliveriesScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <EditModal />
        <MetropolisText medium style={styles.title}>
          Upcoming Deliveries
        </MetropolisText>
        <DeliveryCard />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    marginTop: theme.element.headerHeight,
  },
  container: {
    flex: 1,
    margin: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 0,
    marginLeft: 0,
    alignSelf: 'center',
  },
  offerSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rewardSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
})

export default UpcomingDeliveriesScreen
