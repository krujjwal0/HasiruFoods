import MetropolisText from 'MetropolisText'
import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import theme from 'theme'
import ArchivedOrderCard from '../components/ArchivedOrders/ArchivedOrderCard'

const ArchivedOrdersScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <MetropolisText medium style={styles.title}>
          Archived Orders
        </MetropolisText>
        <ArchivedOrderCard />
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

export default ArchivedOrdersScreen
