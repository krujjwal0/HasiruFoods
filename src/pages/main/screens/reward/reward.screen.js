import ForEach from 'ForEach'
import MetropolisText from 'MetropolisText'
import React from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import theme from 'theme'
import { OfferData, RewardData } from '../../components/reward/data'
import OfferCard from '../../components/reward/OfferCard'
import PointCard from '../../components/reward/PointCard'
import RewardCard from '../../components/reward/RewardCard'

const RewardScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <PointCard />
        <View style={styles.offerSection}>
          <ForEach data={OfferData} Component={OfferCard} />
        </View>
        <MetropolisText bold style={styles.title}>
          Rewards
        </MetropolisText>
        <View style={styles.rewardSection}>
          <ForEach data={RewardData} Component={RewardCard} />
        </View>
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
    fontSize: 23,
    marginTop: 15,
    marginLeft: 0,
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

export default RewardScreen
