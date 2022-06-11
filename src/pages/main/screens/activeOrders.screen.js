import MetropolisText from 'MetropolisText'
import React from 'react'
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native'
import theme from 'theme'
import ActiveOrderCard from '../components/ActiveOrders/ActiveOrderCard'
import ShowOlderOrdersButton from '../components/ActiveOrders/ShowOlderOrdersButton'

const ActiveOrdersScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <MetropolisText medium style={styles.title}>
          Active Orders
        </MetropolisText>
        <ActiveOrderCard />
        <ShowOlderOrdersButton />
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

export default ActiveOrdersScreen
