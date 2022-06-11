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

const ManageSubscriptionsScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <EditModal />
        <MetropolisText medium style={styles.title}>
          Subscriptions
        </MetropolisText>
        <SubscriptionCard
          item={{
            id: 1,
            offer: '',
            name: 'Millet Dosa Batter',
            cta: 'Kick-start a Healthy Life!',
            subCta:
              'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
            subscriptionPrise: '$85',
            ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
            prise: '$99',
            extraSpace: 0,
            bgColor: '#E74C22',
            source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
            quantity: 1,
            status: 'active',
          }}
        />
        <SubscriptionCard
          item={{
            id: 1,
            offer: '',
            name: 'Millet Dosa Batter',
            cta: 'Kick-start a Healthy Life!',
            subCta:
              'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
            subscriptionPrise: '$85',
            ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
            prise: '$99',
            extraSpace: 0,
            bgColor: '#E74C22',
            source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
            quantity: 1,
            status: 'inactive',
          }}
        />
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

export default ManageSubscriptionsScreen
